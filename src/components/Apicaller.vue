<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>API Caller</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <!-- variant: with go button -->
        <ion-item v-for="category in categories" :key="category.id" @click="setActiveSelection(category.name)">
          <ion-label>{{ category.name }}</ion-label>
          <ion-button slot="end"> Go </ion-button>
        </ion-item>

        <!-- variant: with clickalbe item in list -->
        <!-- <ion-item href="#" v-for="category in categories" :key="category.id" @click="setActiveSelection(category.name)">
          <ion-label>{{ category.name }}</ion-label>
        </ion-item>
         -->
      </ion-list>

      <div v-if="activeSelection">Active selection: {{ activeSelection }}</div>

      <!-- variant: go to list button -->
      <!-- <ion-button router-link="/recipe-app/src/views/ListOfItems.vue">Go to list</ion-button> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon } from "@ionic/vue";
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

const setActiveSelection = (name: string) => {
  activeSelection.value = name;
};
</script>

<style scoped></style>
