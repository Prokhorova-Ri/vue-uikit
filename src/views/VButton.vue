<script setup>
import VButton from "@/components/layout/VButton.vue";

const eventForButton = () => {
  alert("You click danger button!");
};
</script>

<template>
  <h1 class="heading-1">Button</h1>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <VButton label="Primary" color="primary" :disabled="true" />
    <VButton label="Secondary" color="second" :disabled="true" />
  </div>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <VButton label="Primary" color="primary" />
    <VButton label="Secondary" color="second" />
    <VButton label="Success" color="success" />
    <VButton label="Info" color="info" />
    <VButton label="Warning" color="warning" />
    <VButton label="Danger" color="danger" />
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <VButton label="Primary" color="primary" :rounded="true" />
    <VButton label="Secondary" color="second" :rounded="true" />
    <VButton label="Success" color="success" :rounded="true" />
    <VButton label="Info" color="info" :rounded="true" />
    <VButton label="Warning" color="warning" :rounded="true" />
    <VButton label="Danger" color="danger" :rounded="true" />
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <VButton label="Primary" color="primary" :outlined="true" />
    <VButton label="Secondary" color="second" :outlined="true" />
    <VButton label="Success" color="success" :outlined="true" />
    <VButton label="Info" color="info" :outlined="true" />
    <VButton label="Warning" color="warning" :outlined="true" />
    <VButton label="Danger" color="danger" :outlined="true" />
  </div>
  <h2 class="heading-2">Icon</h2>
  <div class="line">
    <VButton color="primary" icon="heart" />
    <VButton color="second" icon="hand" />
    <VButton color="success" icon="address-book" />
    <VButton color="info" icon="credit-card" />
    <VButton color="warning" icon="lemon" />
    <VButton color="danger" icon="hourglass" />
  </div>
  <h2 class="heading-2">Icon Outlined</h2>
  <div class="line">
    <VButton color="primary" icon="heart" :outlined="true" />
    <VButton color="second" icon="hand" :outlined="true" />
    <VButton color="success" icon="address-book" :outlined="true" />
    <VButton color="info" icon="credit-card" :outlined="true" />
    <VButton color="warning" icon="lemon" :outlined="true" />
    <VButton color="danger" icon="hourglass" :outlined="true" />
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <VButton label="Normal" color="primary" />
    <VButton label="Large" color="primary" size="large" />
  </div>
  <h2 class="heading-2">Event</h2>
  <div class="line">
    <VButton label="@click" color="danger" @click="eventForButton" />
  </div>
</template>

<style lang="scss" scoped>
.line {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
