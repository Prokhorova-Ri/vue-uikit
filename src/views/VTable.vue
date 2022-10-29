<script setup>
import { ref, computed } from "vue";
import VBaseTable from "@/components/Table/VBaseTable.vue";
import VTableRow from "@/components/Table/VTableRow.vue";
import VTableColumn from "@/components/Table/VTableColumn.vue";
import VButton from "@/components/VButton.vue";

const tableHeads = ["Id", "Author", "Title", "Cover", ""];
const tableSizeColumns = "50px 1fr 2fr 150px 140px";

const sortField = ref("id");
const typeSort = ref("asc");

const books = ref([
  {
    id: 1,
    author: "Dmitry Glukhovsky",
    title: "Metro 2033",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg",
    bg: "#A5AFFB",
  },
  {
    id: 7,
    author: "James Clear",
    title: "Atomic Habits: An Easy",
    image:
      "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg",
    bg: "#7DDFC3",
  },
  {
    id: 5,
    author: "J. K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    bg: "#FFC7A6",
  },
]);

const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === "desc") modifier = -1;
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
    return 0;
  });
});

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === "asc") {
      typeSort.value = "desc";
    } else {
      typeSort.value = "asc";
    }
  } else {
    sortField.value = name;
  }
};
</script>

<template>
  <div>
    <h1 class="heading-1">Table</h1>
    <span>Sort Field: {{ sortField }}</span> <br />
    <span>Type Sort: {{ typeSort }}</span> <br />
    <VBaseTable
      :head="tableHeads"
      :columnTemplates="tableSizeColumns"
      @sorting="setSort"
    >
      <VTableRow
        v-for="book in booksSorting"
        :key="book.id"
        :columnTemplates="tableSizeColumns"
        :bgRow="book.bg"
      >
        <VTableColumn :columnTitle="tableHeads[0]">{{ book.id }}</VTableColumn>
        <VTableColumn :columnTitle="tableHeads[1]">{{
          book.author
        }}</VTableColumn>
        <VTableColumn :columnTitle="tableHeads[2]">{{
          book.title
        }}</VTableColumn>
        <VTableColumn :image="true" :srcImage="book.image" />
        <VTableColumn><VButton label="Read Online" /></VTableColumn>
      </VTableRow>
    </VBaseTable>
  </div>
</template>
