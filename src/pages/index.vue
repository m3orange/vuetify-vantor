<template>

<div class="dashboard-bg-mesh-01">
<!--250910_1152-->

<CompTopNav/>




  <v-container class="app-wrapper-dashboard ">

<DashboardHeader/>


    <v-row gutters="10px"> 

      <v-col lg="4" md="6" sm="12">
        <CompAccordion/> 
      </v-col>
      <v-col lg="4" md="6" sm="12">
        <div class="dashboard-card map-tools-adjust map-for-dashboard-card" style="margin-bottom: 20px;">
          <ComponentMapTools/>
        </div>
      </v-col>

      <v-col lg="4" md="12" sm="12">
        <div class="dashboard-card box-in-box" style="padding-bottom: 10px!important;">
        <CompDatePicker/>
        </div>
        <CompCardHubProduct style="margin-top: 20px;"/>
        
      </v-col>


            <v-col lg="8" md="12" sm="12">
          <div class="highcharts-dark">
              <div class="embed-window" style="padding: 0px!important;">
                  <iframe src="https://www.m3orange.com/vantor-perm/design-system-poc/charts/_bar-01.html" frameBorder="0" style="padding: 0!important; background-color: transparent!important;"></iframe>
              </div>
          </div>
      </v-col>



      <v-col lg="4" md="6" sm="12">
        <div class="dashboard-card" style="padding: 30px 30px 40px 30px!important;">
        <CompForm/>
        </div>
  

      </v-col>

      <v-col lg="4" md="6" sm="12">
        <CompMonitoringCard/>
      </v-col>
      <v-col lg="8" md="12" sm="12">
        <div class="dashboard-card" style="background-color: #212121 !important;">
        <CompTable/>
        </div>
      </v-col>

      <!-- <v-col lg="7" md="7" sm="12">
          <div class="highcharts-dark">
              <div class="embed-window" style="padding: 0px!important;">
                  <iframe src="https://www.m3orange.com/vantor-perm/design-system-poc/charts/_bar-01.html" frameBorder="0" style="padding: 0!important; background-color: transparent!important;"></iframe>
              </div>
          </div>
      </v-col>-->

      <v-col lg="4" md="6" sm="12">
        <CompLogin/>
      </v-col>





    </v-row>

  </v-container><!--app-wrapper-dashboard-->


</div>


</template>

<style>



/* Classes specifically for the chart embedding */

.embed-window{
  /* border: 2px solid red;  */
  margin: 0; 
  padding: 0!important;
}


iframe{
  padding: 0px!important;
  margin: 0px!important;
    width: 100%; 
  min-height: 550px;
    overflow-x: hidden; 
  overflow-y: hidden; 
  border: 0px!important;
    /* padding: 0!important;
    background: none!important;
    background-color: none!important; */
}

/* Classes specifically for the chart embedding */



.dial-locator{
position: unset!important;
}


.v-container{
  max-width: 1600px!important;
}

.embed-area{

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
    aspect-ratio: 1/1.21;
}

/* 

.embed-inside-layer-above{
    width: 100%!important;
    height: 100%!important;
    position: absolute;
    left: 0;
    top: 0;
  background-color: #222 !important;
  z-index: 1000;
} */

.form-button-row{
  padding: 20px 0 5px 0!important;
}

</style>

<script lang="ts" setup>
import DashboardHeader from '../components/DashboardHeader.vue';


</script>
