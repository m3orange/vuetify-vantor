<template>

  <v-card class="mx-auto hub-product" hover>
    <v-card-item>
      <v-card-title class="justified">
        <div style="display: flex; align-items: center;">
          <img src="@/assets/images/hub/hub-sentry-icon.png" style="margin-right: 20px;"/>
          Maritime Sentry
        </div>
        <v-btn size="small" style="
          text-transform: unset!important;
          background-color: rgba(6,207,255,0.2)!important;
          border: 1px solid  #06CFFF!important;
          color: #06CFFF!important;"
         >Open</v-btn>
      </v-card-title>

      <!-- <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle> -->
    </v-card-item>

    <v-card-text>
      Monitor the vessels that are important to you with optional automatic analysis
    </v-card-text>
  </v-card>

</template>

<script setup>

</script>

<style>

.hub-product {
      background-color: var(--background) !important;
    border: 1px solid var(--border-color) !important;
  /* margin-top: 20px; */
  aspect-ratio: 1/0.3;
  padding-top: 10px;
}

.hub-product:hover{
  background-color: #3c3c3c!important;

}

.v-card-title{
  display: flex!important;
  justify-content: space-between;
      align-items: center;
  /* border: 1px solid white; */
  font-family: var(--font-everett)!important;
  font-weight: 700!important;
  color: #D1D1D1;
  padding-bottom: 0px;
  margin-bottom: 0px;
  gap: 20px;


}
.v-card-text{
  color: #B2B2B2!important ;
}

.v-card-item{
  margin-bottom: 0px!important;
  padding-bottom: 5px;

}

</style>


