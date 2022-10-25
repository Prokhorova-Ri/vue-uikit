<script setup>
import { ref } from "vue";
import VProgress from "@/components/Progress/VProgressBar.vue";
import VProgressCircle from "@/components/Progress/VProgressCircle.vue";
import VButton from "@/components/VButton.vue";

const percentBar = ref(40);
const percentCircle = ref(60);
const addPercentBar = () => {
  percentBar.value += 10;
  if (percentBar.value > 100) {
    percentBar.value = 100;
  }
};

const addPercentCircle = () => {
  percentCircle.value += 10;
  if (percentCircle.value > 100) {
    percentCircle.value = 100;
  }
};
</script>

<template>
  <div>
    <h1 class="heading-1">Progress</h1>
    <h2 class="heading-2">Progress-bar</h2>
    <div class="line line__block"></div>
    <VProgress maxWidth="400px" :percent="percentBar" color="success" />
    <VButton label="Add 10%" @click="addPercentBar">Add 10%</VButton>
  </div>
  <h2 class="heading-2">Progress Circle</h2>
  <div class="line line__block">
    <VProgressCircle :percent="percentCircle" color="second" />
    <VButton label="Add 10%" @click="addPercentCircle">Add 10%</VButton>
  </div>
</template>
