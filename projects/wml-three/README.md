# WML Three

This content is for the 18.2.4100 version. Switch to the[latest version](/Windmillcode-Angular-CDK-Docs/intro/wml-three/)for up-to-date documentation.

The WML Three.js library provides a streamlined way to integrate Three.js into your Angular applications. It offers a set of classes and utilities that simplify the creation and management of 3D scenes, renderers, cameras, controls, lights, objects, and animations. This library is designed to help developers quickly set up interactive 3D graphics without dealing with the boilerplate code typically associated with Three.js.



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/wml-three</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/wml-components-base</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">three</span></div></div></code> 

## Roadmap

[ ] multiple renderers need to be able to accurately choose the correct object from the mouse
[ ] examples with the effect composers
[ ] any unifed and comphesive progress loader for all features in a threejs prop



### Caveats

must set     in tsconfig.json compilerOptions<code><div class="ec-line"><div class="code"><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">noImplicitAny</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#82AAFF;--1:#3C63B3">false</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">skipLibCheck</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#82AAFF;--1:#3C63B3">true</span></div></div></code>

also when you know a property exists on an object you must use @ts-ignore and debug the property to make sure until we can have more advanced typescript types, for our classes we provide getters for different types of the same property but for threejs objects thats harder if not impossible to do

## Usage



### Getting Started

<iframe src="https://stackblitz.com/edit/stackblitz-starters-aspfhh?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Animating Elements

<iframe src="https://stackblitz.com/edit/stackblitz-starters-sl8aiv?ctl=1&embed=1&file=src%2F2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Adding An Inspector

<iframe src="https://stackblitz.com/edit/stackblitz-starters-qphv3p?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Multiple Renderers

<iframe src="https://stackblitz.com/edit/stackblitz-starters-bqlvmz?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Different Light Types

<iframe src="https://stackblitz.com/edit/stackblitz-starters-5nz35n?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Selecting Objects With Your Mouse

<iframe src="https://stackblitz.com/edit/stackblitz-starters-ytjej6?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Loading Various Types of Models

<iframe src="https://stackblitz.com/edit/stackblitz-starters-wcn5sj?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Disable Features

<iframe src="https://stackblitz.com/edit/stackblitz-starters-uu793c?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Full Example

<iframe src="https://stackblitz.com/edit/stackblitz-starters-3vagtl?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## References



###  <code dir="auto">WMLThreeProps</code> 

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">renderers</code></td><td><code dir="auto">Array&lt;any | Renderer&gt;</code></td><td>List of renderers used in the application, defaulting to a <code dir="auto">WebGLRenderer</code> with antialiasing enabled. It is an array because effect composers are renderers</td></tr><tr><td><code dir="auto">rendererParentElement</code></td><td><code dir="auto">HTMLElement</code></td><td>The DOM element to which the renderer’s canvas will be appended. Defaults to <code dir="auto">document.body</code>.</td></tr><tr><td><code dir="auto">scenes</code></td><td><code dir="auto">Array&lt;Scene&gt;</code></td><td>Array of <code dir="auto">Three.js</code> scenes. Defaults to a single new <code dir="auto">Scene</code>.</td></tr><tr><td><code dir="auto">cameras</code></td><td><code dir="auto">Array&lt;Camera&gt;</code></td><td>List of cameras used in the scenes.</td></tr><tr><td><code dir="auto">controls</code></td><td><code dir="auto">Array&lt;Controls&lt;any&gt;&gt;</code></td><td>Array of control mechanisms like <code dir="auto">OrbitControls</code> for user interaction.</td></tr><tr><td><code dir="auto">inspectors</code></td><td><code dir="auto">Array&lt;InspectorOptions&gt;</code></td><td>Configuration for GUI inspectors like <code dir="auto">DatGUI</code> or <code dir="auto">LilGUI</code>, including options for real-time parameter adjustments.</td></tr><tr><td><code dir="auto">lights</code></td><td><code dir="auto">Array&lt;WMLThreeLightProps&gt;</code></td><td>List of light configurations, each containing a <code dir="auto">THREE.Light</code> object and related properties like helpers and shadow helpers.</td></tr><tr><td><code dir="auto">rayCasters</code></td><td><code dir="auto">Array&lt;WMLThreeRayCasterProps&gt;</code></td><td>Raycaster configurations used for detecting user interactions with objects in the scene.</td></tr><tr><td><code dir="auto">objects</code></td><td><code dir="auto">Array&lt;WMLThreeObjectProps&gt;</code></td><td>List of object configurations, including geometries, materials, meshes, and textures.</td></tr><tr><td><code dir="auto">clock</code></td><td><code dir="auto">Clock</code></td><td><code dir="auto">Three.js</code> Clock object used for tracking time in animations.</td></tr><tr><td><code dir="auto">animateFunctions</code></td><td><code dir="auto">Array&lt;Function&gt;</code></td><td>List of custom functions to be called on each frame of the animation loop. Each function receives an object containing the <code dir="auto">Clock</code> as a parameter.</td></tr></tbody></table>

Methods<table><thead><tr><th>Method</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">init(props?)</code></td><td><code dir="auto">Promise&lt;void&gt;</code></td><td>Initializes the <code dir="auto">Three.js</code> environment with optional parameters to enable or disable specific initialization steps like cameras, controls, lights, objects, and animations.</td></tr><tr><td><code dir="auto">preCheck()</code></td><td><code dir="auto">void</code></td><td>Performs preliminary checks to ensure that the environment supports <code dir="auto">Three.js</code> (e.g., checking for the presence of the document object).</td></tr><tr><td><code dir="auto">animate()</code></td><td><code dir="auto">void</code></td><td>Default animation loop function that calls all functions in <code dir="auto">animateFunctions</code> and renders the current scene with the current camera.</td></tr><tr><td><code dir="auto">addRendererToDOM()</code></td><td><code dir="auto">void</code></td><td>Appends the renderer’s canvas to the <code dir="auto">rendererParentElement</code> and sets up initial renderer configurations like size, pixel ratio, and shadow map settings.</td></tr><tr><td><code dir="auto">initCameras(props?)</code></td><td><code dir="auto">void</code></td><td>Initializes cameras with optional parameters like field of view angle, near and far clipping planes.</td></tr><tr><td><code dir="auto">initControls()</code></td><td><code dir="auto">void</code></td><td>Sets up user interaction controls, such as <code dir="auto">OrbitControls</code>, associated with the current camera and renderer.</td></tr><tr><td><code dir="auto">initLights()</code></td><td><code dir="auto">void</code></td><td>Adds lights to the scene based on the configurations in <code dir="auto">lights</code>, including optional helpers and shadow helpers for debugging and visualization.</td></tr><tr><td><code dir="auto">initObjects()</code></td><td><code dir="auto">Promise&lt;void&gt;</code></td><td>Loads and adds objects to the scene, handling both regular meshes and loaded assets like textures and GLTF models.</td></tr><tr><td><code dir="auto">initInspectors()</code></td><td><code dir="auto">void</code></td><td>Initializes GUI inspectors for real-time parameter adjustments during development.</td></tr><tr><td><code dir="auto">initRayCasters()</code></td><td><code dir="auto">void</code></td><td>Sets up raycasters for detecting user interactions with objects in the scene, including event listeners for pointer movements.</td></tr><tr><td><code dir="auto">listenForWindowResize()</code></td><td><code dir="auto">void</code></td><td>Adds an event listener to handle window resizing, updating camera aspects and renderer sizes accordingly.</td></tr><tr><td><code dir="auto">getRendererParentDetails()</code></td><td><code dir="auto">{ width: number; height: number; }</code></td><td>Retrieves the dimensions of the <code dir="auto">rendererParentElement</code> to configure renderer and camera settings.</td></tr><tr><td><code dir="auto">getCurentScene()</code></td><td><code dir="auto">Scene</code></td><td>Returns the current scene being used.</td></tr><tr><td><code dir="auto">getCurentCamera()</code></td><td><code dir="auto">Camera</code></td><td>Returns the current camera being used.</td></tr><tr><td><code dir="auto">getCurrentRenderer()</code></td><td><code dir="auto">Renderer</code></td><td>Returns the current renderer being used.</td></tr><tr><td><code dir="auto">getCurrentControls()</code></td><td><code dir="auto">Controls&lt;any&gt;</code></td><td>Returns the current control mechanism being used.</td></tr><tr><td><code dir="auto">getCurrentRayCaster()</code></td><td><code dir="auto">WMLThreeRayCasterProps</code></td><td>Returns the current raycaster configuration being used.</td></tr></tbody></table>

 <code dir="auto">InspectorOptions</code> <table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">gui</code></td><td><code dir="auto">DatGUI | LilGUI</code></td><td>An instance of the GUI inspector to be used for real-time adjustments of properties on three js objects.</td></tr><tr><td><code dir="auto">values</code></td><td><code dir="auto">{ [key: string]: InspectorOption }</code></td><td>Configuration options for the inspector, including values and change handlers.</td></tr><tr><td><code dir="auto">options</code></td><td><code dir="auto">{ [key: string]: any }</code></td><td>Internal state management for the inspector options.</td></tr></tbody></table>

 <code dir="auto">InspectorOption</code> <table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">value</code></td><td><code dir="auto">any</code></td><td>The initial value of the option to be controlled via the inspector.</td></tr><tr><td><code dir="auto">onChange</code></td><td><code dir="auto">(value: any, init: boolean) =&gt; void</code></td><td>Optional function to be called when the value changes.</td></tr><tr><td><code dir="auto">min</code></td><td><code dir="auto">number</code></td><td>Optional minimum value for numerical controls.</td></tr><tr><td><code dir="auto">max</code></td><td><code dir="auto">number</code></td><td>Optional maximum value for numerical controls.</td></tr></tbody></table>

 <code dir="auto">WMLThreeCommonProps</code> <table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">scene</code></td><td><code dir="auto">Scene</code></td><td>Getter and setter for the current scene.</td></tr><tr><td><code dir="auto">camera</code></td><td><code dir="auto">Camera</code></td><td>Getter and setter for the current camera.</td></tr><tr><td><code dir="auto">renderer</code></td><td><code dir="auto">WebGLRenderer</code></td><td>Getter and setter for the current renderer.</td></tr><tr><td><code dir="auto">control</code></td><td><code dir="auto">OrbitControls</code></td><td>Getter and setter for the current control mechanism, specifically <code dir="auto">OrbitControls</code>.</td></tr></tbody></table>

<table><thead><tr><th>Method</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">updateCameraPosition(props?)</code></td><td><code dir="auto">void</code></td><td>Updates the camera’s position and optionally its orientation using <code dir="auto">lookAt</code>. Also updates controls if applicable.</td></tr></tbody></table>



###  <code dir="auto">WMLThreeObjectProps</code> 

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">geometries</code></td><td><code dir="auto">Array&lt;BufferGeometry&gt;</code></td><td>List of geometries to be used in creating meshes.</td></tr><tr><td><code dir="auto">materials</code></td><td><code dir="auto">Array&lt;Material | Material[]&gt;</code></td><td>List of materials or arrays of materials for the meshes.</td></tr><tr><td><code dir="auto">meshes</code></td><td><code dir="auto">Array&lt;Object3D | GLTF&gt;</code></td><td>List of meshes or loaded models to be added to the scene.</td></tr><tr><td><code dir="auto">textures</code></td><td><code dir="auto">Array&lt;WMLThreeTexturesProps&gt;</code></td><td>List of texture configurations to be loaded and applied to materials or meshes.</td></tr></tbody></table>

 <code dir="auto">WMLThreeCommonObjectProps</code> <table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">geometry</code></td><td><code dir="auto">BufferGeometry</code></td><td>Getter and setter for the primary geometry.</td></tr><tr><td><code dir="auto">material</code></td><td><code dir="auto">Material | Material[]</code></td><td>Getter and setter for the primary material(s).</td></tr><tr><td><code dir="auto">mesh</code></td><td><code dir="auto">Object3D | GLTF</code></td><td>Getter and setter for the primary mesh or model.</td></tr><tr><td><code dir="auto">texture</code></td><td><code dir="auto">WMLThreeTexturesProps</code></td><td>Getter and setter for the primary texture configuration.</td></tr></tbody></table>

<table><thead><tr><th>Method</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">toggleShadow(props?)</code></td><td><code dir="auto">void</code></td><td>Toggles the shadow casting and receiving properties of the mesh.</td></tr></tbody></table>



###  <code dir="auto">WMLThreeLightProps</code> 

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">light</code></td><td><code dir="auto">Light</code></td><td>The <code dir="auto">Three.js</code> light object to be added to the scene.</td></tr><tr><td><code dir="auto">addHelper</code></td><td><code dir="auto">boolean</code></td><td>Flag indicating whether to add a helper object for visualizing the light. The helper class is based on the class of the light property</td></tr><tr><td><code dir="auto">helper</code></td><td><code dir="auto">Object3D</code></td><td>The helper object associated with the light, if any.</td></tr><tr><td><code dir="auto">addShadowHelper</code></td><td><code dir="auto">boolean</code></td><td>Flag indicating whether to add a shadow camera helper for debugging shadows.      its class is the CameraHelper</td></tr><tr><td><code dir="auto">shadowHelper</code></td><td><code dir="auto">CameraHelper</code></td><td>The shadow camera helper associated with the light’s shadow camera, if any.</td></tr></tbody></table>

<table><thead><tr><th>Method</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">toggleShadow(props?)</code></td><td><code dir="auto">void</code></td><td>Toggles the shadow casting and receiving properties of the light.</td></tr><tr><td><code dir="auto">updateCamera()</code></td><td><code dir="auto">void</code></td><td>Updates the light’s shadow camera projection matrix and associated helpers.</td></tr></tbody></table>



###  <code dir="auto">WMLThreeTexturesProps</code> 

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">manager</code></td><td><code dir="auto">LoadingManager</code></td><td>The loading manager to manage multiple texture loading operations.</td></tr><tr><td><code dir="auto">group</code></td><td><code dir="auto">Array&lt;TextureLoadOption&gt;</code></td><td>Array of texture load options, each containing URL, loader, and optional callbacks for load events.</td></tr></tbody></table>

 <code dir="auto">TextureLoadOption</code> <table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">url</code></td><td><code dir="auto">string</code></td><td>The URL of the texture to be loaded.</td></tr><tr><td><code dir="auto">loader</code></td><td><code dir="auto">Loader</code></td><td>The loader instance to use for loading the texture.</td></tr><tr><td><code dir="auto">onLoad</code></td><td><code dir="auto">(data: any) =&gt; void</code></td><td>Optional callback function to be called upon successful loading.</td></tr><tr><td><code dir="auto">onProgress</code></td><td><code dir="auto">(event: ProgressEvent) =&gt; void</code></td><td>Optional callback for progress updates during loading.</td></tr><tr><td><code dir="auto">onError</code></td><td><code dir="auto">(err: unknown) =&gt; void</code></td><td>Optional callback to handle errors during loading.</td></tr></tbody></table>



###  <code dir="auto">WMLThreeRayCasterProps</code> 

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">raycaster</code></td><td><code dir="auto">Raycaster</code></td><td>The <code dir="auto">Three.js Raycaster</code> instance used for detecting intersections.</td></tr><tr><td><code dir="auto">mousePosition</code></td><td><code dir="auto">Vector2</code></td><td>The normalized mouse position used for raycasting calculations.</td></tr><tr><td><code dir="auto">hasMouseEnteredRenderer</code></td><td><code dir="auto">boolean</code></td><td>Flag to indicate whether the mouse has entered the renderer area, used to optimize raycasting checks.</td></tr></tbody></table>

<table><thead><tr><th>Name</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">intersectCallback</code></td><td><code dir="auto">(intersects: Intersection&lt;Object3D&lt;Object3DEventMap&gt;&gt;[]) =&gt; void</code></td><td>Callback function to handle the results of raycasting intersections.</td></tr></tbody></table>



## Changelog



### v18.2.4100 [9/18/24]

first version of library[](/Windmillcode-Angular-CDK-Docs/18.2.4100/intro/wml-angular-components-base)[](/Windmillcode-Angular-CDK-Docs/18.2.4100/schematics/wml-schematics/)