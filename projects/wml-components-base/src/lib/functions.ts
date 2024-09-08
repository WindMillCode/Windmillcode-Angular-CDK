import { WMLUIProperty,WMLUIFramework } from "./models";


export function detectFramework(): WMLUIFramework {
  let myWindow: any = window ?? {};
  let detectedFramework: WMLUIFramework = 'VanillaJS';

  const isReact = !!document.querySelector('[data-reactroot], [data-reactid]');
  const isAngular = !!myWindow.ng || !!document.querySelector('[ng-version]');
  const isVue = !!myWindow.Vue;
  const isSvelte = !!document.querySelector('[class*="svelte-"]');
  const isEmber = !!myWindow.Ember || !!document.querySelector('[id*="ember"]');
  const isBackbone = !!myWindow.Backbone;
  const isPreact = !!myWindow.preact || !!document.querySelector('[data-preactroot]');
  const isNext = !!document.querySelector('#__next') || !!myWindow.__NEXT_DATA__;
  const isNuxt = !!myWindow.__NUXT__;
  const isGatsby = !!myWindow.___gatsby;
  const isRemix = typeof myWindow.__remixManifest !== 'undefined';
  const isNest = !!document.querySelector('[ng-version]') && !!myWindow.NestFactory;
  const isLit = !!myWindow.litHtml || !!document.querySelector('template[shadowroot]');
  const isAlpine = !!myWindow.Alpine;
  const isMithril = !!myWindow.m || !!document.querySelector('[data-mithril]');
  const isAurelia = !!myWindow.Aurelia;
  const isRiot = !!myWindow.riot;
  const isInferno = !!myWindow.Inferno;
  const isStencil = !!document.querySelector('script[data-stencil-namespace]');

  if (isReact) detectedFramework = 'React';
  else if (isAngular) detectedFramework = 'Angular';
  else if (isVue) detectedFramework = 'Vue.js';
  else if (isSvelte) detectedFramework = 'Svelte';
  else if (isEmber) detectedFramework = 'Ember.js';
  else if (isBackbone) detectedFramework = 'Backbone.js';
  else if (isPreact) detectedFramework = 'Preact';
  else if (isNext) detectedFramework = 'Next.js';
  else if (isNuxt) detectedFramework = 'Nuxt.js';
  else if (isGatsby) detectedFramework = 'Gatsby';
  else if (isRemix) detectedFramework = 'Remix';
  else if (isNest) detectedFramework = 'NestJS';
  else if (isLit) detectedFramework = 'Lit';
  else if (isAlpine) detectedFramework = 'Alpine.js';
  else if (isMithril) detectedFramework = 'Mithril.js';
  else if (isAurelia) detectedFramework = 'Aurelia';
  else if (isRiot) detectedFramework = 'Riot.js';
  else if (isInferno) detectedFramework = 'Inferno';
  else if (isStencil) detectedFramework = 'Stencil';

  return detectedFramework;
}


export function generateUUID(prefix="") {
  // @ts-ignore
  return prefix+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}


export let generateClassPrefix= (prefix:string="")=> {
  return (val: string = "") => {
    if(val ===""){
      return prefix.split("_")[0]
    }
    return prefix + val + " "
  }
}

export let generateIdPrefix= (prefix:string="")=> {
  return (val: string = "") => {
    if(val ===""){
      return prefix.split("_")[0]
    }
    return prefix + val
  }
}


export function fillMissingProperties(source, target) {
  for (let key in source) {

    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key]) &&
        typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
      fillMissingProperties(source[key], target[key]);
    } else if (typeof source[key] !== 'object' || Array.isArray(source[key]) ) {
      target[key] = source[key];
    }
  }
}

export let updateClassString=(obj:any,myClassDefault:string,classListDefault:string)=>{

  return (val:string,type:"add"|"remove"|"clear"|"toggle"="add")=>{
      let myClass=myClassDefault
      let classList=classListDefault
      if(type === "add" && !obj[classList].includes(val)){
        obj[classList].push(val)
      }
      else if(type === "remove"){
        obj[classList] = (obj[classList])
        .filter((targetClass:string)=>{
          return targetClass !== val
        })
      }
      else if (type === "toggle") {
        if (obj[classList].includes(val)) {
          obj[classList] = obj[classList].filter((targetClass: string) => targetClass !== val);
        } else {
          obj[classList].push(val);
        }
      }
      else if(type ==="clear"){
        obj[classList] = []
      }
      obj[myClass] = obj[classList]
      .reduce((acc:string,x:string)=>{
        return acc+ " " +  x
      },"")
    }
}

export let   toggleClassString =(targetClass:string,classList:Array<string>,predicate:Function)=>{
  if(classList.includes(targetClass)){
    predicate(targetClass,"remove")
  }
  else{
    predicate(targetClass)
  }
}


/**
 * @obsolete, cant get to work properly
*/
let WMLUIPropertyDecorator = (target:any,key:any)=>{
  let text = target[key];
  let uiProperty = new WMLUIProperty({
    text
  })
  const getter = () => uiProperty;

  const setter = (newValue: any) => {
    uiProperty = newValue;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}


export let generateRandomNumber = (range: number = 100, additional: number = 0) => {
  return Math.floor(Math.random() * range) + additional
}


export let generateRandomColor = () => {
  let randomNumber = generateRandomNumber(0xFFFFFF);
  let hexColor = randomNumber.toString(16).padStart(6, '0');
  return `#${hexColor}`;
};


export let selectRandomOptionFromArray = (myArray: Array<any>, index?: number) => {
  return myArray[generateRandomNumber(index ?? myArray.length)]
}


export const replaceValuesWithPaths = <T = any>(
  obj: any,
  path = "",
  predicate = (props:{key: string, value: any, path: string, defaultAssignment: any}) => props.defaultAssignment
): T => {
  // @ts-ignore
  const newObj: T = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    let defaultAssignment;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      defaultAssignment = replaceValuesWithPaths(obj[key], path + key + ".", predicate);
    } else {
      defaultAssignment = path + key;
    }
    newObj[key] = predicate({key, value:obj[key], path, defaultAssignment});
  }

  return newObj;
};

