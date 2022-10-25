<script setup>
import { ref } from "vue";
import VInput from "@/components/VInput.vue";

const nameField = ref("");
</script>

<template>
  <div>
    <h1 class="heading-1">Inputs</h1>

    <form>
      <VInput
        label="Your name"
        name="name"
        placeholder="Input your name"
        v-model:value="nameField"
      />
    </form>
  </div>
</template>
