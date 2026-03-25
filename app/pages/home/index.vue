<template>
  <HeroSection v-bind="$attrs" class="mb-fluid-inner" />
  <ImageCarousels />
</template>

<script setup lang="ts">
  import HeroSection from "./components/HeroSection.vue";
  import ImageCarousels from "./components/ImageCarousel.vue";

  defineOptions({ inheritAttrs: false });
</script>
