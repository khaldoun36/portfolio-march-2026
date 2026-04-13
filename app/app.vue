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
    --content-max: 68rem;
    --page-margin: 1rem;
    --breakout: 0rem;

    /* Real outer gutter used by both grid and carousel */
    --outer-gutter: var(--page-margin);
    --content-start-inset: calc(var(--outer-gutter) + var(--breakout));

    display: grid;
    grid-template-columns:
      [full-width-start] var(--outer-gutter)
      [breakout-start] var(--breakout)
      [content-start] minmax(0, 1fr)
      [content-end] var(--breakout)
      [breakout-end] var(--outer-gutter)
      [full-width-end];

    min-height: 100dvh;
    align-content: start;
  }

  .content-grid > * {
    grid-column: content;
    min-width: 0;
  }

  .content-grid > .breakout {
    grid-column: breakout;
  }

  .content-grid > .full-width {
    grid-column: full-width;
  }

  @media (min-width: 640px) {
    .content-grid {
      --page-margin: 2rem;
      --breakout: 1rem;
      --outer-gutter: var(--page-margin);
      --content-start-inset: calc(var(--outer-gutter) + var(--breakout));
    }
  }

  @media (min-width: 1024px) {
    .content-grid {
      --breakout: 2rem;
      --content-start-inset: calc(var(--outer-gutter) + var(--breakout));
    }
  }

  @media (min-width: 1280px) {
    .content-grid {
      --outer-gutter: max(2rem, calc((100vw - var(--content-max)) / 2));
      --content-start-inset: calc(var(--outer-gutter) + var(--breakout));

      grid-template-columns:
        [full-width-start] var(--outer-gutter)
        [breakout-start] var(--breakout)
        [content-start] minmax(0, var(--content-max))
        [content-end] var(--breakout)
        [breakout-end] var(--outer-gutter)
        [full-width-end];
    }
  }
</style>
