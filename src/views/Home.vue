<template>
  <div>
    <v-container class="landing_container">
      <mainPageComponent />
    </v-container>
  </div>
</template>

<script>
import mainPageComponent from "@/components/mainWrapper/mainPageComponent";

export default {
  name: "Home",

  components: {
    mainPageComponent,
  },
};
</script>

<style scoped>

</style>
