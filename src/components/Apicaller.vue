<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>API Caller</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item v-for="category in categoryMaps" :key="category.id">
          <ion-label>{{ category.name }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from "@ionic/vue";
import { Ref, ref, computed } from "vue";

interface Category {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
}

const fetchCategories = async () => {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const data = await response.json();
  console.log(data);
  return data;
};

const fetchCategoriesAsMap = async () => {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const data = await response.json();
  console.log(data);
  const categoryMaps = data.categories.map((category: { idCategory: string; strCategory: string; strCategoryDescription: string; strCategoryThumb: string }) => {
    return {
      id: category.idCategory,
      name: category.strCategory,
      description: category.strCategoryDescription,
      thumbnail: category.strCategoryThumb,
    };
  });
  console.log(categoryMaps);
  return categoryMaps;
};

const categoryMaps = ref<Category[]>([]);
fetchCategoriesAsMap().then((data) => {
  categoryMaps.value = data;
});

// let myCat1 = "";
// fetchCategories().then((data) => {
//   for (let i = 0; i < data.categories.length; i++) {
//     myCat1 = data.categories[i].strCategory;
//     console.log(myCat1);
//   }
// });

fetchCategories();
</script>

<style scoped></style>
