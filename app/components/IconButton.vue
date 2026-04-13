<template>
  <button
    class="place-items-center grid bg-tan hover:brightness-90 focus-visible:brightness-90 active:brightness-85 disabled:brightness-100 ds-border rounded-lg focus:outline-none size-10 text-dark-green active:scale-97 transition-[filter,transform] duration-150 disabled:cursor-not-allowed disabled:opacity-35 cursor-pointer"
    :aria-label="label"
    :disabled="disabled"
    type="button"
    @click="emit('click', $event)"
  >
    <Icon :name="icon" :size="iconSize ? iconSize : '20px'" />
  </button>
</template>

<script setup lang="ts">
  interface Props {
    label: string;
    icon: string;
    iconSize?: string;
    disabled?: boolean;
  }

  defineProps<Props>();

  const emit = defineEmits<{
    click: [event: MouseEvent];
  }>();
</script>
