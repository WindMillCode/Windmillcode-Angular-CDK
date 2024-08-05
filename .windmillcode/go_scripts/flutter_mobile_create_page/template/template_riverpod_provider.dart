// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, must_be_immutable, unused_local_variable, unused_catch_stack

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class WMLTemplatePageRiverpodProviderValue {
  WMLTemplatePageRiverpodProviderValue copyWith() {
    return WMLTemplatePageRiverpodProviderValue();
  }
}

var WMLTemplatePageRiverpodProviderInstance = WMLTemplatePageRiverpodProviderValue();

class WMLTemplatePageRiverpodNotifier
    extends Notifier<WMLTemplatePageRiverpodProviderValue> {
  @override
  WMLTemplatePageRiverpodProviderValue build() {
    return WMLTemplatePageRiverpodProviderInstance;
  }
}

final WMLTemplatePageRiverpodProvider = NotifierProvider<
    WMLTemplatePageRiverpodNotifier, WMLTemplatePageRiverpodProviderValue>(() {
  return WMLTemplatePageRiverpodNotifier();
});
