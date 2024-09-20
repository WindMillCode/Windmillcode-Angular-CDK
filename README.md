<table border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center">
      <a href="https://github.com/sponsors/WindMillCode?o=esc">
        <img src="https://raw.githubusercontent.com/WindMillCode/global_media/main/github_sponsor_card.png" alt="Sponsor" style="width: 100%;" />
      </a>
    </td>
    <td align="center">
      <a href="https://www.gofundme.com/f/strengthen-our-business-to-take-on-bigger-initiati/widget/medium?sharesheet=CAMPAIGN_PAGE&attribution_id=sl:620bea14-af8a-423b-ab6b-f9d82f490976">
        <img src="https://raw.githubusercontent.com/WindMillCode/global_media/main/gofund_me_support_our_work.png" alt="Donate" style="width: 100%;" />
      </a>
    </td>
  </tr>
</table>

# Windmillcode Angular CDK



Welcome to the Windmillcode Angular Library, a comprehensive suite of Angular components designed to help you build engaging, robust, and user-friendly web applications. This library, also known as the Windmillcode Angular Component Development Kit (CDK), provides a collection of reusable UI components, each crafted with attention to detail and performance.

{/* <!-- The project is still in beta because we want to make fundamental changes to our component library concerning animation, conformity, and accessing fuctionality w/o the need of a component for greater customization refer below to which packages you can use in production. --> */}


## Features

### [Minimal Configuration/Installation](#mininal-confguration)
-  most libraries depend on Angular Material and compatibility issues appear as your projects get bigger. The basis of our components are vanilla js and stable typescript features so as your project grows if there are any configuration issues it (hopefully) wont be with us

### Articulate Complex Thoughts Into Code Easier

- How can we make our own flyout without grabbing a component. what if we want to remake a component from scratch down do mabye 90% of the vey detail. By understanding that you can bind our classes to every element complex features that are rather wieldy or difficult to implement now have a uniform pattern which also for greater creativity on the part of the developer.

### Feels Like React
- You have a component and you have your props and you also have setState. This design makes it easier for those with a React/Nextjs background to transition to Angular if using our library

### Plug And Play
Angular can get rather a verbose language we aim to simplify angular with plug and play mentaility
With plug and play every compoonent has its props as in react
this props is a class and you simply pass the prop the to class to render the component
```ts
// app.component.ts

// Standalone there are default values to see how the component works
props = new WMLInputZeroProps({})

// To pass arguments/customize
props = new WMLInputZeroProps({
  datetime:new WMLInputZeroDatetimeProps({
    type:"datetime",
    min =new Date("[YOUR BIRTHDAY FOR EXAMPLE]")
  })
})
```

```html
// app.component.html
<wml-input-zero [props]=props>
</wml-input-zero>
```


### Constant and conforming updates :
- Since around Angular 16.2 for every angular version  we create a new version of the library. The versions are based on @angular-core  This means that you can be sure that the library is always up to date with the latest angular version. down to the patch version. However as of 18.1.3 the library has been unified for production use


### Extensive Component Collection
 Our library includes a wide array of components, ranging from UI elements like buttons and input fields to complex constructs like file upload and dropdowns. Each component is designed to be modular, making it easy to integrate into your existing Angular projects.


### Customizable and Themable
 Components are designed to be easily customizable and themable, allowing you to align them with your application's branding and design guidelines.Via modifying the css variables specific to each component you can get granular control over the look and feel of the components.



{/* <!-- - **Test Ready**: Each component comes with its own set of unit tests, ensuring that they work as expected and providing a foundation for you to add your own tests as you integrate them into your projects. --> */}

### PREMIUM / ENTERPRISE
**Internationalization** - All components are i18n compatible under ngx-translate. Use the default en.json file in your project and update and pass the i18n strings to the appropriate keys in the props that are passed to the component
[View the premium version of the library](https://www.privjs.com/packages?search=windmillcode)

## Caveats
* fonts are not set so you can  set global fonts without worry of overrides
* "All previous versions in the changelog dont exist All versions start at  18.1.3003, although there are plans for backporting to every patch version of angular. (non-guarantted) use  npm install --verbose [PACKAGE NAMES] --force for versions older than 18

## Packages
The Windmillcode Angular Library offers a diverse range of components, each designed to fulfill specific UI requirements in your Angular applications. Below is a list of available components along with brief descriptions:



* [**WML Components Base**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/intro/wml-components-base):


This is the foundational package that our whole library focuses on. Its foundation is the WMLUIProperty the very basic building block of any application meant to be used for all javascript frameworks not just Angular. From here the basis of pagination, animation ,  dynamic components, and more are built.

* [**WML Angular Components Base**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/intro/wml-angular-components-base):


Extends WML Components Based to be custoized for angular developers. Useful to keep conformity within the codebase.

* [**WML Three**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/intro/wml-three):


Three js is rather wieldy and not everything you need to create a scene is there for you this changes with our three.js library. Our classes handle the mathematics and physics implementations so you can focus on adding and placing objects in the scene

* [**WML Schematics**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/schematics/wml-schematics):


Our own angular schematics to generate Angular classes according to our angular project template

* [**WML Accordion**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-accordion):


An accordion component that allows you to display content in a collapsible format. It's useful for FAQs, lists, or any content that benefits from a compact presentation.

* [**WML Button**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-button):


A customizable button component that can be used across your application, ensuring consistency and themability.

* [**WML Carousel**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-carousel):


A carousel component that enables the display of multiple items in a sliding or rotating fashion, perfect for galleries or showcasing multiple products.

* [**WML Chips**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-chips):


A component that represents input, attributes, or actions as compact elements, commonly used for tags, contact information, or interactive elements.

* [**WML Field**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-field):


A field component, potentially for forms, providing a standardized way to input data.

* [**WML File Manager**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-file-manager  ):


A comprehensive component for handling file interactions, including uploading, downloading(in backlog), and displaying file information.

* [**WML Form**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-form):


A component or set of components designed to create consistent and functional forms, including various form controls.

* [**WML Infinite Dropdown**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-infinite-dropdown):


A dropdown component that expands infinitely. Great for menus with a large amount of navigation content

* [**WML Input**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-input):


A versatile input component for forms, providing a uniform way to collect user input.

* [**WML Mobile Nav**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-mobile-nav):


A navigation component designed specifically for mobile user interfaces, providing an optimized menu for smaller screens.

* [**WML Notify**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-notify):


A notification component, allowing you to display alerts, messages, or other important information to users.

* [**WML Options**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-options):


A component that  provides a set of selectable options, possibly as a more advanced dropdown or select component.

* [**WML Panel**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-panel):


A flyout component component used to provide auxillary content, information or controls, often used in dashboards or as part of complex interfaces.

* [**WML Penrose**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-penrose):


A custom loading component

* [**WML Popup**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-popup):


A component for displaying pop-up content, such as modals, dialogues, or tooltips.

* [**WML Select**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-select):


A select component that provides a dropdown list of options for users to choose from.

* [**WML Slicebox**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-slicebox):


based on [jquery slicebox](https://tympanus.net/Development/Slicebox/)
more fluid way of implementing a carousel

* [**WML Table**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-table):


A table component designed for displaying tabular data, with features  including sorting, filtering, and pagination.

* [**WML Tabs**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-tabs):


A component for creating tabbed interfaces, allowing users to switch between different views or content sections within the same context.

* [**WML Toggle**](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-toggle):


 A toggle switch component, providing an intuitive way for users to make binary choices, such as enabling/disabling settings.

---

Each component is crafted to address specific UI needs while ensuring consistency and ease of integration into your Angular projects. For more detailed information on each component, including usage examples and configuration options, refer to the library's detailed documentation.


## Getting Started

* Click on the any of the links of the component you need and install with npm, or your preferred package manager


## Documentation

Each component is documented with details on how to use it, its input/output properties, and event emitters. To dive deeper into a specific component, refer to its README.md dedicated documentation section.

## [Contributing](#contributing)

** Work In Progress**
We welcome contributions to the Windmillcode Angular Library! Whether it's adding new components, enhancing existing ones, or reporting bugs, your contributions are valuable to us. Please refer to our contribution guidelines before making a pull request.

* pull the desired repo
* if its a components module replace free from free.module.ts with module ts
* Terminal 1
```sh
cd projects/[desired project]
npx ng build --watch
```
* Terminal 2
```sh
# wait for project to appear in dist
cd dist/[desired project]
npm link
```

in the consumer you need add the path to the dist in the consumers tsconfig.json
```JSON
  "[FULL LIBRARY NAME FROM PACKAGE.JSON]": [
    "[PATH TO REPO GENERATED DIST]/[LIBRAY FOLDER NAME]"
  ],
  // EXAMPLE
"@windmillcode/angular-wml-slicebox": [
  "../../../../windmillcode-Angular-CDK/dist/wml-slicebox"
],
```
## License

The Windmillcode Angular Library is [MIT licensed](LICENSE.md).

## Contact

If you have any questions or feedback, please join us in [discord](https://discord.gg/mHPD8eF2ZR). We're always looking to improve our library and help the developer community.


Enjoy building with the Windmillcode Angular Library!

