<template>

  <v-container class="app-wrapper-dashboard">
    <v-row gutters="10px"> <!--no-gutters-->
        <v-col lg="4" md="6" sm="12">
          <div class="dashboard-card box-in-box">
        <CompDatePicker/>
        </div>
        </v-col>
        <v-col lg="4" md="6" sm="12">
            <CompAccordion/> 

        </v-col>
        <v-col lg="4" md="6" sm="12">
        <div class="dashboard-card">
            <CompForm/>
        </div>
        </v-col>

    </v-row>

    <v-row style=""> <!--no-gutters-->
      <v-col lg="4" md="6" sm="12">
      <CompLogin/>
      </v-col>

      <v-col lg="4" md="6" sm="12">
      <CompMonitoringCard/>
      </v-col>

      <v-col lg="4" md="6" sm="12">
      <ComponentMapTools/>
      </v-col>

    </v-row>
  </v-container>



<EmbedForm/>




<CompTopNav/>
</template>

<style>




.v-container{
  max-width: 1600px!important;
}

.embed-area{
    border: 1px solid orange!important;
    padding: 30px;
    margin: 0px!important;
    margin-top: 0px!important;



}

/* .embed-inside-layer-above{
    width: 100%!important;
    height: 100%!important;
    position: absolute;
    left: 0;
    top: 0;
  background-color: #222 !important;
  z-index: 1000;
} */



</style>

<script lang="ts" setup>
import CompTopNav from '../components/CompTopNav.vue';



</script>
