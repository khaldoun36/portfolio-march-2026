<template>
  <section
    class="pt-fluid-section grid md:grid-cols-[1.5fr_1fr] gap-fluid-inner"
  >
    <div>
      <h2 class="text-green text-lg mb-fluid-inner">Recent Enteries</h2>
      <article class="relative isolate rounded-lg">
        <h3 class="text-xl md:text-2xl font-medium mb-4">
          <NuxtLink
            to="https://tailwindcss.com/plus/templates/spotlight/preview"
          >
            Why Minimalism is the New Standard
            <span class="absolute inset-0" />
          </NuxtLink>
        </h3>
        <p class="text-base md:text-lg mb-fluid-element text-pretty">
          Explore the psychology behind the "less is more" movement. From
          digital interfaces to physical workspaces, learn why stripping away
          the unnecessary leads to higher productivity and a much clearer state
          of mind.
        </p>
        <div class="flex items-center gap-5">
          <time datetime="" class="text-base text-green">April 20, 2026</time>
          <p>essay</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
  article {
    background-color: transparent;
    transition:
      background 150ms ease-in-out,
      box-shadow 150ms ease-in-out,
      scale 150ms ease-in-out;

    &:active {
      scale: 97%;
    }

    &:hover {
      background-color: var(--color-tan);
      box-shadow: 0 0 0 1.5rem var(--color-tan);
    }
  }
</style>
