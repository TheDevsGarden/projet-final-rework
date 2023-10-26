<template>
  <ion-page v-if="!isLoading">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="secondary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Meals in this category</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-card href="/pages/recipe" v-for="meal in meals" :key="meal.idMeal" @click="setMealSelection(meal.idMeal)">
          <img :src="meal.strMealThumb" />
          <ion-card-header>
            <ion-card-title>{{ meal.strMeal }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>{{ meal.idMeal }}</p>
          </ion-card-content>
        </ion-card>
      </ion-list>
    </ion-content>
  </ion-page>
  <div v-else>
    <p>loading...</p>
  </div>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon, IonButtons, IonMenuButton, IonCard, IonCardTitle, IonCardContent, IonCardHeader } from "@ionic/vue";
import { Storage } from "@ionic/storage";
import { Ref, ref, computed, onMounted } from "vue";
import { RouterLink, Router } from "vue-router";

const storage = new Storage();
storage.create();

class Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;

  constructor(strMeal: string, strMealThumb: string, idMeal: string) {
    this.strMeal = strMeal;
    this.strMealThumb = strMealThumb;
    this.idMeal = idMeal;
  }
}

const fetchMeals = async () => {
  const theCatSelected = await storage.get("selectedCategory");
  console.log(theCatSelected);
  console.log(typeof theCatSelected); //stirng
  var url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + theCatSelected;

  var slicedUrl = url.slice(0, 53);
  var slicedurl2 = url.slice(54, url.length - 1);
  var slicedurl3 = slicedUrl + slicedurl2; //janky solution, string

  const response = await fetch(slicedurl3);
  //   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb`);
  const data = await response.json();
  console.log(data);
  const meals = data.meals.map((meal: { strMeal: string; strMealThumb: string; idMeal: string }) => {
    return new Meal(meal.strMeal, meal.strMealThumb, meal.idMeal);
  });
  console.log(meals);
  return meals;
};

const meals = ref<Meal[]>([]);
// fetchMeals().then((data) => {
//   meals.value = data;
// });

//store the meal that the user clicks on
const mealSelection = ref<string | null>(null);

const setMealSelection = (name: string) => {
  mealSelection.value = name;
  storage.set("selectedMeal", JSON.stringify(name)).then(() => {
    storage.get("selectedMeal").then((data: string) => {
      console.log("Storage contents:", data);
    });
  });
};

// storage.get("selectedMeal").then((data: string) => {
//   if (data) {
//     mealSelection.value = JSON.parse(data);
//   }
// });

const isLoading = ref(true);

onMounted(async () => {
  // Perform all asynchronous operations here
  await fetchMeals().then((data) => {
    meals.value = data;
  });

  storage.get("selectedMeal").then((data: string) => {
    if (data) {
      mealSelection.value = JSON.parse(data);
    }
  });
  isLoading.value = false;
});
</script>

<style scoped></style>
