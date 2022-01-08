<template>
  <div class="my-12">
    <h2 class="text-h4 mb-8 text-center">دسته بندی محصولات</h2>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="9">
        <v-row justify="space-between">
          <v-col
            v-for="(category, index) in categoriesItems"
            :key="index"
            cols="12"
            sm="6"
            md="3"
            class="d-flex justify-center"
          >
            <div class="productCategoryStyle">
              <v-img max-width="44" max-height="42" :src="category.imageSrc" />
              {{ image(category) }}
              <p class="text-h5 mt-4">{{ category.name }}</p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import mainDataMixin from "@/mixins/main/mainDataMixin.js";
export default {
  name: "CategorieProducts",
  mixins: [mainDataMixin],
  data() {
    return {};
  },
  methods: {
    image(value) {
      console.log(value.imageSrc);
    },
  },
};
</script>
<style scoped>
.productCategoryStyle {
  width: 194px;
  height: 163px;
  background: #ffffff;
  box-shadow: 0px 24px 50px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>