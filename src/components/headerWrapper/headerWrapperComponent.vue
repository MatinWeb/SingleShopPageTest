<template>
  <div>
    <v-app-bar app color="#F2F2F2" flat hide-on-scroll>
      <v-container class="d-flex justify-space-between align-center">
        <div>
          <v-img src="/images/logo.svg" max-width="130" />
        </div>
        <v-spacer></v-spacer>
        <v-list
          v-if="$vuetify.breakpoint.mdAndUp"
          color="#F2F2F2"
          height="auto"
          class="py-0"
          flat
        >
          <v-list-item-group
            class="d-flex justify-space-between"
            v-model="selectedItem"
            color="#E47E7A"
          >
            <v-list-item v-for="(item, i) in headerItems" :key="i" :to="item.path" exact-active-class>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-spacer></v-spacer>
        <div>
          <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
          >
            <v-badge color="#E47E7A" dot offset-y="-1">
              <v-icon>mdi-cart-outline</v-icon>
            </v-badge>

            <span class="mr-2">کارت</span>
          </v-btn>
          <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
          >
            <v-icon>mdi-account-circle-outline</v-icon>
            <span class="mr-2">صفحه کاربری</span>
          </v-btn>
        </div>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          v-if="$vuetify.breakpoint.mdAndDown"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="red--text text--lighten-2" 
        >
          <v-list-item v-for="(item, i) in headerItems" :key="i" :to="item.path">
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import headerDataMixin from "@/mixins/header/headerDataMixin.js";
export default {
  name: "headerWrapperComponent",
  mixins: [headerDataMixin],
  data() {
    return {
      selectedItem: 0,
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>