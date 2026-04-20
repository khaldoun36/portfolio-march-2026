<template>
  <article class="relative isolate rounded-lg">
    <h3 class="text-xl md:text-2xl font-medium mb-4">
      <NuxtLink :to="link">
        {{ title }}
        <span class="absolute inset-0" />
      </NuxtLink>
    </h3>

    <p class="text-base md:text-lg mb-fluid-element text-pretty">
      {{ description }}
    </p>

    <div
      class="flex items-center gap-x-3 *:md:text-base *:text-green *:text-sm"
    >
      <time :datetime="datetimeAttr">
        {{ displayDate }}
      </time>
      <span>/</span>
      <p class="capitalize">{{ category }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  const { title, description, link, date, category } = defineProps<{
    title: string;
    description: string;
    link: string;
    date: Date | string;
    category: string;
  }>();

  const dateObj = computed(() => new Date(date));

  const displayDate = computed(() =>
    dateObj.value.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  );

  const datetimeAttr = computed(() => {
    const d = dateObj.value;
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  });
</script>

<style scoped>
  article {
    background-color: transparent;
    transition:
      background 150ms var(--ease),
      box-shadow 150ms var(--ease),
      scale 150ms var(--ease);

    &:active {
      scale: 97%;
    }

    &:hover {
      background-color: var(--color-tan);
      box-shadow: 0 0 0 1.5rem var(--color-tan);
    }
  }
</style>
