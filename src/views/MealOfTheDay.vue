<template></template>

<script lang="ts">
import { IonPage } from "@ionic/vue";
import { Storage } from "@ionic/storage";

let storage: Storage;
let lastFetchDate: Date;

const createStorage = () => {
  storage = new Storage();
  storage.create();
  lastFetchDate = new Date(0);
};

const fetchrandom = async () => {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  const response = await fetch(url);
  const data = await response.json();
  const idMeal = data.meals[0].idMeal;
  return idMeal;
};

const fetchAndStoreRandomMeal = async () => {
  const currentDate = new Date();
  const timeSinceLastFetch = currentDate.getTime() - lastFetchDate.getTime();
  const hoursSinceLastFetch = timeSinceLastFetch / (1000 * 60 * 60);
  if (hoursSinceLastFetch >= 24) {
    const idMeal = await fetchrandom();
    await storage.set("selectedRandomMeal", JSON.stringify(idMeal));
    const data = await storage.get("selectedRandomMeal");
    console.log("random meal:", data);
    lastFetchDate = currentDate;
  } else {
    console.log("Not fetching new meal - last fetch was less than 24 hours ago");
  }
};

const getMealOfTheDay = async () => {
  if (!storage) {
    createStorage();
  }
  const data = await storage.get("selectedRandomMeal");
  await storage.set("selectedMeal", JSON.stringify(data));
  if (data) {
    var stringData = JSON.stringify(data).slice(3, 8);
    await storage.set("selectedMeal", data);
    // console.log("Retrieved meal from storage:", data);
    console.log("Retrieved meal from storage:", stringData);
    return stringData;
  } else {
    await fetchAndStoreRandomMeal();
    return getMealOfTheDay();
  }
};

getMealOfTheDay();

export { createStorage, fetchAndStoreRandomMeal, getMealOfTheDay };
</script>

<style scoped></style>
