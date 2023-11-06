<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="secondary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"> Recette du moment </ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-img :src="recette.strMealThumb"></ion-img>
        <h1>{{ recette.strMeal }}</h1>
        <p>Origine: {{ recette.strArea }}</p>
        <p>Catégorie: {{ recette.strCategory }}</p>
        <h2>Ingrédients</h2>
        <ul>
          <DynamicScroller class="scroller" :items="ingredients" :min-item-size="1">
            <template #default="{ item }">
              <li>{{ item }}</li>
            </template>
          </DynamicScroller>
        </ul>
        <h2>Instructions</h2>
        <p>{{ recette.strInstructions }}</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar, onIonViewWillEnter } from "@ionic/vue";

const recette = ref({});
const ingredients = ref([{}]);

onIonViewWillEnter(async () => {
  console.log("la page Home entrée");
  await getUneRecette();
});

async function getUneRecette() {
  let url = "https://www.themealdb.com/api/json/v1/1/random.php";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.meals[0].strMealThumb);
  recette.value = data.meals[0];
  let temp: string[] = [];
  for (let i = 1; i <= 20; i++) {
    if (data.meals[0]["strIngredient" + i]) {
      temp.push(data.meals[0]["strIngredient" + i]);
      console.log(data.meals[0]["strIngredient" + i]);
    }
  }
  ingredients.value = temp;
}
</script>

<style scoped></style>
