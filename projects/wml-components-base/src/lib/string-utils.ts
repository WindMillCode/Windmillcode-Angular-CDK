import { WMLConstructorDecorator } from "./models";


// TODO find a library that is framework and agnosticfriendly
@WMLConstructorDecorator
export class WMLStringObject {
  constructor(props = {}) {
    Object.assign(this, props);
  }

  orig = "myString";
  entitySuffix = "";

  get prefix() {
    return this.orig.split(this.entitySuffix)[0];
  }

  camelCase = (stripSuffix = true, suffix = "") => {
    const str = stripSuffix ? this.prefix : this.orig;
    return str
      .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
      .replace(/^(.)/, (_, c) => c.toLowerCase()) + suffix;
  };

  classify = (stripSuffix = true, suffix = "") => {
    const str = stripSuffix ? this.prefix : this.orig;
    return str
      .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
      .replace(/^(.)/, (_, c) => c.toUpperCase()) + suffix;
  };

  capitalize = (stripSuffix = true, suffix = "") => {
    const str = stripSuffix ? this.prefix : this.orig;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() + suffix;
  };

  dasherize = (stripSuffix = true, suffix = "") => {
    const str = stripSuffix ? this.prefix : this.orig;
    return str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/[_\s]+/g, "-") + suffix;
  };

  lowerCase = (stripSuffix = true, suffix = "") => {
    return (stripSuffix ? this.prefix : this.orig).toLowerCase() + suffix;
  };

  pascalCase = (stripSuffix = true, suffix = "") => {
    const str = stripSuffix ? this.prefix : this.orig;
    return str
      .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
      .replace(/^(.)/, (_, c) => c.toUpperCase()) + suffix;
  };

  upperCase = (stripSuffix = true, suffix = "") => {
    const str = stripSuffix ? this.prefix : this.orig;
    return str
      .toUpperCase() + suffix;
  };

  titleCase = (stripSuffix = true, suffix = "") => {
    const str = stripSuffix ? this.prefix : this.orig;
    return str
      .toLowerCase()
      .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
      .replace(/^(.)/, (_, c) => c.toUpperCase()) + suffix;
  };

  snakeCase = (stripSuffix = true, suffix = "") => {
    const str = stripSuffix ? this.prefix : this.orig;
    return str.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/[-\s]+/g, "_") + suffix;
  };
}




