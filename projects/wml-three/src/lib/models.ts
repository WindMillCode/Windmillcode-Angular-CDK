import { getGlobalObject, WMLConstructorDecorator } from "@windmillcode/wml-components-base";
import { AmbientLight, BufferGeometry, Camera, Controls, Light, Material, Mesh,  Object3D, OrthographicCamera, PerspectiveCamera, Raycaster, Renderer, Scene, Vector3, WebGLRenderer } from "three";
import { GUI as DatGUI } from "dat.gui";
import { GUI as LilGUI } from "lil-gui";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
@WMLConstructorDecorator
export class WMLThreeProps<R = Renderer> {
  constructor(params: Partial<WMLThreeProps> = {}) { }


  renderers: Array<any| Renderer > = [new WebGLRenderer({ antialias: true })];
  rendererParentElement = getGlobalObject().document.body;
  scenes: Array<Object3D> = [new Scene()]
  cameras: Array<Camera> = [];
  controls: Array<Controls<any>> = [];
  inspectors: Array<{
    gui: DatGUI | LilGUI,
    options: any
  }> = [];
  lights: Array<Light> = [
    new AmbientLight(0xFFFFFF, 1)
  ];
  rayCasters: Array<any> = [];
  objects:Array<WMLThreeObjectProps> = []

  // init methods
  init = (props?:Partial<{
    addRendererToDOM:boolean
    initCameras:boolean
    initControls:boolean
    initInspectors:boolean
    initLights:boolean
    initRayCasters:boolean
    initObjects:boolean
    animate:boolean
    listenForWindowResize:boolean
  }>) => {
    let { addRendererToDOM, initCameras, initControls, initInspectors, initLights, initRayCasters, initObjects,animate,listenForWindowResize } = props || {}
    if(addRendererToDOM !== false) this.addRendererToDOM();
    if(initCameras !== false) this.initCameras()
    if(initControls !== false) this.initControls()
    if(initInspectors !== false) this.initInspectors()
    if(initLights !== false) this.initLights()
    if(initRayCasters !== false) this.initRayCasters()
    if(initObjects !== false) this.initObjects()
    if(animate !== false) this.renderers[0].setAnimationLoop(this.animate);
    if(listenForWindowResize !== false) this.listenForWindowResize()
  }

  animate = () => {
    this.renderers[0].render(this.scenes[0], this.cameras[0]);
  }
  addRendererToDOM = () => {
    let rect = this.getRendererParentDetails();
    let renderer: WebGLRenderer = this.renderers[0]
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x333333)
    this.rendererParentElement.appendChild(this.renderers[0].domElement);
  }
  initCameras = (props = {
    fieldOfViewAngle: 75,
    nearestObjectCanBeToCameraToBeSeen: 0.1,
    farthestObjectCanBeToCameraToBeSeen: 2000,
  }) => {
    let { fieldOfViewAngle, nearestObjectCanBeToCameraToBeSeen, farthestObjectCanBeToCameraToBeSeen } = props
    let rect = this.getRendererParentDetails();
    let camera = new PerspectiveCamera(
      fieldOfViewAngle,
      rect.width / rect.height,
      nearestObjectCanBeToCameraToBeSeen,
      farthestObjectCanBeToCameraToBeSeen
    );
    camera.position.set(5,5,5)
    this.cameras.push(camera)
  }
  initControls = () => {
    this.controls.push(
      new OrbitControls(this.cameras[0], this.renderers[0].domElement)
    )
  }
  initInspectors = () => {
    this.inspectors.push({
      gui: new DatGUI(),
      options: {}
    })
  }
  initLights = () => {
    this.scenes[0].add(this.lights[0]);
  }
  initObjects = () => {
    this.objects.forEach((object: WMLThreeObjectProps) => {
      this.scenes[0].add(object.meshes[0])
    })
  }
  initRayCasters = () => {
    this.rayCasters.push(new Raycaster())
  }
  listenForWindowResize =()=>{
    getGlobalObject().onresize =()=>{
      const {height,width} = this.getRendererParentDetails()
      this.cameras.forEach((camera:any)=>{
        if([PerspectiveCamera].some((cameraType)=>camera instanceof cameraType)){
          camera.aspect = width / height;
        }
        if([PerspectiveCamera,OrthographicCamera].some((cameraType)=>camera instanceof cameraType)){
          camera.updateProjectionMatrix();
        }
      })
      this.renderers.forEach((renderer:Renderer)=>{
        renderer.setSize(width,height)
      })
    }
  }
  //

  private getRendererParentDetails = () => {
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
export class WMLCommonThreeProps extends WMLThreeProps<WebGLRenderer> {
  constructor(params: Partial<WMLCommonThreeProps> = {}) { super() }

  static warnings ={
    usingCameraLookAtWithOrbitControls: false
  }


  get scene() { return this.scenes[0] }
  set scene(scene: Object3D) { this.scenes[0] = scene }

  get camera() { return this.cameras[0] }
  set camera(camera: Camera) { this.cameras[0] = camera }

  get control() { return this.controls[0] as OrbitControls }
  set control(control: OrbitControls) { this.controls[0] = control }


  updateCameraPosition = (props :{position:Vector3,lookAt?:Vector3,updateControls?:boolean} ={position: new Vector3(),updateControls:true}) => {
    let {position,lookAt,updateControls} = props
    this.camera.position.set(position.x, position.y, position.z)
    if(lookAt){
      if(this.control instanceof OrbitControls && !WMLCommonThreeProps.warnings.usingCameraLookAtWithOrbitControls){
        console.warn("cant use lookAt with OrbitControls")
        WMLCommonThreeProps.warnings.usingCameraLookAtWithOrbitControls = true
      }
      this.camera.lookAt(lookAt.x,lookAt.y,lookAt.z)
    }
    if(updateControls !== false){
      this.control?.update()
    }

  }
}

@WMLConstructorDecorator
export class WMLThreeObjectProps {
  constructor(params: Partial<WMLThreeObjectProps> = {}) { }

  geometries: Array<BufferGeometry> = []
  materials: Array<Material> = []
  meshes: Array<Object3D> = []

}

@WMLConstructorDecorator
export class WMLCommonThreeObjectProps extends WMLThreeObjectProps {
  constructor(props: Partial<WMLCommonThreeObjectProps> = {}) {super(props)}
  wmlInit() {

    if (!this.mesh) {
      this.mesh =  new Mesh(this.geometry, this.material)
    }
  }

  get geometry() { return this.geometries[0] }
  set geometry(geometry: BufferGeometry) {
    this.geometries[0] = geometry
  }

  get material() { return this.materials[0] }
  set material(material: Material) { this.materials[0] = material }

  get mesh() { return this.meshes[0] }
  set mesh(mesh: Object3D) { this.meshes[0] = mesh }
}
