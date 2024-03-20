# Windmillcode Angular CDK

Welcome to the Windmillcode Angular Library, a comprehensive suite of Angular components designed to help you build engaging, robust, and user-friendly web applications. This library, also known as the Windmillcode Angular Component Development Kit (CDK), provides a collection of reusable UI components, each crafted with attention to detail and performance.

The project is still in beta because we want to make fundamental changes to our component library concerning animation and conformity refer below to which packages you can use in production.

## Packages
The Windmillcode Angular Library offers a diverse range of components, each designed to fulfill specific UI requirements in your Angular applications. Below is a list of available components along with brief descriptions:



2. **Templates**: A set of predefined templates or layout patterns that can be reused across your application. These templates could range from simple UI sections to complex page layouts.

3. **WML Accordion Zero**: An accordion component that allows you to display content in a collapsible format. It's useful for FAQs, lists, or any content that benefits from a compact presentation.

4. **WML Button Zero**: A customizable button component that can be used across your application, ensuring consistency and themability.

5. **WML Carousel Zero**: A carousel component that enables the display of multiple items in a sliding or rotating fashion, perfect for galleries or showcasing multiple products.

6. **WML Chips Zero**: A component that represents input, attributes, or actions as compact elements, commonly used for tags, contact information, or interactive elements.

7. **WML Components Base**: This might refer to a foundational set of components or utilities that other components in the library depend on.

8. **WML Field**: A field component, potentially for forms, providing a standardized way to input data.

9. **WML File Manager**: A comprehensive component for handling file interactions, including uploading, downloading, and displaying file information.

10. **WML Form**: A component or set of components designed to create consistent and functional forms, including various form controls.

11. **WML Infinite Dropdown**: A dropdown component that supports infinite scrolling, ideal for scenarios where you need to handle a large set of selectable options.

12. **WML Input**: A versatile input component for forms, providing a uniform way to collect user input.

13. **WML Mobile Nav Zero**: A navigation component designed specifically for mobile user interfaces, providing an optimized menu for smaller screens.

14. **WML Notify**: A notification component, allowing you to display alerts, messages, or other important information to users.

15. **WML Options**: A component that likely provides a set of selectable options, possibly as a more advanced dropdown or select component.

16. **WML Panel**: A panel component, which could be used to group content or controls together, often used in dashboards or as part of complex interfaces.

17. **WML Penrose**: Possibly a specialized component or a set of components with a specific use case, the name suggests a unique or custom feature.

18. **WML Popup**: A component for displaying pop-up content, such as modals, dialogues, or tooltips.

19. **WML Select Zero**: A select component that provides a dropdown list of options for users to choose from.

20. **WML Slicebox**: Potentially a component offering a unique way of presenting content, perhaps with a 3D or animated effect.

21. **WML Table Zero**: A table component designed for displaying tabular data, with features possibly including sorting, filtering, and pagination.

22. **WML Tabs**: A component for creating tabbed interfaces, allowing users to switch between different views or content sections within the same context.

23. **WML Toggle Zero**: A toggle switch component, providing an intuitive way for users to make binary choices, such as enabling/disabling settings.

24. **WML Components**: This might be a collective term for all the components offered by the library or a specific subset of components that are grouped together for a particular purpose.

Each component is crafted to address specific UI needs while ensuring consistency and ease of integration into your Angular projects. For more detailed information on each component, including usage examples and configuration options, refer to the library's detailed documentation.

## Features

- **Extensive Component Collection**: Our library includes a wide array of components, ranging from UI elements like buttons and input fields to complex constructs like carousels and dropdowns. Each component is designed to be modular, making it easy to integrate into your existing Angular projects.


- **Customizable and Themable**: Components are designed to be easily customizable and themable, allowing you to align them with your application's branding and design guidelines.Via modifying the css variables specific to each component you can get granular control over the look and feel of the components.

<!-- - **Test Ready**: Each component comes with its own set of unit tests, ensuring that they work as expected and providing a foundation for you to add your own tests as you integrate them into your projects. -->

## Getting Started

To get started with the Windmillcode Angular Library, you can clone the repository or install it via your preferred package manager.

### Installation

```bash
npm install windmillcode-angular-library
# or
yarn add windmillcode-angular-library
```

### Usage

After installation, you can import the components you need into your Angular modules:

```typescript
import { WmlButtonZeroModule } from 'windmillcode-angular-library';

@NgModule({
  declarations: [
    AppComponent,
    // other components
  ],
  imports: [
    WmlButtonZeroModule,
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Now, you can use the component in your templates:

```html
<wml-button-zero>
  Click me!
</wml-button-zero>
```

## Documentation

Coming soon
<!-- Each component is documented with details on how to use it, its input/output properties, and event emitters. To dive deeper into a specific component, refer to its dedicated documentation section. -->

## Contributing

Instructions coming soon
<!-- We welcome contributions to the Windmillcode Angular Library! Whether it's adding new components, enhancing existing ones, or reporting bugs, your contributions are valuable to us. Please refer to our contribution guidelines before making a pull request. -->

## License

The Windmillcode Angular Library is [MIT licensed](LICENSE.md).

## Contact

If you have any questions or feedback, please don't hesitate to reach out to us via [email](contact@windmillcode.com). We're always looking to improve our library and help the developer community.


Enjoy building with the Windmillcode Angular Library!
