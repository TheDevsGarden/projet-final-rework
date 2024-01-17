import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import FolderPage from "@/views/FolderPage.vue";
import Liste from "@/views/Liste.vue";
import Detail from "@/views/Detail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/folder/Accueil",
  },
  {
    name: "ACCUEIL",
    path: "/folder/Accueil",
    component: FolderPage,
  },
  {
    path: "/Detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    name: "Liste",
    path: "/liste/:id",
    component: Liste,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
