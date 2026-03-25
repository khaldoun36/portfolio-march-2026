<template>
  <NuxtLink
    class="place-items-center grid bg-tan hover:brightness-90 focus-visible:brightness-90 active:brightness-85 ds-border rounded-lg focus:outline-none size-10 text-dark-green active:scale-97 transition-[filter,transform] duration-150"
    :to="to"
    :target="target"
    :aria-label="`Khaldoon on ${label}`"
  >
    <Icon :name="icon" :size="iconSize" />
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Props {
    label: string;
    to: string;
    icon: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    iconSize?: string;
  }

  const {
    label,
    to,
    icon,
    target = "_blank",
    iconSize = "20px",
  } = defineProps<Props>();
</script>
