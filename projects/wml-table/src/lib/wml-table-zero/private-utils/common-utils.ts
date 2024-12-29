import { WML_DOCUMENT } from "@windmillcode/wml-components-base";

export let getCSSVARS =(selector:string="wml-table-zero")=> {
  let root = WML_DOCUMENT.querySelector(selector) as HTMLElement;
  let rootStyle = () => getComputedStyle(root);
  let cssvars= {
    wmlMobile: rootStyle().getPropertyValue('--wml-table-mobile'),
    wmlTablet: rootStyle().getPropertyValue('--wml-table-tablet'),
    wmlDesktop: rootStyle().getPropertyValue('--wml-table-desktop'),
  }
  return cssvars
}
