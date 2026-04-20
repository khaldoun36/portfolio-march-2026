<template>
  <HeroSection v-bind="$attrs" class="mb-fluid-inner" />
  <ImageCarousel :images="images" />
  <FeaturedContent />
</template>

<script setup lang="ts">
  import FeaturedContent from "./components/FeaturedContent.vue";
  import HeroSection from "./components/HeroSection.vue";
  import ImageCarousel from "./components/ImageCarousel.vue";

  defineOptions({ inheritAttrs: false });

  const images = [
    {
      src: "https://images.unsplash.com/photo-1552323543-4cffa4ffffe3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 4096,
      height: 4096,
      alt: "hello world",
    },
    {
      src: "https://images.unsplash.com/photo-1552323543-4cffa4ffffe3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 4096,
      height: 4096,
      alt: "hello world",
    },
    {
      src: "https://images.unsplash.com/photo-1552323543-4cffa4ffffe3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 4096,
      height: 4096,
      alt: "hello world",
    },
    {
      src: "https://images.unsplash.com/photo-1552323543-4cffa4ffffe3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 4096,
      height: 4096,
      alt: "hello world",
    },
    {
      src: "https://images.unsplash.com/photo-1552323543-4cffa4ffffe3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 4096,
      height: 4096,
      alt: "hello world",
    },
    {
      src: "https://images.unsplash.com/photo-1552323543-4cffa4ffffe3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      width: 4096,
      height: 4096,
      alt: "hello world",
    },
  ];
</script>
