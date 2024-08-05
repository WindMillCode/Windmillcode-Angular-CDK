# Windmillcode Angular CDK

Welcome to the Windmillcode Angular Library, a comprehensive suite of Angular components designed to help you build engaging, robust, and user-friendly web applications. This library, also known as the Windmillcode Angular Component Development Kit (CDK), provides a collection of reusable UI components, each crafted with attention to detail and performance.

The project is still in beta because we want to make fundamental changes to our component library concerning animation, conformity, and accessing fuctionality w/o the need of a component for greater customization refer below to which packages you can use in production.

## Features

## Plug And Play
Angular can get rather a verbose language we aim to simplify angular with plug and play mentaility
With plug and play every compoonent has its props as in react
this props is a class and you simply pass the prop the to class to render the component
```ts
props = new WMLInputZeroProps({})

// To pass arguments/ customizer

props = new WMLInputZeroProps({
  datetime:new WMLInputZeroDatetimeProps({
    min =new Date("[YOUR BIRTHDAY FOR EXAMPLE]")
  })
})
```

```html
<wml-input [props]=props>
</wml-input>
```
All props have default values so you can learn how to properly use the component

- **Constant and conforming updates** : Since around Angular 16.2 for every angular version  we create a new version of the library. They based on @angular-core  This means that you can be sure that the library is always up to date with the latest angular version. down to the patch version. Dont believe use check a packages CHANGELOG.md file.


- **Extensive Component Collection**: Our library includes a wide array of components, ranging from UI elements like buttons and input fields to complex constructs like carousels and dropdowns. Each component is designed to be modular, making it easy to integrate into your existing Angular projects.


- **Customizable and Themable**: Components are designed to be easily customizable and themable, allowing you to align them with your application's branding and design guidelines.Via modifying the css variables specific to each component you can get granular control over the look and feel of the components.

<!-- - **Test Ready**: Each component comes with its own set of unit tests, ensuring that they work as expected and providing a foundation for you to add your own tests as you integrate them into your projects. -->


## Packages
The Windmillcode Angular Library offers a diverse range of components, each designed to fulfill specific UI requirements in your Angular applications. Below is a list of available components along with brief descriptions:



1. **[**WML Components Base**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-components-base)**:
* BETA
This is the foundational package that our whole library focuses on. Its foundation is the WMLUIProperty the very basic building block of our Angular Application. From here the basis of pagination, animation ,dynamic components, and more are built.


2. **[**WML Schematics**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/templates)**:
* BETA
Our own angular schematics to generate Angular classes according to our angular project template

3. [**WML Accordion Zero**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-accordion):
* BETA
An accordion component that allows you to display content in a collapsible format. It's useful for FAQs, lists, or any content that benefits from a compact presentation.

4. [**WML Button Zero**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-button):
* BETA
A customizable button component that can be used across your application, ensuring consistency and themability.

5. [**WML Carousel Zero**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-carousel):
* BETA
A carousel component that enables the display of multiple items in a sliding or rotating fashion, perfect for galleries or showcasing multiple products.

6. [**WML Chips Zero**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-chips):
* BETA
A component that represents input, attributes, or actions as compact elements, commonly used for tags, contact information, or interactive elements.

8. [**WML Field**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-field):
* BETA
A field component, potentially for forms, providing a standardized way to input data.

9. [**WML File Manager**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-file-manager  ):
* BETA
A comprehensive component for handling file interactions, including uploading, downloading, and displaying file information.

10. [**WML Form**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-form):
* BETA
A component or set of components designed to create consistent and functional forms, including various form controls.

11. [**WML Infinite Dropdown**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-infinite-dropdown):
* BETA
A dropdown component that supports infinite scrolling, ideal for scenarios where you need to handle a large set of selectable options.

12. [**WML Input**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-input):
* BETA
A versatile input component for forms, providing a uniform way to collect user input.

13. [**WML Mobile Nav Zero**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-mobile-nav):
* BETA
A navigation component designed specifically for mobile user interfaces, providing an optimized menu for smaller screens.

14. [**WML Notify**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-notify):
* BETA
A notification component, allowing you to display alerts, messages, or other important information to users.

15. [**WML Options**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-options):
* BETA
A component that likely provides a set of selectable options, possibly as a more advanced dropdown or select component.

16. [**WML Panel**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-panel):
* BETA
A panel component, which could be used to group content or controls together, often used in dashboards or as part of complex interfaces.

17. [**WML Penrose**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-penrose):
* BETA
A custom loading component

18. [**WML Popup**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-popup):
* BETA
A component for displaying pop-up content, such as modals, dialogues, or tooltips.

19. [**WML Select Zero**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-select):
* BETA
A select component that provides a dropdown list of options for users to choose from.

20. [**WML Slicebox**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-slicebox):
* PRODUCTION READY
Potentially a component offering a unique way of presenting content, perhaps with a 3D or animated effect.

21. [**WML Table Zero**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-table):
* BETA
A table component designed for displaying tabular data, with features possibly including sorting, filtering, and pagination.

22. [**WML Tabs**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-tabs):
* BETA
A component for creating tabbed interfaces, allowing users to switch between different views or content sections within the same context.

23. [**WML Toggle Zero**](https://github.com/WindMillCode/Windmillcode-Angular-CDK/tree/master/projects/wml-toggle):
* BETA
 A toggle switch component, providing an intuitive way for users to make binary choices, such as enabling/disabling settings.


Each component is crafted to address specific UI needs while ensuring consistency and ease of integration into your Angular projects. For more detailed information on each component, including usage examples and configuration options, refer to the library's detailed documentation.


## Getting Started

* Click on the any of the links of the component you need and install with npm, or your preferred package manager


## Documentation

Each component is documented with details on how to use it, its input/output properties, and event emitters. To dive deeper into a specific component, refer to its README.md dedicated documentation section.

## Contributing

Instructions coming soon
<!-- We welcome contributions to the Windmillcode Angular Library! Whether it's adding new components, enhancing existing ones, or reporting bugs, your contributions are valuable to us. Please refer to our contribution guidelines before making a pull request. -->

## License

The Windmillcode Angular Library is [MIT licensed](LICENSE.md).

## Contact

If you have any questions or feedback, please don't hesitate to reach out to us via [email](contact@windmillcode.com). We're always looking to improve our library and help the developer community.


Enjoy building with the Windmillcode Angular Library!
