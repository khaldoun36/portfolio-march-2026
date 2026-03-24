<template>
  <div class="content-grid">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
  body,
  #__nuxt {
    background-color: var(--color-off-white);
  }
  .content-grid {
    /* Grid Variables */
    --margin: 1rem;
    --breakout: 0px;
    --content: 1fr;

    display: grid;
    grid-template-columns:
      [full-width-start] var(--margin)
      [breakout-start] var(--breakout)
      [content-start] var(--content)
      [content-end] var(--breakout)
      [breakout-end] var(--margin)
      [full-width-end];
    grid-template-rows: auto;
    min-height: 100dvh;
  }

  /* Default to center content */
  .content-grid > * {
    grid-column: content;
  }

  /* Modifier classes */
  .content-grid > .breakout {
    grid-column: breakout;
  }
  .content-grid > .full-width {
    grid-column: full-width;
  }

  @media (min-width: 640px) {
    .content-grid {
      --margin: 2rem;
      --breakout: 1rem;
    }
  }

  @media (min-width: 1024px) {
    .content-grid {
      --breakout: 2rem;
    }
  }

  @media (min-width: 1280px) {
    .content-grid {
      --margin: 1fr;
      --content: minmax(0, 68rem); /* 1088px */
    }
  }
</style>
