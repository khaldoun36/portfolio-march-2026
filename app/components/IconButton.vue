<template>
  <button
    class="place-items-center grid bg-tan hover:brightness-90 focus-visible:brightness-90 active:brightness-85 ds-border rounded-lg focus:outline-none size-10 text-dark-green active:scale-97 transition-[filter,transform] duration-150 cursor-pointer"
    :aria-label="label"
  >
    <Icon :name="icon" :size="iconSize" />
  </button>
</template>

<script setup lang="ts">
  interface Props {
    label: string;
    icon: string;
    iconSize?: string;
  }

  const { label, icon, iconSize = "24px" } = defineProps<Props>();
</script>
