import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Apicaller from "@/components/Apicaller.vue";
import CategoriesPage from "@/views/CategoriesPage.vue";
import ListOfItems from "@/views/ListOfItems.vue";
import Recipe from "@/views/Recipe.vue";
import MealOfTheDay from "@/views/MealOfTheDay.vue";

import LandingPage from "@/views/LandingPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import CollectionPage from "@/views/CollectionPage.vue";
import ComptePage from "@/views/ComptePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "/landing",
    name: "landing",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
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
  {
    path: "/pages/recipe",
    name: "recipe",
    component: Recipe,
  },
  {
    path: "/pages/daily",
    name: "daily",
    component: MealOfTheDay,
  },
  {
    path: "/pages/collection",
    name: "collection",
    component: CollectionPage,
  },
  {
    path: "/pages/account",
    name: "account",
    component: ComptePage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
