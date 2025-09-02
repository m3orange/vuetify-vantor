<template>




  <v-card
    class="mx-auto hub-product"
    max-width="388"
    hover
  >
    <v-card-item>
      <v-card-title class="justified">
        <img src="@/assets/images/hub/hub-sentry-icon.png"/>
        Maritime Sentry
        <v-btn size="small">Open</v-btn>
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
  background-color: #262626!important;
  border: 1px solid rgba(255,255,255,0.05)!important;
}

.hub-product:hover{
  background-color: #3c3c3c!important;

}

.v-card-title{
  display: flex!important;
      align-items: center;
  /* border: 1px solid white; */
  font-family: var(--font-everett)!important;
  font-weight: 700!important;
  color: #D1D1D1;
  gap: 20px;

}
.v-card-text{
  color: #B2B2B2!important ;
}

.v-btn{
  text-transform: unset!important;
   background-color: rgba(6,207,255,0.2)!important;
   border: 1px solid  #06CFFF!important;
   color: #06CFFF!important;
  
}


</style>


