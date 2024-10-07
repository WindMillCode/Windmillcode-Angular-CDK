import { getGlobalObject, WMLConstructorDecorator } from "@windmillcode/wml-components-base";
import { AmbientLight, BufferGeometry, Camera, CameraHelper, Clock, Controls, DirectionalLight, DirectionalLightHelper, HemisphereLight, HemisphereLightHelper, Intersection, Light, Loader, LoadingManager, Material, Mesh,  Object3D, Object3DEventMap, OrthographicCamera, PerspectiveCamera, PointLight, PointLightHelper, Raycaster, Renderer, Scene, SpotLight, SpotLightHelper, Vector2, Vector3, WebGLRenderer,InstancedMesh } from "three";
import { GUI as DatGUI } from "dat.gui";
import { GUI as LilGUI } from "lil-gui";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

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
    values: {
      [key: string]: {
        value:any,
        onChange?:(value:any,init:boolean) => void
        min?:number
        max?:number
      }
    },
    options?:{
      [key: string]: any
    }
  }> = [];
  lights: Array<WMLThreeLightProps> = [
    new WMLThreeLightProps({
      light:new AmbientLight(0xFFFFFF, 1)
    })
  ];
  rayCasters: Array<WMLThreeRayCasterProps> = [new WMLThreeRayCasterProps()];
  objects:Array<WMLThreeObjectProps> = []
  clock = new Clock()
  animateFunctions:Array<(props:{clock:Clock})=>void> = []

  // init methods
  init = async (props?:Partial<{
    preCheck :any
    initRenderers:any
    initCameras:any
    initControls:any
    initLights:any
    initRayCasters:any
    initObjects:any
    initInspectors:any
    animate:any
    listenForWindowResize:any
  }>) => {
    let { preCheck, initRenderers, initCameras, initControls, initInspectors, initLights, initRayCasters, initObjects,animate,listenForWindowResize } = props || {}
    if(preCheck !== false) this.preCheck()
    if(initRenderers !== false) this.initRenderers();
    if(initCameras !== false) this.initCameras(initCameras)
    if(initControls !== false) this.initControls()
    if(initLights !== false) this.initLights()
    if(initObjects !== false) await this.initObjects()
    if(initRayCasters !== false) this.initRayCasters()
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
    this.renderers.forEach((renderer)=>{

      renderer.render(this.getCurentScene(), this.getCurentCamera());
    })
  }
  initRenderers = () => {
    this.renderers.forEach((renderer) => {
      let rect = this.getRendererParentDetails();
      renderer.setSize(rect.width, rect.height);
      if(renderer instanceof WebGLRenderer) {
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x333333)
        renderer.shadowMap.enabled = true
      }
      if(renderer instanceof CSS2DRenderer){
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0px';
        renderer.domElement.style.pointerEvents = 'none'

      }
      this.rendererParentElement.appendChild(renderer.domElement);
    })
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

          let {loader,url,onLoad,onProgress,onError} = item
          loader.manager = texture.manager
          return new Promise((res,rej)=>{
            if(loader instanceof DRACOLoader){

              loader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
              loader.setDecoderConfig({ type: 'js' });
              let gtlfLoader = new GLTFLoader()
              gtlfLoader.setDRACOLoader(loader)
              item.loader = loader =gtlfLoader
            }
            loader.load(
              url,
              (data:any) =>{
                object.meshes[index0] = data
                onLoad?.(data)
                res(data)
              },
              onProgress,
              (err:any) =>{
                onError?.(err)
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
        Object.entries(inspector.values).forEach(([key,val]:any) => {
          inspector.options = inspector.options ?? {}
          inspector.options[key] = val.value
        })
        Object.entries(inspector.values).forEach(([key,val]:any) => {
          let control
          if(['boolean'].includes(typeof val.value) ){
            control =inspector.gui.add(inspector.options, key)
          }
          if(['string'].includes(typeof val.value) ){
            control =inspector.gui.addColor(inspector.options, key)
          }
          else if(typeof val.value === 'number'){
            control = inspector.gui.add(inspector.options, key, val?.min,val?.max)
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
    this.rayCasters.forEach((item) => {
      let {raycaster,mousePosition,intersectCallback} = item
      getGlobalObject().addEventListener('pointermove', (e) => {
        item.hasMouseEnteredRenderer = true
        let {width,height} = this.getRendererParentDetails()
        mousePosition.x = (e.clientX / width) * 2 - 1;
        mousePosition.y = -(e.clientY / height) * 2 + 1;
      })
      this.animateFunctions.push(()=>{
        if(!item.hasMouseEnteredRenderer ) return
        raycaster.setFromCamera(mousePosition, this.getCurentCamera())
        let intersects = raycaster.intersectObjects(this.getCurentScene().children)
        intersectCallback(intersects)
      })
    })
  }
  listenForWindowResize =()=>{
    getGlobalObject().addEventListener("resize",(e)=>{
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
    })

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
  getCurrentRayCaster = () => this.rayCasters[0]

}


@WMLConstructorDecorator
export class WMLThreeCommonProps extends WMLThreeProps<WebGLRenderer> {
  constructor(params: Partial<WMLThreeCommonProps> = {}) { super() }

  static warnings ={
    usingCameraLookAtWithOrbitControls: false
  }


  get scene() { return this.getCurentScene() }
  set scene(scene: Scene) { this.scenes[0] = scene }

  get camera() { return this.getCurentCamera() }
  set camera(camera: Camera) { this.cameras[0] = camera }

  get control() { return this.getCurrentControls() as OrbitControls }
  set control(control: OrbitControls) { this.controls[0] = control }

  get renderer() { return this.getCurrentRenderer() }
  set renderer(renderer: WebGLRenderer) { this.renderers[0] = renderer }


  updateCameraPosition = (props :{position:Vector3,lookAt?:Vector3,updateControls?:boolean} ={position: new Vector3(),updateControls:true}) => {
    let {position,lookAt,updateControls} = props
    this.camera.position.set(position.x, position.y, position.z)
    if(lookAt){
      if(this.control instanceof OrbitControls && !WMLThreeCommonProps.warnings.usingCameraLookAtWithOrbitControls){
        console.warn("cant use lookAt with OrbitControls")
        WMLThreeCommonProps.warnings.usingCameraLookAtWithOrbitControls = true
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
  meshes: Array<Object3D | GLTF | CSS2DObject> = []
  textures : Array<WMLThreeTexturesProps> = []

  get regularMeshes() { return this.meshes as Array<Mesh> }
  get gltfMeshes() { return this.meshes as Array<GLTF> }
  get css2dMeshes() { return this.meshes as Array<CSS2DObject>}
  get instancedMeshes() { return this.meshes as Array<InstancedMesh> }

}

@WMLConstructorDecorator
export class WMLThreeCommonObjectProps extends WMLThreeObjectProps {
  constructor(props: Partial<WMLThreeCommonObjectProps> = {}) {super(props)}
  wmlInit =() =>{

    if (!this.mesh && this.textures.length === 0) {
      this.mesh = this.createMesh(this.geometry, this.material)
    }
  }

  get geometry() { return this.geometries[0] }
  set geometry(geometry: BufferGeometry) {
    this.geometries[0] = geometry
  }

  get material() { return this.materials[0] }
  set material(material: Material | Array<Material>) { this.materials[0] = material }

  get mesh() { return this.meshes[0] }
  set mesh(mesh: Object3D|GLTF|CSS2DObject) { this.meshes[0] = mesh }

  get regularMesh () { return this.meshes[0] as Mesh }
  set regularMesh(mesh: Mesh) { this.meshes[0] = mesh }

  get gltfMesh() { return this.meshes[0] as GLTF }
  set gltfMesh(mesh: GLTF) { this.meshes[0] = mesh }

  get css2dMesh() { return this.meshes[0] as CSS2DObject }
  set css2dMesh(mesh: CSS2DObject) { this.meshes[0] = mesh }

  get instancedMesh() { return this.meshes[0] as InstancedMesh }
  set instancedMesh(meshes: InstancedMesh) { this.meshes[0] = meshes }

  get texture() { return this.textures[0] }
  set texture(texture: WMLThreeTexturesProps) { this.textures[0] = texture }



  toggleShadow = (props: {cast?:boolean, receive?:boolean}) => {
    this.regularMesh.castShadow = props.cast ?? !this.regularMesh.castShadow
    this.regularMesh.receiveShadow = props.receive ?? !this.regularMesh.receiveShadow
  }

  /**
   * @description Meant for planes but you can still use for your convenience
  */
  makeModelLieFlat = ()=>{
    this.regularMesh.rotation.x = -0.5 * Math.PI;
  }

  createMesh =(geometry,material)=>{
    return new Mesh(geometry, material)
  }

}


@WMLConstructorDecorator
export class WMLThreeLightProps {
  constructor(params: Partial<WMLThreeLightProps> = {}) { }

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

@WMLConstructorDecorator
export class WMLThreeRayCasterProps {
  constructor(params: Partial<WMLThreeRayCasterProps> = {}) { }


  raycaster = new Raycaster()
  mousePosition = new Vector2()
  hasMouseEnteredRenderer= false

  intersectCallback = (intersects:Intersection<Object3D<Object3DEventMap>>[])=>{

  }

}
