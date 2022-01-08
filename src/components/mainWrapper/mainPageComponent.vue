<template>
  <div>
    <CategorieProducts />
    <SelectProducts />
    <BuyProducts />
    <AdvertisementProducts />
  </div>
</template>
<script>
import CategorieProducts from "@/components/mainWrapper/mainItems/CategorieProducts.vue";
import SelectProducts from "@/components/mainWrapper/mainItems/SelectProducts.vue";
import BuyProducts from "@/components/mainWrapper/mainItems/BuyProducts.vue";
import AdvertisementProducts from "@/components/mainWrapper/mainItems/AdvertisementProducts.vue";
export default {
  name: "mainPageComponent",
  components: {
    CategorieProducts,
    SelectProducts,
    BuyProducts,
    AdvertisementProducts
  },
};
</script>