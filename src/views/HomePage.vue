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
          <ion-card color="secondary">
            <img alt="soup" src="https://shorturl.at/hFIM5" />
            <ion-card-header>
              <ion-card-title>Soup</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content> Card Content </ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card color="secondary">
            <img alt="soup" src="https://shorturl.at/hFIM5" />
            <ion-card-header>
              <ion-card-title>Soup</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content> Card Content </ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card color="secondary">
            <img alt="soup" src="https://shorturl.at/hFIM5" />
            <ion-card-header>
              <ion-card-title>Soup</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content> Card Content </ion-card-content>
          </ion-card>
        </swiper-slide>
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

const spaceBetween = 1;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress);
};
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
