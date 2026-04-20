<template>
  <section class="full-width gallery-section -my-1 mb-4">
    <div class="embla" aria-label="Gallery carousel">
      <div ref="emblaRef" class="embla__viewport">
        <div class="embla__container py-1">
          <NuxtImg
            v-for="(image, index) in images"
            :key="index"
            class="embla__slide item ds-border"
            :src="image.src"
            :alt="image.alt"
            :width="image.width ? image.width : '4096'"
            :height="image.height ? image.height : '4096'"
          />
        </div>
      </div>
    </div>
  </section>

  <div class="gallery-nav">
    <IconButton
      label="Previous gallery item"
      icon="fa7-solid:angle-left"
      @click="scrollPrev"
      :disabled="!canScrollPrev"
    />
    <IconButton
      label="Next gallery item"
      icon="fa7-solid:angle-right"
      @click="scrollNext"
      :disabled="!canScrollNext"
    />
  </div>
</template>

<script setup lang="ts">
  import useEmblaCarousel from "embla-carousel-vue";
  import IconButton from "~/components/IconButton.vue";

  interface GalleryImage {
    src: string;
    width: number | string;
    height: number | string;
    alt: string;
  }

  defineProps<{
    images: GalleryImage[];
  }>();

  const canScrollPrev = ref(false);
  const canScrollNext = ref(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const updateNavigation = () => {
    if (!emblaApi.value) return;

    canScrollPrev.value = emblaApi.value.canScrollPrev();
    canScrollNext.value = emblaApi.value.canScrollNext();
  };

  const scrollPrev = () => {
    emblaApi.value?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi.value?.scrollNext();
  };

  onMounted(() => {
    if (!emblaApi.value) return;

    updateNavigation();
    emblaApi.value.on("select", updateNavigation);
    emblaApi.value.on("reInit", updateNavigation);
  });

  onBeforeUnmount(() => {
    if (!emblaApi.value) return;

    emblaApi.value.off("select", updateNavigation);
    emblaApi.value.off("reInit", updateNavigation);
  });
</script>

<style scoped>
  .gallery-section {
    width: 100%;
  }

  .embla {
    width: 100%;
    min-width: 0;
  }

  .embla__viewport {
    overflow: hidden;
    padding-inline: var(--content-start-inset);
  }

  .embla__container {
    display: flex;
    gap: 1rem;
  }

  .embla__slide {
    flex: 0 0 auto;
  }

  .item {
    width: clamp(20rem, 16.18rem + 9.09vw, 24rem);
    aspect-ratio: 1;
    border-radius: 0.5rem;
    object-fit: cover; /* Ensures image maintains aspect ratio without stretching */
  }

  .gallery-nav {
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    .gallery-nav {
      display: flex;
      justify-content: flex-start;
      gap: 0.75rem;
    }
  }
</style>
