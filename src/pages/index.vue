<template>





  <v-container class="app-wrapper-dashboard">




    <v-row gutters="10px"> <!--no-gutters-->

      <!--
<v-col cols="6">
  <div class="dashboard-card"><Charts01/></div>
  </v-col>
  -->

        <v-col lg="7" md="7" sm="12">
          <div class="highcharts-dark">
              <div class="embed-window" style="padding: 0px!important;">
                  <iframe src="https://www.m3orange.com/vantor-perm/design-system-poc/charts/_bar-01.html" frameBorder="0" style="padding: 0!important; background-color: transparent!important;"></iframe>
              </div>
          </div><!--highcharts-dark ends-->
      </v-col>

      <v-col lg="5" md="5" sm="12">
        <div class="dashboard-card map-tools-adjust map-for-dashboard-card">
          <ComponentMapTools/>
        </div>

      </v-col>


                  <v-col lg="4" md="6" sm="12">
      <CompAccordion/> 

      </v-col>



      <v-col lg="4" md="6" sm="12">
          <CompCardHubProduct style="margin-bottom: 20px;"/>
          <CompMonitoringCard/>
      </v-col>

      <v-col lg="4" md="6" sm="12">
        <div class="dashboard-card">
        <CompForm/>
        </div>
      </v-col>
      



            <v-col lg="4" md="6" sm="12">
      <CompLogin/>
      </v-col>



      <v-col lg="4" md="6" sm="12">
        <div class="dashboard-card box-in-box">
        <CompDatePicker/>
        </div>
      </v-col>
    </v-row>




  </v-container>



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
