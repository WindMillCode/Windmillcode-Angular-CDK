# Overview

The Windmillcode Angular WML Accordion Zero library provides a set of components and services to create accordion functionalities in Angular applications. Central to the library is the WMLAccordionZeroComponent, designed to enable developers to implement accordion structures efficiently. This library facilitates the development of accordions with features like dynamic content loading, customizable sections, and animation controls, all grounded in the WMLUIProperty framework to ensure consistency in development practices.  By leveraging these components, developers can construct accordions that are responsive and adaptable to various content types and user interactions, enhancing the informational architecture of Angular-based web applications.

WMLAccordionZeroComponent is the container which is populated with WMLAccordionZeroItemComponent to populate the accordion. WMLAccordionZeroItemComponent is a dynamic component and by defuault is uses WMLAccordionZeroSampleComponent as the accordion body and WMLAccordionZeroTitleComponent as the title of the accordion. you will want to replace

# Installation
```bash
npm install -s @windmillcode/angular-wml-accordion-zero
```

# Usage
Certainly! Below are some usage examples of the WML Accordion Zero library for various development needs:

### 1. Accordion Usage


at its very core this is all you need to get started with the accordion
as default parameters already exist to show you how to use the accordion
```typescript
import { WMLAccordionZeroComponent, WMLAccordionZeroParams } from '@windmillcode/angular-wml-accordion-zero';

@Component({
  selector: 'app-example',
  template: `
    <wml-accordion-zero [params]="accordionParams"></wml-accordion-zero>
  `
})
export class AppComponent {
  accordionParams = new WMLAccordionZeroParams({})
}
```

This example demonstrates a simple accordion with two sections:

```typescript
import { WMLAccordionZeroComponent, WMLAccordionZeroParams } from '@windmillcode/angular-wml-accordion-zero';

@Component({
  selector: 'app-example',
  template: `
    <wml-accordion-zero [params]="accordionParams"></wml-accordion-zero>
  `
})
export class AppComponent {
  accordionParams = new WMLAccordionZeroParams({
    items: [
      [
        new WMLAccordionZeroItemParams({
          title: 'Section 1',
          accordionBody: new WMLCustomComponent({
            cpnt: MyContentComponent1,
            params: new MyContentParams1({/* params */})
          })
        })
      ],
      [
        new WMLAccordionZeroItemParams({
          title: 'Section 2',
          accordionBody: new WMLCustomComponent({
            cpnt: MyContentComponent2,
            params: new MyContentParams2({/* params */})
          })
        })
      ]
    ]
  });
}
```

### 2. Accordion with Dynamic Content Loading

This example shows how to dynamically load content into the accordion sections:

```typescript
// Assume MyDynamicContentComponent can change its content based on provided params
accordionParams.items[0][0].updateAccordionBodySubj.next(new WMLCustomComponent({
  cpnt: MyDynamicContentComponent,
  params: new MyDynamicContentParams({contentId: 'dynamic-content-1'})
}));
```

### 3. Controlling Accordion State

Demonstrating how developers can programmatically open or close accordion sections:

```typescript
// Open the first section
accordionParams.items[0][0].toggleAccordionSubj.next({ val: false, emit: true });

// Close the first section
accordionParams.items[0][0].toggleAccordionSubj.next({ val: true, emit: true });
```

### 4. Custom Animation Timing

This example modifies the default animation timing for the opening and closing of accordion items:

```typescript
accordionParams.items.forEach(group => {
  group.forEach(item => {
    item.startHeight = '0rem';
    item.endHeight0 = '10rem'; // Adjust as needed
    item.animationDuration0 = '0.5s'; // Speed up the animation
    item.animationDuration1 = '0.25s'; // Speed up the closing animation
  });
});
```

## Customization
There are the [color pallete](./_color_pallete.scss)
and [media queries](./_media_queries.scss) that you can use to customize the accordion. in your css simply replace the values with the ones you want to use and the component will take on the look. the variables are very specific and even named after the component to avoid any overlapping issues

### CSS Customization
# CSS Customization
* to globally customize in your  css file

```py
.WMLAccordionZeroView {
  &MainPod {
    &Pod {
      &ItemMainPod {
        &ItemPod0 {
          &Icon0 {}
          &Title0 {}
        }
        &ItemPod1 {
          &ContentPod {}
        }
      }
    }
  }
}

```



#  Docs


## WMLAccordionZeroParams

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | An optional identifier for the accordion component. |
| `items` | `Array<WMLAccordionZeroItemParams[]>` | An array of accordion item parameters to define each section. |

## WMLAccordionZeroItemParams

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | An optional identifier for the accordion item. |
| `title` | `string` | The title text for the accordion item. |
| `isClosed` | `boolean` | Indicates whether the accordion item is initially closed. |
| `toggleAccordionEvent` | `Subject<boolean>` | An event that toggles the accordion item's open/close state. |
| `toggleAccordionSubj` | `Subject<{ val: boolean; emit: boolean }>` | Subject to programmatically toggle the accordion's state. |
| `accordionBody` | `WMLCustomComponent` | The component to render as the accordion item's body. |
| `updateAccordionBodySubj` | `Subject<WMLCustomComponent>` | Subject to dynamically update the content of the accordion body. |
| `startHeight` | `string` | CSS value for the starting height during the opening animation. |
| `endHeight0` | `string` | CSS value for the end height during the opening animation. |
| `endHeight1` | `string` | CSS value for the end height during the closing animation. |
| `animationDuration0` | `string` | Duration of the opening animation. |
| `animationDuration1` | `string` | Duration of the closing animation. |

## WMLAccordionZeroSampleParams

| Property | Type | Description | Default Value |
|----------|------|-------------|---------------|
| `id` | `string` | Identifier for the sample component. | `""` |

## WMLAccordionZeroTitleParams

| Property | Type | Description | Default Value |
|----------|------|-------------|---------------|
| `title` | `string` | Text for the accordion title. | `"My Accordion Title"` |


These tables provide an overview of the key elements within the WML Accordion Zero library that developers can interact with to customize and control accordion behavior in their Angular applications.


These examples illustrate the flexibility and capability of the WML Accordion Zero library in catering to a variety of accordion-related needs in Angular applications, from basic setups to more advanced and dynamic scenarios.


# Changelog

v0.0.1
* can specify multiple accordion with in the component and specifiy your child compoennt as well
* if you want the accordion body to be the same width as its header fintd the target accordion and specify its width
```css
  .WMLAccordionZeroPod0 wml-accordion-zero-item:nth-child(1){
    flex: 0 0 20%!;(string=
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package)
    width: 20%!;(MISSING)
  }

```
v 0.0.2
* coorect dependencies

v 0.0.3
* end devs can now decide whether an accordion is open on init or not


v 16.2.5-0
* end devs can control animations values for the the accordion
here are the default values that get passed to the scss
```ts
  startHeight = "calc(0/10.6 * 1rem)"
  endHeight0 = "calc(20000/10.6 * 1rem)"
  endHeight1 = "calc(2000/10.6 * 1rem)"
  animationDuration0 = "10s"
  animationDuration1 = "1.25s"
```
,
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package,
## v16.2.90
 * updated package to reflect the version  16.2.90 of @angular/core package,
## v16.2.91
 * updated package to reflect the version  16.2.91 of @angular/core package,
## v16.2.93
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.100
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.110
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.120
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.10
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.11
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.20
 * updated package to reflect the version  ^17.0.2 of @angular/core package,
## v17.0.40
 * updated package to reflect the version  ^17.0.4 of @angular/core package,
## v17.0.50
 * updated package to reflect the version  ^17.0.5 of @angular/core package,
## v17.0.60
 * updated package to reflect the version  ^17.0.6 of @angular/core package,
## v17.0.70
 * updated package to reflect the version  ^17.0.7 of @angular/core package,
## v17.0.7100
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.7200
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.7300
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.80
 * updated package to reflect the version  ^17.0.8 of @angular/core package,
## v17.0.8100
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.8102
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.8103
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.9000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.9001
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.0000
 * updated package to reflect the version  ^17.1.0 of @angular/core package,
## v17.1.2
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.1000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.2000 [2/5/24]
 * updated package to reflect the version  ^17.1.2 of @angular/core package,
## v17.1.2001 [2/8/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.3000 [2/8/24]
 * updated package to reflect the version  ^17.1.3 of @angular/core package,
## v17.2.1000 [2/17/24]
 * updated package to reflect the version  ^17.2.1 of @angular/core package

## v17.2.1001 [2/21/24]
 * [UPDATE]  added WMLAccordionZeroItemParams.updateAccordionBodySubj to toggle the accordion body as needed,
 * [UPDATE]  you can customize the title via WMLAccordionZeroItemParams.accordionTitle
,
## v17.2.2000 [2/23/24]
 * updated package to reflect the version  ^17.2.2 of @angular/core package,
## v17.2.2001 [2/23/24]
 * updated package to reflect the version  ^17.2.2 of @angular/core package,
## v17.2.3000 [2/28/24]
 * updated package to reflect the version  ^17.2.3 of @angular/core package,
## v17.2.3001 [3/2/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.3002 [3/5/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4000 [3/8/24]
 * updated package to reflect the version  ^17.2.4 of @angular/core package,
## v17.2.4001 [3/12/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4002 [3/12/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4003 [3/13/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4004 [3/13/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.0 [3/17/24]
 * updated package to reflect the version  ^17.3.0 of @angular/core package
,
## v17.3.1000 [3/22/24]
 * updated package to reflect the version  ^17.3.1 of @angular/core package,
## v17.3.2000 [3/28/24]
 * updated package to reflect the version  ^17.3.2 of @angular/core package,
## v17.3.3000 [4/4/24]
 * updated package to reflect the version  ^17.3.3 of @angular/core package,
## v17.3.4000 [4/11/24]
 * updated package to reflect the version  ^17.3.4 of @angular/core package,
## v17.3.4001 [4/16/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.5000 [4/20/24]
 * updated package to reflect the version  ^17.3.5 of @angular/core package,
## v17.3.5110 [5/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.6000 [5/1/24]
 * updated package to reflect the version  ^17.3.6 of @angular/core package,
## v17.3.7000 [5/9/24]
 * updated package to reflect the version  ^17.3.7 of @angular/core package,
## v17.3.8000 [5/9/24]
 * updated package to reflect the version  ^17.3.8 of @angular/core package,
## v17.3.9000 [5/16/24]
 * updated package to reflect the version  ^17.3.9 of @angular/core package,
## v18.0.0 [5/22/24]
 * updated package to reflect the version  ^18.0.0 of @angular/core package,
## v18.0.1 [5/22/24]
 * updated package to reflect the version  ^18.0.0 of @angular/core package,
## v18.0.4 [5/25/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
,
## v18.0.1000 [5/29/24]
 * updated package to reflect the version  ^18.0.1 of @angular/core package,
## v18.0.2000 [6/6/24]
 * updated package to reflect the version  ^18.0.2 of @angular/core package,
## v18.0.3000 [6/13/24]
 * updated package to reflect the version  ^18.0.3 of @angular/core package,
## v18.0.3010 [6/18/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   