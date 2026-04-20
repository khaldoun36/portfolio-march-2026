<template>
  <HeroSection v-bind="$attrs" class="mb-fluid-inner" />
  <ImageCarousel :images="imageReel" />
  <FeaturedContent />
</template>

<script setup lang="ts">
  import FeaturedContent from "./components/FeaturedContent.vue";
  import HeroSection from "./components/HeroSection.vue";
  import ImageCarousel from "./components/ImageCarousel.vue";

  // data
  import imageReel from "@/data/image-reel.js";

  defineOptions({ inheritAttrs: false });
</script>
