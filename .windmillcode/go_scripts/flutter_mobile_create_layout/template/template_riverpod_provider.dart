// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, must_be_immutable, unused_local_variable, unused_catch_stack

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class WMLTemplateLayoutRiverpodProviderValue {
  WMLTemplateLayoutRiverpodProviderValue copyWith() {
    return WMLTemplateLayoutRiverpodProviderValue();
  }
}

var WMLTemplateLayoutRiverpodProviderInstance = WMLTemplateLayoutRiverpodProviderValue();

class WMLTemplateLayoutRiverpodNotifier
    extends Notifier<WMLTemplateLayoutRiverpodProviderValue> {
  @override
  WMLTemplateLayoutRiverpodProviderValue build() {
    return WMLTemplateLayoutRiverpodProviderInstance;
  }
}

final WMLTemplateLayoutRiverpodProvider = NotifierProvider<
    WMLTemplateLayoutRiverpodNotifier, WMLTemplateLayoutRiverpodProviderValue>(() {
  return WMLTemplateLayoutRiverpodNotifier();
});
