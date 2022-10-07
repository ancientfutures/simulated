<script setup lang="ts">
import { db } from "../firebase";
import { collection } from "@firebase/firestore";
import { useFirestore } from "@vueuse/firebase/useFirestore";

const post = useFirestore(collection(db, "post"));
</script>

<template>
  <main transition-transform>
    <h1 v-for="item in post" :key="item.id">{{ item.title }}</h1>
  </main>
</template>
