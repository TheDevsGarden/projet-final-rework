<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>API Caller</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div>Array:</div>
      <button v-for="name in uniqueNames" :key="name">
        {{ name }}
      </button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import { Ref, ref, computed } from "vue";

// const categoryArray = ref<String[]>;

const fetchCategories = async () => {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const data = await response.json();
  console.log(data);
  // const categoryMaps = data.map((category: { idCategory: String; strCategory: String; strCategoryDescription: String; strCategoryThumb: String }) => {
  //   return {
  //     id: category.idCategory,
  //     name: category.strCategory,
  //     description: category.strCategoryDescription,
  //     thumbnail: category.strCategoryThumb,
  //   };
  // });
  // console.log("data returned");
  // console.log(data);
  return data;
};

const data = ref(await fetchCategories());

const uniqueNames = computed(() => {
  return [...new Set(data.value.map((item) => item.strCategory))];
});

//working on getting the fetch into an array or dictionnary
let myCat1 = "";
fetchCategories().then((data) => {
  for (let i = 0; i < data.categories.length; i++) {
    myCat1 = data.categories[i].strCategory;
    console.log(myCat1);
  }
});

fetchCategories();
</script>

<style scoped></style>
