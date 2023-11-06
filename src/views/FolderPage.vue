<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
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
        <ion-img :src="this.recette.strMealThumb"></ion-img>
        <h1>{{ this.recette.strMeal }}</h1>
        <p>Origine: {{ this.recette.strArea }}</p>
        <p>Catégorie: {{ this.recette.strCategory }}</p>
        <h2>Ingrédients</h2>
        <ul>
          <DynamicScroller class="scroller" :items="ingredients" :min-item-size="0">
            <template #default="{ item }">
              <li>{{ item }}</li>
            </template>
          </DynamicScroller>
        </ul>
        <h2>Instructions</h2>
        <p>{{ this.recette.strInstructions }}</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FolderPage",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    DynamicScroller,
  },

  data() {
    return {
      recette: {},
      ingredients: [{}],
    };
  },
  ionViewDidEnter() {
    console.log("la page Home entrée");
    this.getUneRecette();
  },
  methods: {
    async getUneRecette() {
      let url = "https://www.themealdb.com/api/json/v1/1/random.php";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.meals[0].strMealThumb);
          this.recette = data.meals[0];
          let temp: string[] = [];
          for (let i = 1; i <= 20; i++) {
            if (data.meals[0]["strIngredient" + i]) {
              temp.push(data.meals[0]["strIngredient" + i]);
              console.log(data.meals[0]["strIngredient" + i]);
            }
          }
          this.ingredients = temp;
        });
    },
  },
});
</script>

<style scoped></style>
