<template>
  <ion-page v-for="mealDetail in myMeal" :key="mealDetail.idMeal">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="secondary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ mealDetail ? mealDetail.strMeal : "Loading..." }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-img :src="mealDetail.strMealThumb"> </ion-img>
      <h1>Instructions</h1>
      <ion-text>{{ mealDetail.strInstructions }}</ion-text>
      <h1>Ingrédients</h1>
      <ion-list>
        <ion-item v-for="item in ingredients">
          <ion-label>{{ item }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonImg, IonList, IonItem, IonLabel, IonText } from "@ionic/vue";

import { Storage } from "@ionic/storage";
import { Ref, ref, computed } from "vue";
import { RouterLink, Router } from "vue-router";

const storage = new Storage();
storage.create();

//the following needs refactoring but I got it to work so there's that...
class MealDetail {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;

  constructor(
    idMeal: string,
    strMeal: string,
    strDrinkAlternate: string,
    strCategory: string,
    strArea: string,
    strInstructions: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strIngredient16: string,
    strIngredient17: string,
    strIngredient18: string,
    strIngredient19: string,
    strIngredient20: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,
    strMeasure10: string,
    strMeasure11: string,
    strMeasure12: string,
    strMeasure13: string,
    strMeasure14: string,
    strMeasure15: string,
    strMeasure16: string,
    strMeasure17: string,
    strMeasure18: string,
    strMeasure19: string,
    strMeasure20: string,
    strSource: string,
    strImageSource: string,
    strCreativeCommonsConfirmed: string,
    dateModified: string
  ) {
    this.idMeal = idMeal;
    this.strMeal = strMeal;
    this.strDrinkAlternate = strDrinkAlternate;
    this.strCategory = strCategory;
    this.strArea = strArea;
    this.strInstructions = strInstructions;
    this.strMealThumb = strMealThumb;
    this.strTags = strTags;
    this.strYoutube = strYoutube;
    this.strIngredient1 = strIngredient1;
    this.strIngredient2 = strIngredient2;
    this.strIngredient3 = strIngredient3;
    this.strIngredient4 = strIngredient4;
    this.strIngredient5 = strIngredient5;
    this.strIngredient6 = strIngredient6;
    this.strIngredient7 = strIngredient7;
    this.strIngredient8 = strIngredient8;
    this.strIngredient9 = strIngredient9;
    this.strIngredient10 = strIngredient10;
    this.strIngredient11 = strIngredient11;
    this.strIngredient12 = strIngredient12;
    this.strIngredient13 = strIngredient13;
    this.strIngredient14 = strIngredient14;
    this.strIngredient15 = strIngredient15;
    this.strIngredient16 = strIngredient16;
    this.strIngredient17 = strIngredient17;
    this.strIngredient18 = strIngredient18;
    this.strIngredient19 = strIngredient19;
    this.strIngredient20 = strIngredient20;
    this.strMeasure1 = strMeasure1;
    this.strMeasure2 = strMeasure2;
    this.strMeasure3 = strMeasure3;
    this.strMeasure4 = strMeasure4;
    this.strMeasure5 = strMeasure5;
    this.strMeasure6 = strMeasure6;
    this.strMeasure7 = strMeasure7;
    this.strMeasure8 = strMeasure8;
    this.strMeasure9 = strMeasure9;
    this.strMeasure10 = strMeasure10;
    this.strMeasure11 = strMeasure11;
    this.strMeasure12 = strMeasure12;
    this.strMeasure13 = strMeasure13;
    this.strMeasure14 = strMeasure14;
    this.strMeasure15 = strMeasure15;
    this.strMeasure16 = strMeasure16;
    this.strMeasure17 = strMeasure17;
    this.strMeasure18 = strMeasure18;
    this.strMeasure19 = strMeasure19;
    this.strMeasure20 = strMeasure20;
    this.strSource = strSource;
    this.strImageSource = strImageSource;
    this.strCreativeCommonsConfirmed = strCreativeCommonsConfirmed;
    this.dateModified = dateModified;
  }
}

//define property to use in page
const myMeal = ref<MealDetail[]>([]);

const fetchMealDetail = async () => {
  const theMealSelected = await storage.get("selectedMeal");
  console.log(theMealSelected);
  var baseurl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + theMealSelected;

  //handle url string
  var slicedUrl = baseurl.slice(0, 53);
  var slicedurl2 = baseurl.slice(54, baseurl.length - 1);
  var slicedurl3 = slicedUrl + slicedurl2; //janky solution, string

  //handle fetch req
  const response = await fetch(slicedurl3);
  const data = await response.json();
  console.log(data);

  //map data, inefficient/ no time to refactor
  const myMeal = data.meals.map(
    (mealDetail: {
      idMeal: string;
      strMeal: string;
      strDrinkAlternate: string;
      strCategory: string;
      strArea: string;
      strInstructions: string;
      strMealThumb: string;
      strTags: string;
      strYoutube: string;
      strIngredient1: string;
      strIngredient2: string;
      strIngredient3: string;
      strIngredient4: string;
      strIngredient5: string;
      strIngredient6: string;
      strIngredient7: string;
      strIngredient8: string;
      strIngredient9: string;
      strIngredient10: string;
      strIngredient11: string;
      strIngredient12: string;
      strIngredient13: string;
      strIngredient14: string;
      strIngredient15: string;
      strIngredient16: string;
      strIngredient17: string;
      strIngredient18: string;
      strIngredient19: string;
      strIngredient20: string;
      strMeasure1: string;
      strMeasure2: string;
      strMeasure3: string;
      strMeasure4: string;
      strMeasure5: string;
      strMeasure6: string;
      strMeasure7: string;
      strMeasure8: string;
      strMeasure9: string;
      strMeasure10: string;
      strMeasure11: string;
      strMeasure12: string;
      strMeasure13: string;
      strMeasure14: string;
      strMeasure15: string;
      strMeasure16: string;
      strMeasure17: string;
      strMeasure18: string;
      strMeasure19: string;
      strMeasure20: string;
      strSource: string;
      strImageSource: string;
      strCreativeCommonsConfirmed: string;
      dateModified: string;
    }) => {
      return new MealDetail(
        mealDetail.idMeal,
        mealDetail.strMeal,
        mealDetail.strDrinkAlternate,
        mealDetail.strCategory,
        mealDetail.strArea,
        mealDetail.strInstructions,
        mealDetail.strMealThumb,
        mealDetail.strTags,
        mealDetail.strYoutube,
        mealDetail.strIngredient1,
        mealDetail.strIngredient2,
        mealDetail.strIngredient3,
        mealDetail.strIngredient4,
        mealDetail.strIngredient5,
        mealDetail.strIngredient6,
        mealDetail.strIngredient7,
        mealDetail.strIngredient8,
        mealDetail.strIngredient9,
        mealDetail.strIngredient10,
        mealDetail.strIngredient11,
        mealDetail.strIngredient12,
        mealDetail.strIngredient13,
        mealDetail.strIngredient14,
        mealDetail.strIngredient15,
        mealDetail.strIngredient16,
        mealDetail.strIngredient17,
        mealDetail.strIngredient18,
        mealDetail.strIngredient19,
        mealDetail.strIngredient20,
        mealDetail.strMeasure1,
        mealDetail.strMeasure2,
        mealDetail.strMeasure3,
        mealDetail.strMeasure4,
        mealDetail.strMeasure5,
        mealDetail.strMeasure6,
        mealDetail.strMeasure7,
        mealDetail.strMeasure8,
        mealDetail.strMeasure9,
        mealDetail.strMeasure10,
        mealDetail.strMeasure11,
        mealDetail.strMeasure12,
        mealDetail.strMeasure13,
        mealDetail.strMeasure14,
        mealDetail.strMeasure15,
        mealDetail.strMeasure16,
        mealDetail.strMeasure17,
        mealDetail.strMeasure18,
        mealDetail.strMeasure19,
        mealDetail.strMeasure20,
        mealDetail.strSource,
        mealDetail.strImageSource,
        mealDetail.strCreativeCommonsConfirmed,
        mealDetail.dateModified
      );
    }
  );

  return myMeal;
};

fetchMealDetail().then((data) => {
  myMeal.value = data;
  getmyingredients(myMeal);
});

var ingredients: string[] = []; //not efficient, only way I know how to push items to screen

function getmyingredients(mapInput: Ref<MealDetail[]>): string[] {
  ingredients = [];
  for (let mealDetail of mapInput.value) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealDetail[`strIngredient${i}`];
      const measure = mealDetail[`strMeasure${i}`];
      if (ingredient && measure) {
        const ingredientString = `${ingredient}: ${measure}`;
        ingredients.push(ingredientString);
      }
    }
  }
  console.log(ingredients);
  return ingredients;
}
</script>

<style scoped></style>
