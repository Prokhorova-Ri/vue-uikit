<script setup>
import { ref } from "vue";
import VTabs from "@/components/VTabs.vue";

const tabs = [
  { name: "About", label: "О проекте" },
  { name: "Vue", label: "Про Vue" },
  { name: "React", label: "Про React" },
];

const selectedTab = ref("About");
const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>

<template>
  <div>
    <h1 class="heading-1">Tabs</h1>
    <VTabs
      :names="tabs"
      label=""
      :selectedTab="selectedTab"
      @changeTab="changeTab"
    >
      <div v-if="selectedTab === 'About'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Amet consectetur
        adipiscing elit ut aliquam purus sit amet luctus. Nulla pellentesque
        dignissim enim sit amet venenatis urna. Mauris commodo quis imperdiet
        massa tincidunt nunc pulvinar sapien. Ornare quam viverra orci sagittis.
        Lorem sed risus ultricies tristique nulla aliquet enim. Orci nulla
        pellentesque dignissim enim sit amet. Turpis cursus in hac habitasse
        platea dictumst quisque sagittis. Ornare aenean euismod elementum nisi
        quis eleifend quam adipiscing. Pharetra vel turpis nunc eget lorem dolor
        sed viverra.
      </div>
      <div v-if="selectedTab === 'Vue'">
        JavaScript-фреймворк с открытым исходным кодом для создания
        пользовательских интерфейсов. Легко интегрируется в проекты с
        использованием других JavaScript-библиотек. Может функционировать как
        веб-фреймворк для разработки одностраничных приложений в реактивном
        стиле.
      </div>
      <div v-if="selectedTab === 'React'">
        JavaScript-библиотека с открытым исходным кодом для разработки
        пользовательских интерфейсов. React разрабатывается и поддерживается
        Facebook, Instagram и сообществом отдельных разработчиков и корпораций.
        React может использоваться для разработки одностраничных и мобильных
        приложений. Его цель — предоставить высокую скорость разработки,
        простоту и масштабируемость. В качестве библиотеки для разработки
        пользовательских интерфейсов React часто используется с другими
        библиотеками, такими как MobX, Redux и GraphQL.
      </div>
    </VTabs>
  </div>
</template>
