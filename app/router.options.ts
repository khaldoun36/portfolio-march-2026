import type { RouterConfig } from "@nuxt/schema";

export default {
  routes: (_routes) => [
    ..._routes.filter((r) => r.path !== "/home"), // remove the auto-generated /home route
    {
      name: "index",
      path: "/",
      component: () => import("~/pages/home/index.vue"),
    },
  ],
} satisfies RouterConfig;
