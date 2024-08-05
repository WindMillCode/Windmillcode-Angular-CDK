import { FormGroup } from "@angular/forms";
import { selectRandomOptionFromArray } from "@windmillcode/angular-wml-components-base";
import { WMLFieldZeroProps } from "@windmillcode/angular-wml-field";

export let checkIfFieldExists= (index0:number,fieldParentForm:FormGroup):string=>{
  let controlName = index0.toString();
  if(fieldParentForm.controls[controlName]){
    let newIndex= index0+1
    return checkIfFieldExists(newIndex,fieldParentForm)
  }
  return controlName
}

export let  viewFormValues =(fields:WMLFieldZeroProps[])=> {
  let formValues = fields.map((field) => {
    return field.field.parentForm.value;
  });
  console.log(formValues);
}

export let getRandomImage= ()=>{
  let logoImg = `data:image/png;base64,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`

   return selectRandomOptionFromArray([
    "https://loremflickr.com/640/480/nature",
    "https://loremflickr.com/640/480/food",
    "https://loremflickr.com/640/480/business",
    "https://loremflickr.com/640/480/cats",
    logoImg
   ])
}

export let getRandomProductTitle =()=>{
  return selectRandomOptionFromArray([
    "Chips",
    "Keyboard",
    "Towels",
    "Mouse",
    "Hat",
    "Computer",
    "Cheese",
    "Pants",
    "Salad",
    "Chicken",
    "Fish",
    "Bike",
    "Shirt",
    "Shoes",
    "Table",
    "Ball",
    "Sausages",
    "Pizza",
    "Tuna",
    "Soap"
  ])
}

export let getRandomProductSubTitle = ()=>{
  return selectRandomOptionFromArray([
    "Music",
    "Baby",
    "Shoes",
    "Tools",
    "Clothing",
    "Grocery",
    "Sports",
    "Outdoors",
    "Games",
    "Toys",
    "Kids",
    "Industrial",
    "Jewelery",
    "Garden",
    "Movies",
    "Electronics",
    "Beauty",
    "Books",
    "Home",
    "Computers"
])
}

export let getRandomProductPrice = ()=>{
  return selectRandomOptionFromArray([
    "1.10",
    "99.60",
    "78.30",
    "59.30",
    "49.30",
    "36.80",
    "57.40",
    "60.30",
    "91.00",
    "93.10",
    "63.60",
    "32.20",
    "34.50",
    "72.00",
    "60.20",
    "66.00",
    "84.60",
    "11.10",
    "52.30",
    "93.30",
    "21.70",
    "4.10",
    "88.10",
    "12.90",
    "53.10",
    "18.10",
    "52.40",
    "27.20",
    "37.90",
    "68.60",
    "32.30",
    "63.90",
    "57.30",
    "50.60",
    "0.70",
    "66.80",
    "51.80",
    "73.40",
    "91.30",
    "48.70",
    "43.50",
    "95.20",
    "38.40",
    "78.50",
    "58.50",
    "15.70",
    "96.60",
    "56.80"
])
}
