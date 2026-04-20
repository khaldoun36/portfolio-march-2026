<template>
  <section class="mt-fluid-section grid gap-fluid-inner md:grid-cols-[2fr_1fr]">
    <div>
      <h2
        class="text-green text-xl md:text-2xl mb-fluid-element font-medium uppercase"
      >
        Recent Entries
      </h2>

      <ul v-if="posts" class="flex flex-col gap-fluid-element">
        <template v-for="(post, index) in posts" :key="post.path">
          <li>
            <PostEntry
              :title="post.title"
              :description="post.description"
              :link="post.path"
              :date="post.date"
              :category="post.category"
            />
          </li>
          <li v-if="index < posts.length - 1" aria-hidden="true">
            <Divider />
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
  import PostEntry from "./PostEntry.vue";
  import Divider from "~/components/Divider.vue";

  const { data: posts } = await useAsyncData("recent-posts", () => {
    return queryCollection("journal").order("date", "DESC").limit(10).all();
  });
</script>
