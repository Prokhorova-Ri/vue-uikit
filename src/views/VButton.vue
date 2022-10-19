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
    <VButton label="Primary" color="primary" disabled />
    <VButton label="Secondary" color="second" disabled />
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
    <VButton label="Primary" color="primary" rounded />
    <VButton label="Secondary" color="second" rounded />
    <VButton label="Success" color="success" rounded />
    <VButton label="Info" color="info" rounded />
    <VButton label="Warning" color="warning" rounded />
    <VButton label="Danger" color="danger" rounded />
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <VButton label="Primary" color="primary" outlined />
    <VButton label="Secondary" color="second" outlined />
    <VButton label="Success" color="success" outlined />
    <VButton label="Info" color="info" outlined />
    <VButton label="Warning" color="warning" outlined />
    <VButton label="Danger" color="danger" outlined />
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
    <VButton color="primary" icon="heart" outlined />
    <VButton color="second" icon="hand" outlined />
    <VButton color="success" icon="address-book" outlined />
    <VButton color="info" icon="credit-card" outlined />
    <VButton color="warning" icon="lemon" outlined />
    <VButton color="danger" icon="hourglass" outlined />
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
