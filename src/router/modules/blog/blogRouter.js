const blogRouter = [
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/blog/BlogHome.vue"),
  },
  {
    path: "/blog/Vuex",
    name: "BlogVuex",
    component: () => import("@/views/blog/BlogVuex.vue"),
  },
  //   {
  //     path: "/board/write",
  //     name: "BoardWrite",
  //     component: () => import("@/views/board/BoardWrite.vue"),
  //   },
];

export default blogRouter;
