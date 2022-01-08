<template>
  <div class="my-12">
    <h2 class="text-h4 mb-8 text-center">دسته بندی محصولات</h2>
    <div>
      <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item v-for="(item, index) in sliderCakeItems" :key="index">
          <div style="position: relative">
            <div v-if="item.discount" class="discount whiteColor">
              تخفیف <br> 20%
            </div>
            <v-card class="ma-4 rounded-xl" height="240" width="240">
              <v-row
                justify="center"
                align="center"
                class="flex-column pt-4 fill-height"
              >
                <v-img
                  max-width="130"
                  max-height="130"
                  src="/images/sliderImage.svg"
                />
                <div class="text-h6">
                  <span>{{item.type}}</span>
                  <span class="redColor">#65232</span>
                </div>
                <div class="text-caption muteColor">دسته بندی: {{item.category}}</div>
              </v-row>
            </v-card>
            <div class="sliderCost pl-4">
              <div class="sale pr-3">
                <v-icon color="white">mdi-plus-circle</v-icon>
                <span class="whiteColor mr-1">خرید</span>
              </div>
              <span class="whiteColor"> 25.000.000 </span>
            </div>
          </div>
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>
<script>
import mainDataMixin from "@/mixins/main/mainDataMixin.js";
export default {
  name: "BuyProducts",
  mixins: [mainDataMixin],
  data() {
    return {
      model: null,
    };
  },
};
</script>

<style scoped>
.sliderCost {
  position: absolute;
  max-width: 240px;
  height: 35px;
  width: 200px;
  bottom: 0px;
  right: 36px;
  border-radius: 24px;
  background: #e47e7a;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sale{
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 0 24px 24px 0;
  background-color: #00000020;
}
.discount{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  background: #e47e7a;
 left: 0;
 z-index: 2;
 display: flex;
 justify-content: center;
 align-items: center;
}
</style>