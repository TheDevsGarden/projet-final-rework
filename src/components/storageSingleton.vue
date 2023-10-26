<template></template>

<script lang="ts">
import { Storage } from "@ionic/storage";

let storage: Storage;
let lastFetchDate: Date;

const Initialize = () => {
  if (!storage) {
    createStorage();
  }
};
const createStorage = () => {
  storage = new Storage();
  storage.create();
  lastFetchDate = new Date(0);
};

export { Initialize };
</script>

<style scoped></style>
