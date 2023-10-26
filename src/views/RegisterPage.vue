<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Register</ion-title>
          </ion-toolbar>
        </ion-header>
        <div id="container">
          <ion-img src="src/assets/img/logo.svg" style="width: 50%; height: 50%;" alt="My recipe logo"></ion-img>
  
          <p>
            <ion-text color="black" style="font-weight: bold;">Créer votre compte</ion-text>
          </p>
  
          <ion-input v-model="email" label="Adresse e-mail" label-placement="floating" fill="outline"
            placeholder="Entrez votre courriel"></ion-input>
          <br />
  
          <ion-input v-model="password" label="Mot de passe" label-placement="floating" fill="outline"
            placeholder="Entrez votre mot de passe"></ion-input>
  
          <ion-row class="ion-justify-content-center">
            <ion-col size="6" class="button-col">
              <ion-button @click="createAccount" expand="block" style="height: 50px;" color="secondary">CRÉER UN COMPTE</ion-button>
            </ion-col>
          </ion-row>
  
          <p>
            <ion-text @click="goToLoginPage" color="black">Déjà un compte? Se Connecter</ion-text>
          </p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { IonImg, IonText, IonButton, IonRow, IonCol, IonInput } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
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
      IonCol,
      IonInput,
    },
    setup() {
      const router = useRouter();
  
      const email = ref('');
      const password = ref('');
  
      const createAccount = () => {
        router.push('/home');
      };
  
      const goToLoginPage = () => {
        router.push('/login');
      };
  
      return {
        email,
        password,
        createAccount,
        goToLoginPage,
      };
    },
  });
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 20px;
    right: 20px;
    margin: 100px 0;
  }
  
  #container ion-img {
    width: 50%;
    height: 50%;
    margin: 0 auto;
  }
  
  #container ion-input {
    margin-bottom: 20px;
  }
  
  .button-col {
    padding: 30px 0;
    margin-bottom: 30px;
  }
  
  ion-checkbox {
    --size: 24px;
    --checkbox-background-checked: #ffc409;
    margin: 10px;
  }
  
  ion-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid #ffc409;
  }
  
  ion-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .ion-text-end {
    text-align: left;
  }
  
  .ion-text-end {
    text-align: right;
  }
  </style>
  