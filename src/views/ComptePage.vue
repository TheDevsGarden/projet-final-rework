<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="secondary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Compte</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-center">
      <!-- Center align content -->
      <!-- Top Section: Avatar and Email -->
      <div class="top-section">
        <ion-avatar>
          <img src="src/assets/img/avatar.png" alt="Avatar" />
        </ion-avatar>
        <div>{{ userEmail }}</div>
      </div>
      <!-- Middle Section: Clickable List -->
      <ion-list>
        <ion-item @click="goToPage('PersonalInfo')">Personal Information</ion-item>
        <ion-item @click="goToPage('ChangePassword')">Change Password</ion-item>
        <ion-item @click="goToPage('Settings')">Settings</ion-item>
      </ion-list>
      <!-- Bottom Section: Logout Button -->
      <ion-button @click="goToLoginPage" expand="block">Logout</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar, IonButton } from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

// Simulated user email
const userEmail = ref("example@example.com");

// Using Vue Router.
//
const router = useRouter();

// Navigate to a specific page
const goToPage = (pageName) => {
  router.push({ name: pageName });
};

// Logout logic
const goToLoginPage = () => {
  router.push("/login");
};
</script>

<style>
.top-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
}

.top-section ion-avatar {
  margin-bottom: 10px; /* Adjust as needed for spacing */
}

ion-button {
  margin-top: 40px;
}
</style>
