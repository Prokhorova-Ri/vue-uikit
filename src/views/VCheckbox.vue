<script setup>
import { ref } from "vue";
import VCheckbox from "@/components/Checkbox/VCheckbox.vue";
import VCheckboxGroup from "@/components/Checkbox/VCheckboxGroup.vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const listItems = ref([
  { name: "Item One", id: "i1" },
  { name: "Item Two", id: "i2" },
  { name: "Item Three", id: "i3" },
  { name: "Item Four", id: "i4" },
  { name: "Item Five", id: "i5" },
]);
const selectedItems = ref(["i2"]);

const switchProfessional = ref(false);
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <VCheckbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="QWERTY"
      v-model:checked="checkboxActive"
    />
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <VCheckbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="QWERTY"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"
    />
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line__block">
    <p>Selected Items: {{ selectedItems }}</p>
    <VCheckboxGroup
      v-model:value="selectedItems"
      name="items"
      :options="listItems"
    />
  </div>
  <h2 class="heading-2">Switch</h2>
  <p>Switch: {{ switchProfessional }}</p>
  <div class="line line__block">
    <VCheckbox
      label="Professional"
      id="switch"
      name="switch"
      type="switch"
      v-model:checked="switchProfessional"
    />
  </div>
</template>
