<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="secondary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list v-for="meal in repas">
        <ion-item :key="meal.idMeal">
          <div class="mealIcon"><ion-img :key="meal.strMealThumb" :src="meal.strMealThumb"></ion-img></div>
          {{ meal.strMeal }}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonList, IonItem, onIonViewWillEnter, IonImg } from "@ionic/vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const repas = ref<Meal[]>([]);
const route = useRoute();

interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

onIonViewWillEnter(async () => {
  const category = route.params.id;
  getListe(category);
});

async function getListe(category) {
  let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;

  var slicedUrl = url.slice(0, 53);
  var slicedurl2 = url.slice(53, url.length);
  var slicedurl3 = slicedUrl + slicedurl2;
  console.log(slicedurl3);

  const response = await fetch(slicedurl3);
  const data = await response.json();
  console.log(response);

  repas.value = data.meals;
}
</script>

<style scoped>
.mealIcon {
  max-height: 2rem;
  max-width: 2rem;
  margin-right: 1rem;
  border-radius: 50%;
  overflow: hidden;
}
</style>
