<template>
  <v-app>
    <HeaderWrapperComponent />
    <v-main>
      <div class="socialsFixedWrapper">
        <v-btn icon>
          <v-icon> mdi-instagram </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon> mdi-facebook </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon> mdi-twitter </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon> mdi-linkedin </v-icon>
        </v-btn>
      </div>
      <router-view />
    </v-main>
    <FooterWrapperComponent />
  </v-app>
</template>

<script>
import HeaderWrapperComponent from "@/components/headerWrapper/headerWrapperComponent.vue";
import FooterWrapperComponent from "@/components/footerWrapper/FooterWrapperComponent.vue";
export default {
  name: "App",
  components: {
    HeaderWrapperComponent,
    FooterWrapperComponent,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.socialsFixedWrapper {
  position: absolute;
  top: calc(57% - 100px);
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.socialsFixedWrapper > * {
  color: #66656d57 !important;
  margin-bottom: 24px;
}
</style>
