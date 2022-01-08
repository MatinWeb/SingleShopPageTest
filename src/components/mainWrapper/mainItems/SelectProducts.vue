<template>
  <div class="rounded-xl selectCategoryWrapper">
    <div class="d-flex justify-start align-center flex-wrap" style="max-width: 400px">
      <p class="my-0 ml-3">انتخاب دسته بندی</p>
      <v-select
        item-value="name"
        hide-details
        v-model="categorySelected"
        :items="categoriesItems"
        label="انتخاب دسته بندی"
        dense
        solo
        rounded
        color="#E47E7A"
        item-color="red"
      >
        <template v-slot:selection="{ item }">
          <div>
            {{ item.name }}
          </div>
        </template>
        <template v-slot:item="{ item }">
          <span>
            {{ item.name }}
          </span>
        </template>
      </v-select>
    </div>
    <div class="mt-4 mt-sm-0">
      <v-text-field
        hide-details
        label="جستجو"
        solo
        rounded
        dense
        style="max-width: 230px"
        append-icon="mdi-magnify"
        color="#E47E7A"
      ></v-text-field>
    </div>
  </div>
</template>
<script>
import mainDataMixin from "@/mixins/main/mainDataMixin.js";
export default {
  name: "SelectProducts",
  mixins: [mainDataMixin],
  data() {
    return {
      categorySelected: null,
    };
  },
};
</script>

<style scoped>
.selectCategoryWrapper {
  background-color: #e5e5e5;
  padding: 18px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>