// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, must_be_immutable, unused_local_variable, unused_catch_stack

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'template_page_riverpod_provider.dart';
import 'package:eneobia/util/riverpod_providers/wml_colors/wml_colors.dart';
import 'package:eneobia/util/riverpod_providers/wml_fonts/wml_fonts.dart';
import 'package:eneobia/util/riverpod_providers/wml_nav/wml_nav.dart';
import 'package:eneobia/util/riverpod_providers/wml_spacing/wml_spacing.dart';

class WMLTemplatePage extends ConsumerStatefulWidget {
  WMLTemplatePage({super.key});

  @override
  ConsumerState<WMLTemplatePage> createState() => _WMLTemplatePageState();
}

class _WMLTemplatePageState extends ConsumerState<WMLTemplatePage> {
  @override
  Widget build(BuildContext context) {
    final rp = ref.watch(WMLTemplatePageRiverpodProvider);
    final wmlColors = ref.watch(WMLColorsRiverpodProvider);
    final wmlSpacing = ref.watch(WMLSpacingRiverpodProvider);
    final wmlFonts = ref.watch(WMLFontsRiverpodProvider);
    final wmlNav = ref.watch(WMLNavRiverpodProvider);
    final contextHeight = MediaQuery.of(context).size.height;
    final contextWidth = MediaQuery.of(context).size.width;

    return SizedBox(
        width: MediaQuery.of(context).size.width, child: Text("Hello Word"));
  }
}
