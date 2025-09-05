<template>

  <v-container class="app-wrapper-dashboard">
    <v-row gutters="10px"> <!--no-gutters-->
        <v-col lg="4" md="6" sm="12">
          <div class="dashboard-card box-in-box">
        <CompDatePicker/>
        </div>
        </v-col>
        <v-col lg="4" md="6" sm="12">
          <div class="dashboard-card map-tools-adjust map-for-dashboard-card">
            <ComponentMapTools/>
          </div>
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
      <CompCardHubProduct/>
      </v-col>

      <v-col lg="4" md="6" sm="12">
      <CompAccordion/> 
      </v-col>

    </v-row>
  </v-container>



<EmbedForm/>




<CompTopNav/>
</template>

<style>

.dial-locator{
position: unset!important;
}


.v-container{
  max-width: 1600px!important;
}

.embed-area{
    border: 1px solid orange!important;
    padding: 30px;
    margin: 0px!important;
    margin-top: 0px!important;

}

.map-for-dashboard-card{
  margin: 0px;
  padding: 0px;
  background-color: #262626;
  background-image: url(../assets/images/app-map-bg-2300x1300.png)!important;
  background-repeat: no-repeat;
  overflow-x: hidden!important;
  overflow-y: hidden!important;

}

.map-tools-adjust{
  display: flex;
    justify-content: center;
    aspect-ratio: 1/0.8;
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
