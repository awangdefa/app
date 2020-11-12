export default [
  { path: "/a", component: () => import("@/components/Login/a.vue") },
  { path: "/b", component: () => import("@/components/Login/b.vue") },
];
