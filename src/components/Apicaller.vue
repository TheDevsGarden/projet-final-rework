<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>API Caller</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div>Array: [{{ categoryArray }}]</div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import { Ref, ref } from "vue";

const categoryArray = ref<String[]>;

const fetchCategories = async () => {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const data = await response.json();
  console.log(data);
  const categoryMaps = data.map((category: { idCategory: String; strCategory: String; strCategoryDescription: String; strCategoryThumb: String }) => {
    return {
      id: category.idCategory,
      name: category.strCategory,
      description: category.strCategoryDescription,
      thumbnail: category.strCategoryThumb,
    };
  });
  return categoryMaps;
};

fetchCategories().then((categoryMaps) => {
  for (const item in categoryMaps) {
  }
});
</script>

<style scoped></style>
