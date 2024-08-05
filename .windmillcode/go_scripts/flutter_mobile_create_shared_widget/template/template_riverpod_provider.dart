// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, must_be_immutable, unused_local_variable, unused_catch_stack

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class WMLTemplateWidgetRiverpodProviderValue {
  WMLTemplateWidgetRiverpodProviderValue copyWith() {
    return WMLTemplateWidgetRiverpodProviderValue();
  }
}

var WMLTemplateWidgetRiverpodProviderInstance = WMLTemplateWidgetRiverpodProviderValue();

class WMLTemplateWidgetRiverpodNotifier
    extends Notifier<WMLTemplateWidgetRiverpodProviderValue> {
  @override
  WMLTemplateWidgetRiverpodProviderValue build() {
    return WMLTemplateWidgetRiverpodProviderInstance;
  }
}

final WMLTemplateWidgetRiverpodProvider = NotifierProvider<
    WMLTemplateWidgetRiverpodNotifier, WMLTemplateWidgetRiverpodProviderValue>(() {
  return WMLTemplateWidgetRiverpodNotifier();
});
