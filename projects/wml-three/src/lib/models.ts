import { getGlobalObject, WMLConstructorDecorator } from "@windmillcode/wml-components-base";
import { AmbientLight, BufferGeometry, Camera, CameraHelper, Clock, Controls, DirectionalLight, DirectionalLightHelper, HemisphereLight, HemisphereLightHelper, Light, Loader, LoadingManager, Material, Mesh,  Object3D, OrthographicCamera, PerspectiveCamera, PointLight, PointLightHelper, Raycaster, Renderer, Scene, SpotLight, SpotLightHelper,  Texture,  TextureLoader, Vector3, WebGLRenderer } from "three";
import { GUI as DatGUI } from "dat.gui";
import { GUI as LilGUI } from "lil-gui";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
@WMLConstructorDecorator
export class WMLThreeProps<R = Renderer> {
  constructor(params: Partial<WMLThreeProps> = {}) { }
  renderers: Array<any| Renderer > = [new WebGLRenderer({ antialias: true })];
  rendererParentElement = getGlobalObject().document.body;
  // TODO Array<Object3D> was there for a reason why
  scenes: Array<Scene> = [new Scene()]
  cameras: Array<Camera> = [];
  controls: Array<Controls<any>> = [];
  inspectors: Array<{
    gui?: DatGUI | LilGUI,
    options: {
      [key: string]: {
        value:any,
        onChange?:(value:any,init:boolean) => void
        min?:number
        max?:number
      }
    },
    internalOptions?:{
      [key: string]: any
    }
  }> = [];
  lights: Array<WMLTHREELightProps> = [
    new WMLTHREELightProps({
      light:new AmbientLight(0xFFFFFF, 1),
      addHelper: true
    })
  ];
  rayCasters: Array<any> = [new Raycaster()];
  objects:Array<WMLThreeObjectProps> = []
  clock = new Clock()
  animateFunctions:Array<(props:{clock:Clock})=>void> = []

  // init methods
  init = async (props?:Partial<{
    preCheck :any
    addRendererToDOM:any
    initCameras:any
    initControls:any
    initLights:any
    initRayCasters:any
    initObjects:any
    initInspectors:any
    animate:any
    listenForWindowResize:any
  }>) => {
    let { preCheck,addRendererToDOM, initCameras, initControls, initInspectors, initLights, initRayCasters, initObjects,animate,listenForWindowResize } = props || {}
    if(preCheck !== false) this.preCheck()
    if(addRendererToDOM !== false) this.addRendererToDOM();
    if(initCameras !== false) this.initCameras(initCameras)
    if(initControls !== false) this.initControls()
    if(initLights !== false) this.initLights()
    if(initRayCasters !== false) this.initRayCasters()
    if(initObjects !== false) await this.initObjects()
    if(initInspectors !== false) this.initInspectors()
    if(animate !== false) this.getCurrentRenderer().setAnimationLoop(this.animate);
    if(listenForWindowResize !== false) this.listenForWindowResize()
  }

  preCheck = () => {
    let myGlobal = getGlobalObject()
    if(!myGlobal?.document) {
      throw new Error('Three.js cannot work in your program, because it requires the "document" global.Browser environments usually hold this in the global window variable')
    }
  }
  animate = () => {
    this.animateFunctions.forEach(fn => fn({clock:this.clock}))
    this.getCurrentRenderer().render(this.getCurentScene(), this.getCurentCamera());
  }
  addRendererToDOM = () => {
    let rect = this.getRendererParentDetails();
    let renderer: WebGLRenderer = this.getCurrentRenderer()
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x333333)
    renderer.shadowMap.enabled = true
    this.rendererParentElement.appendChild(this.getCurrentRenderer().domElement);
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
      new OrbitControls(this.getCurentCamera(), this.getCurrentRenderer().domElement)
    )
  }
  initLights = () => {
    this.lights.forEach((lightInfo) => {

      let {light,addHelper,helper,addShadowHelper,shadowHelper} = lightInfo
      // helps with pixelated shadows
      if(light.shadow){
        light.shadow.mapSize.width = light.shadow.mapSize.height = 1024
      }
      //
      this.getCurentScene().add(light)
      if(addHelper){
        if(light instanceof DirectionalLight){
          lightInfo.helper =helper = new DirectionalLightHelper(light,5)
        }
        else if (light instanceof PointLight){
          lightInfo.helper =helper = new PointLightHelper(light,5)
        }
        else if (light instanceof SpotLight){
          lightInfo.helper =helper = new SpotLightHelper(light,5)
        }
        else if (light instanceof HemisphereLight){
          lightInfo.helper =helper = new HemisphereLightHelper(light,5)
        }
        else{
          console.warn(`no helper for ${light.type}`)
        }
      }
      if(helper){
        this.getCurentScene().add(helper)
      }
      if(addShadowHelper && light.castShadow && light.shadow){
        lightInfo.shadowHelper =shadowHelper =new CameraHelper(light.shadow.camera)

      }
      if(shadowHelper){
        this.getCurentScene().add(shadowHelper)
      }



    })
  }
  initObjects = () => {
    this.objects.forEach((object: WMLThreeObjectProps) => {

      object.regularMeshes.forEach((mesh) => {
        this.getCurentScene().add(mesh)

      })
    })

    return Promise.all(this.objects.map((object: WMLThreeObjectProps) => {
      return Promise.all(object.textures.map((texture) => {
        return Promise.all(texture.group.map((item,index0) => {

          item.loader.manager = texture.manager
          return new Promise((res,rej)=>{
            item.loader.load(
              item.url,
              (data:any) =>{
                object.meshes[index0] = data
                item.onLoad?.(data)
                res(data)
              },
              item.onProgress,
              (err:any) =>{
                item.onError?.(err)
                rej(err)
              }
            )
          })


        }))
      }))
    }))
  }
  initInspectors = () => {
    this.inspectors.forEach((inspector) => {
      if(inspector.gui instanceof DatGUI){
        Object.entries(inspector.options).forEach(([key,val]:any) => {
          inspector.internalOptions = inspector.internalOptions ?? {}
          inspector.internalOptions[key] = val.value
        })
        Object.entries(inspector.options).forEach(([key,val]:any) => {
          let control
          if(['boolean'].includes(typeof val.value) ){
            control =inspector.gui.add(inspector.internalOptions, key)
          }
          if(['string'].includes(typeof val.value) ){
            control =inspector.gui.addColor(inspector.internalOptions, key)
          }
          else if(typeof val.value === 'number'){
            control = inspector.gui.add(inspector.internalOptions, key, val?.min,val?.max)
          }
          if(val?.onChange){
            val?.onChange(val.value,true)
            control.onChange(val?.onChange)
          }
        })
      }
    })
  }
  initRayCasters = () => {
    this.rayCasters.push()
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
  getRendererParentDetails = () => {
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

  getCurentScene = () => this.scenes[0]
  getCurentCamera = () => this.cameras[0]
  getCurrentRenderer = () => this.renderers[0]
  getCurrentControls = () => this.controls[0]

}


@WMLConstructorDecorator
export class WMLCommonThreeProps extends WMLThreeProps<WebGLRenderer> {
  constructor(params: Partial<WMLCommonThreeProps> = {}) { super() }

  static warnings ={
    usingCameraLookAtWithOrbitControls: false
  }


  get scene() { return this.getCurentScene() }
  set scene(scene: Scene) { this.scenes[0] = scene }

  get camera() { return this.getCurentCamera() }
  set camera(camera: Camera) { this.cameras[0] = camera }

  get control() { return this.getCurrentControls() as OrbitControls }
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
  materials: Array<Material | Array<Material>> = []
  meshes: Array<Object3D | GLTF> = []
  textures : Array<WMLThreeTexturesProps> = []

  get regularMeshes() { return this.meshes as Array<Object3D> }
  get gltfMeshes() { return this.meshes as Array<GLTF> }

}

@WMLConstructorDecorator
export class WMLCommonThreeObjectProps extends WMLThreeObjectProps {
  constructor(props: Partial<WMLCommonThreeObjectProps> = {}) {super(props)}
  wmlInit() {

    if (!this.mesh && this.textures.length === 0) {
      this.mesh =  new Mesh(this.geometry, this.material)
    }
  }

  get geometry() { return this.geometries[0] }
  set geometry(geometry: BufferGeometry) {
    this.geometries[0] = geometry
  }

  get material() { return this.materials[0] }
  set material(material: Material | Array<Material>) { this.materials[0] = material }

  get mesh() { return this.meshes[0] }
  set mesh(mesh: Object3D|GLTF) { this.meshes[0] = mesh }

  get regularMesh () { return this.meshes[0] as Object3D }
  set regularMesh(mesh: Object3D) { this.meshes[0] = mesh }

  get gltfMesh() { return this.meshes[0] as GLTF }
  set gltfMesh(mesh: GLTF) { this.meshes[0] = mesh }

  get texture() { return this.textures[0] }
  set texture(texture: WMLThreeTexturesProps) { this.textures[0] = texture }


  toggleShadow = (props: {cast?:boolean, receive?:boolean}) => {

      this.regularMesh.castShadow = props.cast ?? !this.regularMesh.castShadow
      this.regularMesh.receiveShadow = props.receive ?? !this.regularMesh.receiveShadow

  }

  loadTexture = (url:string) => {}

}


@WMLConstructorDecorator
export class WMLTHREELightProps {
  constructor(params: Partial<WMLTHREELightProps> = {}) { }

  light!: Light
  addHelper =false
  helper!:Object3D
  addShadowHelper=false
  shadowHelper!:CameraHelper



  toggleShadow = (props: {cast?:boolean, receive?:boolean}) => {
    this.light.castShadow =    props.cast ?? !this.light.castShadow
    this.light.receiveShadow = props.receive ?? !this.light.receiveShadow
  }

  updateCamera = () => {
    // @ts-ignore
    this.light.shadow?.camera?.updateProjectionMatrix();
    this.shadowHelper?.update()
  }
}

@WMLConstructorDecorator
export class WMLThreeTexturesProps {
  constructor(params: Partial<WMLThreeTexturesProps> = {}) { }


  manager= new LoadingManager()
  group:Array<{
    url: string;
    loader: Loader;
    // TODO change to (Texture | GLTF)=>void
    onLoad?: (data: any) => void;
    onProgress?: (event: ProgressEvent) => void;
    onError?: (err: unknown) => void;
  }> = []
}
