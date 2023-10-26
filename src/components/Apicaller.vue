<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="secondary"></ion-menu-button>
        </ion-buttons>
        <ion-title>API Caller</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item href="/pages/listOfItems" v-for="category in categories" :key="category.id" @click="setActiveSelection(category.name)">
          <ion-label>{{ category.name }}</ion-label>
        </ion-item>
      </ion-list>

      <div v-if="activeSelection">choix sauvegardé: {{ activeSelection }}</div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon, IonButtons, IonMenuButton } from "@ionic/vue";
import { Storage } from "@ionic/storage"; // I did a bun, yarn and npm install of ionic/storage idk why it's saying 'Cannot find module '@ionic/storage' or its corresponding type declarations.ts(2307)'
import { Ref, ref, computed } from "vue";
import { RouterLink, Router } from "vue-router";

class Category {
  id: string;
  name: string;
  description: string;
  thumbnail: string;

  constructor(id: string, name: string, description: string, thumbnail: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
  }
}

const fetchCategories = async () => {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const data = await response.json();
  console.log(data);
  const categories = data.categories.map((category: { idCategory: string; strCategory: string; strCategoryDescription: string; strCategoryThumb: string }) => {
    return new Category(category.idCategory, category.strCategory, category.strCategoryDescription, category.strCategoryThumb);
  });
  console.log(categories);
  return categories;
};

const categories = ref<Category[]>([]);
fetchCategories().then((data) => {
  categories.value = data;
});

const activeSelection = ref<string | null>(null);

const storage = new Storage();
storage.create();

const setActiveSelection = (name: string) => {
  activeSelection.value = name;
  storage.set("selectedCategory", JSON.stringify(name)).then(() => {
    storage.get("selectedCategory").then((data: string) => {
      console.log("Storage contents:", data);
    });
  });
};

storage.get("selectedCategory").then((data: string) => {
  if (data) {
    activeSelection.value = JSON.parse(data);
  }
});
</script>

<style scoped></style>
