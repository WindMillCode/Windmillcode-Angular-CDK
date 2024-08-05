export let getCSSVARS =(selector:string="wml-table-zero")=> {
  let root = document.querySelector(selector) as HTMLElement;
  let rootStyle = () => getComputedStyle(root);
  let cssvars= {
    wmlMobile: rootStyle().getPropertyValue('--wml-table-mobile'),
    wmlTablet: rootStyle().getPropertyValue('--wml-table-tablet'),
    wmlDesktop: rootStyle().getPropertyValue('--wml-table-desktop'),
  }
  return cssvars
}
