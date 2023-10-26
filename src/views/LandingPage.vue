<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Mon Recette</ion-title>
          </ion-toolbar>
        </ion-header>
        <div id="container">
          <ion-img src="src/assets/img/landing.jpg" alt="landing image"></ion-img>
  
          <ion-text color="secondary">
            <h4>RECETTE PREMIUM ILLIMITÉ</h4>
          </ion-text>
  
          <ion-text color="black">
            <h2>COMMUNCER À CUISINER</h2>
          </ion-text>
  
          <ion-row class="ion-justify-content-center">
            <ion-col size="6" class="button-col">
              <ion-button @click="goToLoginPage" expand="block" style="height: 50px;" color="secondary">Connexion</ion-button>
            </ion-col>
            <ion-col size="6" class="button-col">
              <ion-button @click="goToRegisterPage" expand="block" style="height: 50px;" color="secondary">Enregistrer</ion-button>
            </ion-col>
          </ion-row>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { IonImg, IonText, IonButton, IonRow, IonCol } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRoute, useRouter } from 'vue-router'; // Import useRouter
  
  export default defineComponent({
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonImg,
      IonText,
      IonButton,
      IonRow,
      IonCol
    },
    setup() {
      const router = useRouter(); // Use useRouter()
  
      const goToLoginPage = () => {
        router.push('/login');
      };
  
      const goToRegisterPage = () => {
        router.push('/register');
      };
  
      return {
        goToLoginPage,
        goToRegisterPage
      };
    }
  });
  </script>
  
  <style scoped>
  #container {
    text-align: left;
    position: absolute;
    left: 0;
    right: 0;
  }
  
  .button-col {
    padding: 30px 15px;
    margin-bottom: 30px;
  }
  
  h2 {
    font-size: 40px;
    font-weight: bold;
    text-align: left;
    margin: 10px 20px;
  }
  
  h4 {
    font-size: 24px;
    text-align: left;
    margin-left: 20px;
  }
  </style>
  