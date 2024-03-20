
import { Tree } from '@angular-devkit/schematics';
import { InsertChange, Change } from '@schematics/angular/utility/change';

export function wmlUpdateFile(host: Tree, modulePath: string, changes: Change[]) {
  let recorder = host.beginUpdate(modulePath);
  changes.forEach((addDeclaration) => {
    if (addDeclaration instanceof InsertChange) {
      recorder.insertLeft(addDeclaration.pos, addDeclaration.toAdd);
    }
  });
  host.commitUpdate(recorder);
}
