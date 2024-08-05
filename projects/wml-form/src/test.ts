// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

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
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);


