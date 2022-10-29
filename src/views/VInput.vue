<script setup>
import { ref, computed } from "vue";
import VInput from "@/components/VInput.vue";
import VButton from "@/components/VButton.vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  email,
  maxLength,
  numeric,
  sameAs,
} from "@vuelidate/validators";

const nameField = ref("");
const emailField = ref("");
const luckyField = ref("");
const passwordField = ref("");
const confirmPassworrdField = ref("");
const codeWordMeowField = ref("");

const mustBeMeow = (value) => value.includes("meow");

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(
      `Минимальная длинна 3 символа`,
      minLength(3)
    ),
  },
  emailField: {
    email: helpers.withMessage(`Вы ввели неверный email`, email),
  },
  luckyField: {
    maxLength: helpers.withMessage(
      `Максимальная длина 2 символа`,
      maxLength(2)
    ),
    numeric: helpers.withMessage(`Вы можете ввести только цифры`, numeric),
  },
  confirmPassworrdField: {
    sameAsPassword: helpers.withMessage(
      `Пароли не совпадают`,
      sameAs(passwordField.value)
    ),
  },
  codeWordMeowField: {
    codeWordMeowField: helpers.withMessage(
      "Строка должна содержать кодовое слово - meow",
      mustBeMeow
    ),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyField,
  passwordField,
  confirmPassworrdField,
  codeWordMeowField,
});
console.log(v);

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) return;
  alert("Форма отправлена");
};
</script>

<template>
  <div>
    <h1 class="heading-1">Inputs</h1>
    <form @submit.prevent="submitForm">
      <VInput
        label="Your name"
        name="name"
        placeholder="Input your name"
        v-model:value="v.nameField.$model"
        :error="v.nameField.$errors"
      />

      <VInput
        label="Your email"
        name="email"
        placeholder="Input your email"
        v-model:value="v.emailField.$model"
        :error="v.emailField.$errors"
      />

      <VInput
        label="Your lucky number"
        name="lucky"
        placeholder="Input your lucky number"
        v-model:value="v.luckyField.$model"
        :error="v.luckyField.$errors"
      />

      <VInput
        label="Your password"
        name="password"
        placeholder="Input your password"
        v-model:value="passwordField"
        type="password"
      />

      <VInput
        label="Confirm password"
        name="confirm"
        placeholder="Please confirm password"
        v-model:value="v.confirmPassworrdField.$model"
        :error="v.confirmPassworrdField.$errors"
        type="password"
      />

      <VInput
        label="Meow string"
        name="meow"
        placeholder="Input string with meow"
        v-model:value="v.codeWordMeowField.$model"
        :error="v.codeWordMeowField.$errors"
      />

      <VButton label="Submit" color="primary" />
    </form>
  </div>
</template>
