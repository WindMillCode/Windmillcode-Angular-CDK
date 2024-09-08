import { Type, VERSION, ViewContainerRef } from "@angular/core";



export let addCustomComponent =(vcf:ViewContainerRef,cpnt:Type<any>,props:any)=>{

  let ref =  vcf.createComponent(cpnt )

  if ((parseInt(VERSION.major) === 14 && parseInt(VERSION.minor) >= 1 && parseInt(VERSION.patch) >= 0) ||
  (parseInt(VERSION.major) >= 15)) {
    ref.setInput('props', props);
  }

  else{
    ref.instance.props =props
    ref.instance.ngOnInit?.()
  }

  return ref
}




