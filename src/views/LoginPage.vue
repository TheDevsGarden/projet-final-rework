<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Login</ion-title>
          </ion-toolbar>
        </ion-header>
        <div id="container">
          <ion-img src="src/assets/img/logo.svg" style="width: 50%; height: 50%;" alt="My recipe logo"></ion-img>
  
          <p>
            <ion-text color="black" style="font-weight: bold;">Connectez-vous à votre compte</ion-text>
          </p>
  
          <ion-input v-model="email" label="Adresse e-mail" label-placement="floating" fill="outline" placeholder="Entrez votre courriel"></ion-input>
          <br />
  
          <ion-input v-model="password" label="Mot de passe" label-placement="floating" fill="outline" placeholder="Entrez votre mot de passe" type="password"></ion-input>
  
          <ion-row>
            <ion-col class="ion-text-start">
              <ion-checkbox v-model="remember"></ion-checkbox>Se souvenir
            </ion-col>
            <ion-col class="ion-text-end">
              <ion-text color="black">
                <p @click="forgotPassword">Mot de passe oublié?</p>
              </ion-text>
            </ion-col>
          </ion-row>
  
          <ion-row class="ion-justify-content-center">
            <ion-col size="6" class="button-col">
              <ion-button @click="login" expand="block" style="height: 50px;" color="secondary">Se Connecter</ion-button>
            </ion-col>
          </ion-row>
  
          <p>
            <ion-text @click="goToRegisterPage" color="black">Pas de Compte? Enregistrer</ion-text>
          </p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { IonImg, IonText, IonButton, IonRow, IonCol, IonCheckbox, IonInput } from '@ionic/vue';
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
      IonCheckbox,
      IonInput,
    },
    setup() {
      const router = useRouter();
  
      const email = ref('');
      const password = ref('');
      const remember = ref(false);
  
      const login = () => {
        router.push('/home');
      };
  
      const goToRegisterPage = () => {
        router.push('/register');
      };
  
      const forgotPassword = () => {
        // Forgot and change the password
      };
  
      return {
        email,
        password,
        remember,
        login,
        goToRegisterPage,
        forgotPassword,
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
    --checkbox-background-checked: #3dc2ff;
    margin: 10px;
  }
  
  ion-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid #3dc2ff;
  }
  
  ion-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .ion-text-end {
    font-size: 15px;
    text-align: right;
  }
  </style>
  