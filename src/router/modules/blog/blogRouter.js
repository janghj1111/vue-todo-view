const blogRouter = [
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/blog/BlogHome.vue"),
  },
  //   {
  //     path: "/board/detail",
  //     name: "BoardDetail",
  //     component: () => import("@/views/board/BoardDetail.vue"),
  //   },
  //   {
  //     path: "/board/write",
  //     name: "BoardWrite",
  //     component: () => import("@/views/board/BoardWrite.vue"),
  //   },
];

export default blogRouter;
