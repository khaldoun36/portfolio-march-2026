<template>
  <article v-if="post" class="max-w-prose mx-auto py-fluid-section">
    <header class="mb-fluid-element">
      <h1 class="text-3xl md:text-4xl font-bold text-green mb-2">
        {{ post.title }}
      </h1>
      <time :datetime="post.date" class="text-sm text-gray-500">
        {{ new Date(post.date).toLocaleDateString() }}
      </time>
    </header>

    <ContentRenderer :value="post" class="prose dark:prose-invert" />
  </article>

  <div v-else>Blog post not found.</div>
</template>

<script setup lang="ts">
  const route = useRoute();

  const { data: post } = await useAsyncData(route.path, () => {
    return queryCollection("journal").path(route.path).first();
  });

  // Added the full SEO meta we discussed earlier
  useSeoMeta({
    title: post.value?.title,
    description: post.value?.description,
    author: post.value?.author,
    ogImage: post.value?.image,
    articleTag: post.value?.tags,
  });
</script>
