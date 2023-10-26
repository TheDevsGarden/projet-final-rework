<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="secondary"></ion-menu-button>
        </ion-buttons>
        <ion-title>My Collection</ion-title>
      </ion-toolbar>
    </ion-header>
      <ion-content>
        
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from "@ionic/vue";
    import { Storage } from "@ionic/storage";
    import { ref } from "vue";
  
    const storage = new Storage();
    storage.create();
  </script>
  