import { Tree } from '@angular-devkit/schematics';


export function listFiles(tree: Tree, path: string) {
  const dir = tree.getDir(path);
  let items:string[] = []
  dir.visit((filePath) => {
    items.push(filePath)
  });
  return items;
}
