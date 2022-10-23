<script setup>
import { ref } from "vue";
import VProgress from "@/components/Progress/VProgressBar.vue";
import VButton from "@/components/VButton.vue";

const percentBar = ref(40);
const addPercentBar = () => {
  percentBar.value += 10;
  if (percentBar.value > 100) {
    percentBar.value = 100;
  }
};
</script>

<template>
  <div>
    <h1 class="heading-1">Progress</h1>
    <h2 class="heading-2">Progress-bar</h2>
    <div class="line line__block"></div>
    <VProgress maxWidth="400px" :percent="percentBar" color="danger" />
    <VButton label="Add 10%" @click="addPercentBar">Add 10%</VButton>
  </div>
</template>
