import { createRouter, createWebHistory } from "vue-router";
import VIndex from "@/views/VIndex.vue";
import VButton from "@/views/VButton.vue";
import VTypography from "@/views/VTypography.vue";
import VCheckbox from "@/views/VCheckbox.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: VIndex,
    },
    {
      path: "/button",
      name: "Button",
      component: VButton,
    },
    {
      path: "/typography",
      name: "Typography",
      component: VTypography,
    },
    {
      path: "/checkbox",
      name: "Checkbox",
      component: VCheckbox,
    },
  ],
});

export default router;
