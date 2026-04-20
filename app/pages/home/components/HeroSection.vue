<template>
  <main class="max-w-[85ch]">
    <NuxtImg
      src="/assets/profile_picture.png"
      class="mb-fluid-element ds-border rounded-full size-16"
      width="736"
      height="736"
      alt="A portrait of me with a short beard wearing a traditional white thobe."
    />

    <h1 class="text-4xl font-semibold mb-3 md:text-6xl text-pretty">
      Building apps, launching ideas, and chasing PRs.
    </h1>
    <p class="text-lg text-pretty mb-fluid-element md:text-xl">
      I’m Khaldoon — a software developer, entrepreneur, and amateur athlete.
      Currently building Bites, a platform that turns weight loss into a shared
      journey by combining tracking with social accountability.
    </p>

    <div class="flex items-center gap-4">
      <SocialIconButton
        v-for="link in socialLinks"
        :key="link.to"
        :label="link.label"
        :to="link.to"
        :icon="link.icon"
      />
    </div>
  </main>
</template>

<script setup>
  const socialLinks = [
    {
      to: "https://www.linkedin.com/in/khaldoon-alnuaimi-8618b7350/",
      icon: "fa6-brands:linkedin-in",
      label: "LinkedIn",
    },
    {
      to: "https://bsky.app/profile/khaldoon.bsky.social",
      icon: "fa6-brands:bluesky",
      label: "Bluesky",
    },
    {
      to: "https://bsky.app/profile/khaldoon.bsksssy.social",
      icon: "fa6-brands:threads",
      label: "Threads",
    },
  ];
</script>
