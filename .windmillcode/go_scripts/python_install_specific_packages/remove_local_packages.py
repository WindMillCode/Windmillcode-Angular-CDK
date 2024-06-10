import os
import shutil
import sys
import re
import logging
import traceback

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def find_dist_info_folders(target_folder):
    """Find all .dist-info directories in the target folder."""
    return [f for f in os.listdir(target_folder) if f.endswith('.dist-info')]

def read_dependencies_from_metadata(metadata_file):
    """Read dependencies from a METADATA file in a .dist-info directory."""
    dependencies = []
    with open(metadata_file, 'r', encoding='utf-8') as file:
        for line in file:
            match = re.match(r'^Requires-Dist: ([^;]+)', line)
            if match:
                dependencies.append(match.group(1).split(' ')[0])
    return dependencies

def build_dependency_graph(target_folder, dist_info_folders):
    """Build a graph of dependencies for all packages."""
    dependency_graph = {}
    for folder in dist_info_folders:
        package_name = folder.split('.')[0].replace('_', '-')
        metadata_file = os.path.join(target_folder, folder, 'METADATA')
        dependencies = read_dependencies_from_metadata(metadata_file)
        for dep in dependencies:
            if dep not in dependency_graph:
                dependency_graph[dep] = set()
            dependency_graph[dep].add(package_name)
    return dependency_graph

def can_remove_package(package_name, dependency_graph, packages_to_remove, force=False):
    """Check if a package can be safely removed."""
    if force:
        return True
    if package_name not in dependency_graph:
        return True
    shared_dependencies = [dep for dep in dependency_graph[package_name] if dep not in packages_to_remove]
    if shared_dependencies:
        logging.info(f"Package '{package_name}' has shared dependencies {shared_dependencies} and will not be removed.")
        return False
    return True

def get_package_directory_name(dist_info_path):
    """Get the actual package directory name from the top_level.txt file."""
    top_level_file = os.path.join(dist_info_path, 'top_level.txt')
    if not os.path.exists(top_level_file):
        logging.warning(f"top_level.txt not found in {dist_info_path}")
        return None

    with open(top_level_file, 'r', encoding='utf-8') as file:
        package_directory_name = file.readline().strip()
        return package_directory_name

def delete_package(package_name, target_folder, dependency_graph, packages_to_remove, force=False):
    """Delete package and its unique dependencies."""
    package_files = find_dist_info_folders(target_folder)
    for package_file in package_files:
        if package_file.startswith(package_name.replace('-', '_')):
            dist_info_path = os.path.join(target_folder, package_file)
            package_dir_name = get_package_directory_name(dist_info_path)
            if package_dir_name:
                package_dir_path = os.path.join(target_folder, package_dir_name)
                if os.path.exists(package_dir_path) and os.path.isdir(package_dir_path):
                    shutil.rmtree(package_dir_path)
                    logging.info(f"Removed package folder: {package_dir_path}")
                else:
                    logging.warning(f"Package folder not found for: {package_dir_name}")
            if os.path.exists(dist_info_path):
                shutil.rmtree(dist_info_path)
                logging.info(f"Removed metadata folder: {dist_info_path}")

            if not force:
                metadata_file = os.path.join(dist_info_path, 'METADATA')
                if os.path.exists(metadata_file):
                    dependencies = read_dependencies_from_metadata(metadata_file)
                    for dep in dependencies:
                        if can_remove_package(dep, dependency_graph, packages_to_remove):
                            delete_package(dep, target_folder, dependency_graph, packages_to_remove)

def main():
    if len(sys.argv) < 3:
        logging.error("Usage: python remove_local_packages.py [package_names] [target_folder] [--force]")
        sys.exit(1)

    force = False
    if '--force' in sys.argv:
        force = True
        sys.argv.remove('--force')

    try:
        package_names = sys.argv[1:-1]
        target_folder = sys.argv[-1]

        dist_info_folders = find_dist_info_folders(target_folder)
        dependency_graph = build_dependency_graph(target_folder, dist_info_folders)
        packages_to_remove = set(package_names)
        kept_packages = set()

        for package_name in package_names:
            if can_remove_package(package_name, dependency_graph, packages_to_remove, force):
                delete_package(package_name, target_folder, dependency_graph, packages_to_remove, force)
            else:
                logging.info(f"Kept: {package_name}")
                kept_packages.add(package_name)
        kept_packages_string = ','.join(kept_packages)
        print(kept_packages_string)
    except BaseException as e:
        traceback.print_exc()
        print("ERROR")

if __name__ == "__main__":
    main()
