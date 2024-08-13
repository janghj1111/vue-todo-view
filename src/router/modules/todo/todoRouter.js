const todoRouter = [
  {
    path: "/todo",
    name: "todoPage",
    component: () => import("@/views/todo/TodoPage.vue"),
  },
];

export default todoRouter;
