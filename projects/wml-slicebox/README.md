# Overview

The `wml-slicebox` library is an Angular-based library designed to enhance the visual interactivity of web applications by introducing a 3D slicebox carousel component. This library provides a sophisticated and engaging way to display images or content in a carousel format, with a 3D rotation effect that adds depth and dynamism to the user experience. Aimed at integrating seamlessly with Angular applications, `wml-slicebox` offers a set of configurable options to tailor the carousel's behavior and appearance, making it a versatile tool for developers looking to enhance their UI with 3D interactive elements.

At the heart of the `wml-slicebox` library is the `WmlSliceboxComponent`, which serves as the central component orchestrating the 3D slicebox carousel's functionality. This component manages the carousel's state, handles user interactions, and renders the 3D slices that comprise the carousel's visual structure. Developers can customize the carousel through a variety of parameters, such as orientation, rotation speed, and disperse factor, allowing for a high degree of control over the carousel's behavior and appearance. Additionally, the library provides mechanisms for dynamically loading content into the carousel and responding to user interactions, making it a flexible solution for presenting content in an engaging and interactive format. The component's design encourages modularity and reusability, adhering to Angular's component-based architecture, and offering developers a straightforward way to incorporate 3D carousel functionality into their applications.



# Usage
```shell
npm install -s @windmillcode/wml-slicebox
```

* import wml-slicebox into the needed module
```ts
// angular
import { NgModule } from '@angular/core';


import { WmlSliceboxModule } from '@windmillcode/wml-slicebox';


@NgModule({
  declarations: [
    ...
  ],
  imports: [
    WmlSliceboxModule
  ],
})
export class TargetModule { }

```

* the use it in your component thats it
```ts
import { WmlSliceboxImg, WmlSliceboxParams } from '@windmillcode/wml-slicebox';

  sliceBoxParams = new WmlSliceboxParams({
    images: WmlSliceboxImg[],
  });

```

```html
    <wml-slicebox [params]="sliceBoxParams" ></wml-slicebox>
```

# Full Sample

```ts
import { WmlSliceboxImg, WmlSliceboxParams } from '@windmillcode/wml-slicebox';
import { faker } from '@faker-js/faker';
  pickers=[]
  images: WmlSliceboxImg[] = Array(5)
  .fill(null)
  .map((nullVal, index0) => {

    let img = new WmlSliceboxImg({
      src:faker.image.abstract(),//REPLACE with your image here
      value: index0.toString(),
    });

    this.pickers.push({
      value:index0,
      class:"unpicked"
    })

    return img;
  });

  sliceBoxParams = new WmlSliceboxParams({
    images: this.images,
    orientation:"v",
    // nextRotationDegree:"360deg",
    disperseFactor:40,
    disperseSpeed:4000,
    speed:1500,
    sequentialFactor:150,
    autoplay:false,
  });

  moveToNextSlide =()=>{
    this.sliceBoxParams.moveToNextSlideSubj.next()
  }

  moveToPrevSlide =()=>{
    this.sliceBoxParams.moveToPrevSlideSubj.next()
  }

  jumpToSlide = (myPicker:HomeMainPicker)=>{
    this.pickers
    .forEach((picker)=>{
      picker.class ="unpicked"
    })
    myPicker.class = "picked"

    this.sliceBoxParams.jumpToSlideSubj.next(myPicker.value)
    this.cdref.detectChanges()
  }
```

<!-- uses font awesome icons -->
```html
<div >
  <section >
    <div class=icon (click)="moveToPrevSlide()">
      <i class="fa-solid fa-chevron-left"></i>
    </div>
    <wml-slicebox [params]="sliceBoxParams" class=useThisClassToResizeSlicebox></wml-slicebox>
    <div class=icon (click)="moveToNextSlide()">
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  </section>
  <section >
    <div (click)="jumpToSlide(picker)" [class]="picker.class" *ngFor="let picker of pickers">
      <label>{{picker.value}}</label>
    </div>
  </section>
</div>

```
# Configs


| Name                           | Type                     | Description                                                                                          | Default Value                                    |
| ------------------------------ | ------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| autoplay                       | boolean                  | Whether the carousel should continue or not                                                          | `true`                                           |
| colorHiddenSides               | hex value, rgba, hsla    | Color of the sides of the cuboid where the image is not shown                                        | '#222'                                           |
| cuboidsCount                   | number                   | The number of cuboids to be used in the slicebox                                                     | 9                                                |
| disperseFactor                 | number                   | How far away in pixels should the cuboids coordinate to move away from the center                    | 40                                               |
| disperseSpeed                  | number                   | Time in ms of how fast the cuboids coordinate to move away from the center                           | 4000                                             |
| easing                         | css animation easing types| The animation type                                                                                  | 'ease-out'                                       |
| images                         | WmlSliceboxImg[]         | An array of images to provide to the slicebox                                                        | []                                               |
| interval                       | number                   | Milliseconds before the carousel navigates if autoplay is true                                       | 3000                                             |
| jumpToSlideSubj                | subject                  | Not to be edited; used to indicate to the slicebox to jump to a specific slide when autoplay is false| -                                                |
| moveToNextSlideSubj            | subject                  | Not to be edited; used to indicate to the slicebox to move to the next slide when autoplay is false  | -                                                |
| moveToPrevSlideSubj            | subject                  | Not to be edited; used to indicate to the slicebox to move to the previous slide when autoplay is false | -                                              |
| nextRotationDegree             | css degree string        | When provided, overrides the default rotation to have the next slides rotate according to your desires| `'-90deg'` if `reverse` is `true`, else `'90deg'` |
| orientation                    | 'v' \| 'h'               | Whether to rotate vertically or horizontally                                                         | 'v'                                              |
| perspective                    | px value                 | Same as perspective definition in graphic design                                                     | 10000                                            |
| prevRotationDegree             | css degree string        | When provided, overrides the default rotation to have the next slides rotate according to your desires| Opposite of `nextRotationDegree`                 |
| resizeDelay                    | number                   | Amount of time to debounce before the carousel resizes itself        | 10                                             |
| reverse                        | boolean                  | Whether to reverse the default rotation                                                              | `false`                                          |
| sequentialFactor               | number                   | Time in ms before each cuboid consecutively rotates                                                  | 350                                              |
| sliceboxSizeUseProvidedValues  | boolean                  | Whether to resize to fill the parent element or use specified height and width of the slicebox       | `false`                                          |
| speed                          | number                   | How fast each cuboid is supposed to rotate                                                           | 15660                                            |




# Chnagelog
## 2.0.0
* MAJOR update change to angular-wml-slicebox

%!(EXTRA string=
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package),
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
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.0.8103
  *wml-slicebox fixed autoplay issue with autoplay would stop on resize and autoplay would not wait the given interval time
* now you can set resize value to any value you like
,
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
 * updated package to reflect the version  ^17.2.1 of @angular/core package,
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
