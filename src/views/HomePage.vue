<template>
  <ion-page v-if="!isLoading">
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
              <ion-icon :icon="appsOutline" size="large" color=""></ion-icon>
            </ion-button>
            <ion-label>All Items</ion-label>
          </ion-col>
          <ion-col class="ion-text-center">
            <ion-button color="primary">
              <ion-icon :icon="pawOutline" size="large"></ion-icon>
            </ion-button>
            <ion-label>Beef</ion-label>
          </ion-col>
          <ion-col class="ion-text-center">
            <ion-button>
              <ion-icon :icon="fishOutline" size="large"></ion-icon>
            </ion-button>
            <ion-label>Fish</ion-label>
          </ion-col>
          <ion-col class="ion-text-center">
            <ion-button>
              <ion-icon :icon="iceCreamOutline" size="large"></ion-icon>
            </ion-button>
            <ion-label>Dessert</ion-label>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-label class="ion-text-center" color="darl"><h1>I WOULD LIKE TO COOK</h1></ion-label>

      <ion-searchbar animated="true" placeholder="Animated"></ion-searchbar>

      <ion-row id="premium-1">
        <ion-col size="12">
          <ion-text color="light">
            <h4>OUVRIR</h4>
          </ion-text>
        </ion-col>
        <ion-col size="12">
          <ion-text color="light">
            <h4>RECETTES ILLIMITÉES</h4>
          </ion-text>
        </ion-col>
        <ion-col size="12">
          <ion-button expand="block" style="height: 50px" color="secondary">PASSER EN PREMIUM</ion-button>
        </ion-col>
      </ion-row>

      <!-- professor has a requirement for meal of the day -->
      <ion-row id="premium-2">
        <ion-col size="12">
          <ion-text color="dark">
            <h4>RECETTE DU JOUR</h4>
          </ion-text>
        </ion-col>
        <ion-col size="12">
          <ion-button href="/pages/recipe" expand="block" style="height: 50px" color="secondary">Voir</ion-button>
        </ion-col>
      </ion-row>

      <ion-label color="dark"><h3>POPULAR RECIPES THIS WEEK</h3></ion-label>
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
          <swiper-slide v-if="meals.length > 0">
            <ion-card href="/pages/recipe" :key="meals[0].idMeal" @click="setMealSelection(meals[0].idMeal)">
              <img :src="meals[0].strMealThumb" />
              <ion-card-header>
                <ion-card-title>{{ meals[0].strMeal }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ meals[0].idMeal }}</p>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
          <swiper-slide v-if="meals.length > 0">
            <ion-card href="/pages/recipe" :key="meals[1].idMeal" @click="setMealSelection(meals[1].idMeal)">
              <img :src="meals[1].strMealThumb" />
              <ion-card-header>
                <ion-card-title>{{ meals[1].strMeal }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ meals[1].idMeal }}</p>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
          <swiper-slide v-if="meals.length > 0">
            <ion-card href="/pages/recipe" :key="meals[2].idMeal" @click="setMealSelection(meals[2].idMeal)">
              <img :src="meals[2].strMealThumb" />
              <ion-card-header>
                <ion-card-title>{{ meals[2].strMeal }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ meals[2].idMeal }}</p>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
          <swiper-slide v-if="meals.length > 0">
            <ion-card href="/pages/recipe" :key="meals[3].idMeal" @click="setMealSelection(meals[3].idMeal)">
              <img :src="meals[3].strMealThumb" />
              <ion-card-header>
                <ion-card-title>{{ meals[3].strMeal }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ meals[3].idMeal }}</p>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
          <swiper-slide v-if="meals.length > 0">
            <ion-card href="/pages/recipe" :key="meals[4].idMeal" @click="setMealSelection(meals[4].idMeal)">
              <img :src="meals[4].strMealThumb" />
              <ion-card-header>
                <ion-card-title>{{ meals[4].strMeal }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ meals[4].idMeal }}</p>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
          <swiper-slide v-if="meals.length > 0">
            <ion-card href="/pages/recipe" :key="meals[5].idMeal" @click="setMealSelection(meals[5].idMeal)">
              <img :src="meals[5].strMealThumb" />
              <ion-card-header>
                <ion-card-title>{{ meals[5].strMeal }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ meals[5].idMeal }}</p>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
          <swiper-slide v-if="meals.length > 0">
            <ion-card href="/pages/recipe" :key="meals[6].idMeal" @click="setMealSelection(meals[6].idMeal)">
              <img :src="meals[6].strMealThumb" />
              <ion-card-header>
                <ion-card-title>{{ meals[6].strMeal }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ meals[6].idMeal }}</p>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
          <swiper-slide v-if="meals.length > 0">
            <ion-card href="/pages/recipe" :key="meals[7].idMeal" @click="setMealSelection(meals[7].idMeal)">
              <img :src="meals[7].strMealThumb" />
              <ion-card-header>
                <ion-card-title>{{ meals[7].strMeal }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ meals[7].idMeal }}</p>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
        </swiper-container>
      </ion-list>
    </ion-content>
  </ion-page>
  <div v-else>
    <p>loading...</p>
  </div>
</template>

<script setup lang="ts">
import { IonContent, IonLabel, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonCol, IonSearchbar, IonButton, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonList, IonText } from "@ionic/vue";
import { airplaneOutline, appsOutline, fastFoodOutline, fishOutline, iceCreamOutline, pawOutline, readerOutline } from "ionicons/icons";

import { createStorage, fetchAndStoreRandomMeal, getMealOfTheDay } from "./MealOfTheDay.vue";
import { register } from "swiper/element/bundle";
import { Storage } from "@ionic/storage";
import { Ref, ref, computed, onMounted } from "vue";
import { RouterLink, Router } from "vue-router";

const storage = new Storage();
storage.create();

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

const categories = ["Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian", "Breakfast", "Goat"];

const selectRandomCategory = (): string => {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
};

const fetchMeals = async () => {
  var word = selectRandomCategory();

  var url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + word;
  var slicedUrl = url.slice(0, 53);
  var slicedurl2 = url.slice(53, url.length);
  var slicedurl3 = slicedUrl + slicedurl2;
  console.log(slicedurl3);

  const response = await fetch(slicedurl3);

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

<style scoped>
swiper-slide {
  min-width: 70%;
  max-height: 25rem;
  object-fit: contain;
}

ion-card-title {
  font-size: small;
}
ion-text {
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
}

ion-searchbar {
  margin: 20px 0;
  padding: 10px 20px;
}

#premium-1 {
  background-color: #242e54;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
}

#premium-2 {
  background-color: #d7d8da;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
}

#premium ion-col {
  padding: 0;
}
</style>
