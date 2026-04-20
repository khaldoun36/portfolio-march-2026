<template>
  <div :class="mergedClasses" aria-hidden="true" />
</template>

<script setup>
  import { computed } from "vue";
  import { twMerge } from "tailwind-merge";

  const props = defineProps({
    class: {
      type: String,
      default: "",
    },
  });

  const mergedClasses = computed(() =>
    twMerge("h-[0.25px] bg-green ds-border  w-full opacity-40", props.class),
  );
</script>
