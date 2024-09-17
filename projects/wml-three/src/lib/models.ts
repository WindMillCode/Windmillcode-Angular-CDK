import { getGlobalObject, WMLConstructorDecorator } from "@windmillcode/wml-components-base";
import { Camera, Controls, Object3D, Renderer, Scene, WebGLRenderer } from "three";
import {GUI as DatGUI} from "dat.gui";
import { GUI as LilGUI } from "lil-gui";

@WMLConstructorDecorator
export class WMLThreeProps<R = Renderer> {
  constructor(params: Partial<WMLThreeProps> = {}) { }

  // @ts-ignore
  renderer: R = new WebGLRenderer({ antialias: true });
  rendererParentElement = getGlobalObject().document.body;
  scene: Object3D = new Scene();
  camera!: Camera;
  controls: Array<Controls<any>> = [];
  inspectors : Array<DatGUI | LilGUI> = [];

  init = () => {
    this.addRendererToDOM();
  }
  addRendererToDOM = () => {
    let rect = this.getContainerDimensionDetails();
    // @ts-ignore
    this.renderer.setSize(rect.width, rect.height);
    // @ts-ignore
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // @ts-ignore
    this.rendererParentElement.appendChild(this.renderer.domElement);
  }
  private getContainerDimensionDetails = () => {
    if (this.rendererParentElement === document.body) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    } else {
      let rect = this.rendererParentElement.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
      };
    }
  };
}


@WMLConstructorDecorator
export class WMLThreeObjectProps {
  constructor(params: Partial<WMLThreeObjectProps> = {}) { }
}
