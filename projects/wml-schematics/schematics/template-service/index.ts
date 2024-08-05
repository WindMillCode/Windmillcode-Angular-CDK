import { Rule, apply, applyTemplates, url, move, chain, mergeWith,MergeStrategy,externalSchematic } from "@angular-devkit/schematics";
import { strings,normalize} from "@angular-devkit/core";

class TemplateServiceSchema {
    name!:string
    path!:string
    flat:boolean = false

}
export function generateServiceTemplate(options:TemplateServiceSchema):Rule{
  return ()=>{
    options.name = options.name.replace(/^wml-/,"WML-")
    const templateSource = apply(
      url('./files'),
      [
        applyTemplates({
          classify:strings.classify,
          dasherize:strings.dasherize,
          name:options.name
        }),
        move( normalize(`/${options.path}/${strings.dasherize(options.name)}`))
      ]
    )
    options.flat = false
    return chain([
      externalSchematic('@schematics/angular','service',options),
      mergeWith(templateSource,MergeStrategy.Overwrite)
    ])

  }
}
