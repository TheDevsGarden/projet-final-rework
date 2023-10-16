<template>
  <ion-page>
    <ion-header>header</ion-header>
    <ion-content>
      <div><p>Home Page</p></div>
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

      <ion-label><h2>I WOULD LIKE TO COOK</h2></ion-label>
      <swiper-container
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
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper-container>
    </ion-content>
    <ion-footer>Footer</ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonLabel, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonCol, IonSearchbar, IonButton, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader } from "@ionic/vue";

import { readerOutline } from "ionicons/icons";
import { register } from "swiper/element/bundle";
register();

const spaceBetween = 100;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress);
};

const onSlideChange = (e) => {
  console.log("slide changed");
};
</script>

<style scoped></style>
