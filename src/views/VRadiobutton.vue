<script setup>
import { ref } from "vue";
import VRadiobutton from "@/components/VRadiobutton.vue";

const radioPoints = ref([
  { name: "Point One", id: "p1" },
  { name: "Point Two", id: "p21" },
  { name: "Point Three", id: "p3" },
  { name: "Point Four", id: "p4" },
  { name: "Point Five", id: "p5" },
]);

const selectedPoints = ref("");

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basik</h2>
  <div class="line line__block">
    <p>Selected Points: {{ selectedPoints }}</p>
    <div v-for="point in radioPoints" :key="point.id">
      <VRadiobutton
        :value="point.name"
        :label="point.name"
        :id="point.id"
        name="point"
        v-model:checkedValue="selectedPoints"
      />
    </div>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <VRadiobutton
      value="Radiobutton Disabled"
      label="Radiobutton Disabled"
      id="Radiobutton Disabled"
      name="Radiobutton Disabled"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"
    />
  </div>
</template>
