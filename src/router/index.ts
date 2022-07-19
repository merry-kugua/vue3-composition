import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import BaseProvide from "@/components/BaseProvide.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "BaseProvide",
    component: BaseProvide,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
