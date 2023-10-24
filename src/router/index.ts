import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Apicaller from "@/components/Apicaller.vue";
import CategoriesPage from "@/views/CategoriesPage.vue";
import ListOfItems from "@/views/ListOfItems.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/apicaller",
    name: "categoryPage",
    component: Apicaller,
  },
  {
    path: "/pages/categories",
    name: "categoriesPage",
    component: CategoriesPage,
  },
  {
    path: "/pages/listOfItems",
    name: "listOfItems",
    component: ListOfItems,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
