// This file is required by karma.conf.js and loads recursively all the .spec and framework files



const { defineProperty } = Object;
Object.defineProperty = function(object, name, meta) {
  if (meta.get && !meta.configurable) {
    // it might be an ES6 exports object
    return defineProperty(object, name, {
      ...meta,
      configurable: true,
    });
  }

  return defineProperty(object, name, meta);
};

