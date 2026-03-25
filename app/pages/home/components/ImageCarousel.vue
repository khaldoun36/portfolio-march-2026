<template>
  <section
    class="full-width gallery"
    ref="galleryRef"
    @scroll.passive="syncSliderWithScroll"
  >
    <div class="wrapper">
      <div
        v-for="n in 5"
        :key="n"
        class="bg-red-400 rounded-lg item"
        role="img"
        :aria-label="`Gallery image ${n} of 5`"
      ></div>
    </div>
  </section>

  <div class="gallery-scroll-container">
    <input
      type="range"
      min="0"
      :max="maxScroll"
      v-model.number="currentScroll"
      @input="syncScrollWithSlider"
      class="w-full max-w-sm cursor-pointer custom-slider"
      aria-label="Gallery scroll progress"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from "vue";

  const galleryRef = ref<HTMLElement | null>(null);
  const currentScroll = ref(0);
  const maxScroll = ref(100); // Temporary initial value
  let isDraggingSlider = false;

  // 1. Calculate total available scroll distance
  const calculateMaxScroll = () => {
    if (!galleryRef.value) return;
    maxScroll.value = Math.max(
      0,
      galleryRef.value.scrollWidth - galleryRef.value.clientWidth,
    );
  };

  // 2. Update slider when user scrolls natively (swipe, trackpad)
  const syncSliderWithScroll = () => {
    // Prevent the scroll event from fighting the slider if the user is currently dragging it
    if (!galleryRef.value || isDraggingSlider) return;
    currentScroll.value = galleryRef.value.scrollLeft;
  };

  // 3. Update scroll position when user drags the slider
  const syncScrollWithSlider = () => {
    if (!galleryRef.value) return;
    isDraggingSlider = true;

    // Use 'auto' behavior to prevent lag while dragging
    galleryRef.value.scrollTo({
      left: currentScroll.value,
      behavior: "auto",
    });

    // Release the dragging lock slightly after the drag ends
    setTimeout(() => {
      isDraggingSlider = false;
    }, 50);
  };

  // Recalculate max scroll on mount and window resize
  onMounted(() => {
    // Slight delay to ensure CSS Grid has painted the items fully
    setTimeout(() => {
      calculateMaxScroll();
      syncSliderWithScroll();
    }, 50);

    window.addEventListener("resize", calculateMaxScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", calculateMaxScroll);
  });
</script>

<style scoped>
  .gallery {
    display: grid;
    grid-template-columns: inherit;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    scrollbar-width: none;
    scroll-padding-inline-start: calc(
      var(--breakout) + var(--margin, var(--margin-calc))
    );
  }

  @media (hover: hover) and (pointer: fine) {
    .gallery {
      scroll-snap-type: none;
      margin-bottom: var(--spacing-fluid-element);
    }
  }

  .gallery::-webkit-scrollbar {
    display: none;
  }

  .wrapper {
    grid-column: content;
    display: flex;
    gap: 1rem;
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

  /* Gallery scroll progress styles */
  .gallery-scroll-container {
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    .gallery-scroll-container {
      display: flex;
      justify-content: start;
    }
  }

  .custom-slider {
    /* Slider Variables */
    --track-h: 12px;
    --track-bg: var(--color-tan);
    --track-radius: 8px;

    --thumb-size: 24px;
    --thumb-bg: var(--color-dark-green);
    --thumb-radius: 6px;
    --thumb-shadow: 0 0 0 2px var(--color-black);

    /* Automatically calculate center offset for WebKit */
    --thumb-offset: calc((var(--track-h) - var(--thumb-size)) / 2);

    /* 1. Remove default browser appearance */
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
  }

  /* 2. Style the Track */
  .custom-slider::-webkit-slider-runnable-track {
    height: var(--track-h);
    background: var(--track-bg);
    border-radius: var(--track-radius);
  }
  .custom-slider::-moz-range-track {
    height: var(--track-h);
    background: var(--track-bg);
    border-radius: var(--track-radius);
  }

  /* 3. Style the Handle (Thumb) */
  .custom-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    background: var(--thumb-bg);
    border-radius: var(--thumb-radius);
    margin-top: var(--thumb-offset);
    box-shadow: var(--thumb-shadow);
  }
  .custom-slider::-moz-range-thumb {
    height: var(--thumb-size);
    width: var(--thumb-size);
    background: var(--thumb-bg);
    border-radius: var(--thumb-radius);
    border: none;
    box-shadow: var(--thumb-shadow);
  }

  /* 4. Active State (While Dragging) */
  .custom-slider:active {
    --thumb-shadow: 0 0 0 1px var(--color-black); /* Thicker outline for tactile feedback */
  }

  /* 5. Focus State (For Keyboard Accessibility) */
  .custom-slider:focus-visible {
    outline: 2px solid var(--color-dark-green);
    outline-offset: 4px;
  }
</style>
