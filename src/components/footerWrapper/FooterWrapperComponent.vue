<template>
  <v-footer class="pt-7" padless color="rgb(239 239 239 / 90%)">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <div class="d-flex justify-center mb-3">
            <v-img
              src="/images/logo.svg"
              style="filter: grayscale(1)"
              max-width="120"
            />
          </div>
          <p class="text-caption font-weight-bold">
            متن درباره ما در این قسمت قرار گیرد. متن درباره ما در این قسمت قرار
            گیرد. متن درباره ما در این قسمت قرار گیرد. متن درباره ما در این قسمت
            قرار گیرد.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="4" v-for="n in 3" :key="n">
              <p class="redColor text-center">لینک سریع</p>
              <div class="d-flex flex-column aling-start linkWrapper">
                <span>لینک سریع</span>
                <span>لینک سریع</span>
                <span>لینک سریع</span>
                <span>لینک سریع</span>
                <span>لینک سریع</span>
                <span>لینک سریع</span>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3">
          <div class="socialWrapper">
            <p class="redColor">شبکه های اجتماعی</p>
            <div>
              <v-btn icon>
                <v-icon large>mdi-instagram </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon large>mdi-whatsapp </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon large>mdi-twitter </v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-9" justify="center" align="center">
      <div class="redColor text-caption">
        copyright @shop 2022. All rights reserved.
      </div>
      </v-row>
    </v-container>
    
  </v-footer>
</template>
<style scoped>
.linkWrapper span {
  color: #6d6e71;
}
.socialWrapper > div > * {
  color: #e47e7a !important;
}
</style>
