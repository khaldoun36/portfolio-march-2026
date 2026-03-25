<template>
  <section class="mb-fluid-element full-width gallery">
    <div class="wrapper">
      <div v-for="n in 5" :key="n" class="bg-red-400 rounded-lg item"></div>
    </div>
  </section>
  <div class="flex items-center gap-4">
    <IconButton icon="fa7-solid:chevron-left" label="arrow right left" />
    <IconButton icon="fa7-solid:chevron-right" label="arrow right button" />
  </div>
</template>

<script setup lang="ts">
  import IconButton from "~/components/IconButton.vue";
</script>

<style scoped>
  .gallery {
    display: grid;
    /* Subgrid inherits the exact tracks AND line names from .content-grid */
    grid-template-columns: inherit;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    scrollbar-width: none;

    scroll-padding-inline-start: calc(
      var(--breakout) + var(--margin-calc, var(--margin))
    );
  }

  .gallery::-webkit-scrollbar {
    display: none;
  }

  .wrapper {
    grid-column: content;
    display: flex;
    gap: 1rem; /* Adjust to your fluid element spacing if desired */
  }

  .wrapper::after {
    content: "";
    flex: 0 0 calc(var(--breakout) + var(--margin-calc, var(--margin)));
  }

  .item {
    flex-shrink: 0;
    scroll-snap-align: start;
    width: clamp(18rem, 16.18rem + 9.09vw, 22rem);
    height: auto;
    aspect-ratio: 1;
  }
</style>
