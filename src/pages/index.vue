<template>

<div class="dashboard-bg-mesh-01a">


  <v-container class="app-wrapper-dashboard ">


<v-row class="hero-header">
<v-col lg="7" md="6" sm="12" class="hero-left-col">
  <div class="logo-block">  
    <img src="../assets/images/logos/atlas-logo-bw.png"/>

  </div>
  <div class="text-block">
    <div class="hero-title">Atlas Design System</div>
    <div class="hero-paragraph">
        Atlas is the design system for Vantor’s products and user experiences. This repository contains Atlas’s documentation, and contains design guidelines and usage, product specifications, and working code with live previews.
    </div>

  </div>




</v-col>

<v-col lg="3" md="6" sm="12">

  <div class="hero-button">
    <!-- <v-btn
        class="mb-8"
        color="rgba(6,207,255,1)"
        size="x-large"
        variant="outlined"
        density="default"
        outline
        block>
    View Documentation
      </v-btn> -->
          <v-btn
        class="mb-8"
        color="white"
        size="large"
        variant="flat"
        density="default"
        outline
        block>
    View Documentation
      </v-btn>
  </div>



</v-col>




</v-row>

<v-row>Color Ramps</v-row>

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


</div>

</template>

<style>


.dashboard-bg-mesh-01a{
    background: url(../assets/images/dashboard/dashboard-bg-mesh-01d.svg);
  background-size: 800px;
  background-repeat: no-repeat;
  background-position-x: 120% ;
  background-position-y: 100px ;
  left: 0px;
    /* filter: sepia(100%) hue-rotate(90deg) saturate(200%);  */
    /* Example filter chain */
}


.dashboard-bg-image-01{
  background: url(../assets/images/dashboard/dashboard-bg-02.png);

  background-size: 50%;
  background-repeat: no-repeat;
  background-position-x: 110% ;
  background-position-y: 100px ;
  left: 0px;
}

.dashboard-bg-image-03{
  background: url(../assets/images/dashboard/dashboard-bg-03.png);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position-x: 110% ;
  background-position-y: 100px ;
  left: 0px;
}

.dashboard-bg-image-06{
    background-image: url(../assets/images/dashboard/dashboard-bg-06.png);
    background-position-x: 150%;
    background-position-y: 150px ;
  
}



.hero-header{
  height: 40vh;
  padding: 80px 0;


}

.hero-header.v-row{
    display: flex;
  align-items: center;
    justify-content: space-between;
}

.hero-left-col{
  display: flex;
  flex-direction: row;
  gap: 20px;

}

.logo-block{

}

.text-block{
  padding: 20px 0 0 0;;
}

.logo-block, .text-block{
  border: 1px solid rgba(255,255,255,0.2);
  padding: 10px;
}

.hero-title{
font-size: 42px; 
font-family: var(--font-everett-bold);
line-height: 1em; 
margin-bottom: 20px;
padding-right: 30px;
}

.hero-paragraph{
  font-size: 20px;
  font-family: var(--font-everett);
line-height: 1.3em; 
}

.hero-button .v-btn{
padding: 35px 30px;

  /* border: 1px solid white; */
  border-radius: 8px;
  margin-bottom: 0px;

}


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
