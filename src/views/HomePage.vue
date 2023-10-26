<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="secondary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col class="ion-text-center">
            <ion-button color="secondary">
              <ion-icon :icon="readerOutline" size="large" color=""></ion-icon>
            </ion-button>
            <ion-label>ALL</ion-label>
          </ion-col>
          <ion-col class="ion-text-center">
            <ion-button color="primary">
              <ion-icon :icon="readerOutline" size="large"></ion-icon>
            </ion-button>
            <ion-label>ALL</ion-label>
          </ion-col>
          <ion-col class="ion-text-center">
            <ion-button>
              <ion-icon :icon="readerOutline" size="large"></ion-icon>
            </ion-button>
            <ion-label>ALL</ion-label>
          </ion-col>
          <ion-col class="ion-text-center">
            <ion-button>
              <ion-icon :icon="readerOutline" size="large"></ion-icon>
            </ion-button>
            <ion-label>ALL</ion-label>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-label class="ion-text-center"><h1>I WOULD LIKE TO COOK</h1></ion-label>
      <ion-searchbar animated="true" placeholder="Animated"></ion-searchbar>

      <ion-card class="ion-text-center">
        <ion-card-header>
          <ion-card-title>UNLOCK UNLIMITED RECIPES</ion-card-title>
        </ion-card-header>

        <ion-card-content><ion-button color="dark">Go Premium</ion-button></ion-card-content>
      </ion-card>

      <!-- professor has a requirement for meal of the day -->
      <ion-card class="ion-text-center">
        <ion-card-header>
          <ion-card-title>Recette DU JOUR</ion-card-title>
        </ion-card-header>

        <ion-card-content><ion-button href="/pages/recipe" color="dark">Voir</ion-button></ion-card-content>
      </ion-card>

      <ion-label><h2>I WOULD LIKE TO COOK</h2></ion-label>
      <!-- The below could be re-implemented in vue-virtual-scroller  -->
      <ion-list>
        <swiper-container
          class="wider-slide"
          :slides-per-view="3"
          :space-between="spaceBetween"
          :centered-slides="true"
          :pagination="{
            hideOnClick: true,
          }"
          :breakpoints="{
            768: {
              slidesPerView: 3,
            },
          }"
          @progress="onProgress"
          @slidechange="onSlideChange"
        >
          <swiper-slide>
            <ion-card href="/pages/recipe" v-for="meal in meals" :key="meal.idMeal" @click="setMealSelection(meal.idMeal)">
              <img :src="meal.strMealThumb" />
              <ion-card-header>
                <ion-card-title>{{ meal.strMeal }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ meal.idMeal }}</p>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
        </swiper-container>
      </ion-list>
    </ion-content>
    <ion-footer>Footer</ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonLabel, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonCol, IonSearchbar, IonButton, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonList } from "@ionic/vue";
import { createStorage, fetchAndStoreRandomMeal, getMealOfTheDay } from "./MealOfTheDay.vue";
import { readerOutline } from "ionicons/icons";
import { register } from "swiper/element/bundle";
import { Storage } from "@ionic/storage";
import { Ref, ref, computed } from "vue";
import { RouterLink, Router } from "vue-router";

const storage = new Storage();
storage.create();

const createStorage = async () => {
  if (!storage.value) {
    storage.value = new Storage();
    await storage.value.create();
  }
};

createStorage();

register();

const spaceBetween = 1;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress);
};

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
  var url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const meals = data.meals.map((meal: { strMeal: string; strMealThumb: string; idMeal: string }) => {
    return new Meal(meal.strMeal, meal.strMealThumb, meal.idMeal);
  });
  console.log(meals);
  return meals;
};

const meals = ref<Meal[]>([]);
fetchMeals().then((data) => {
  meals.value = data;
});

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

storage.get("selectedMeal").then((data: string) => {
  if (data) {
    mealSelection.value = JSON.parse(data);
  }
});
</script>

<style scoped>
.wider-slide > swiper-slide {
  min-width: 50%;
  /* min-height: 50%; */
}
.wider-slide > swiper-slide > ion-card > img {
  width: 100%;
  height: 50%;
  object-fit: contain;
}
</style>
