<template>
    <CompTopNav/>
  <v-container class="app-wrapper-dashboard">
    <h1>The Divine DS</h1>

    <v-row gutters="10px"> <!--no-gutters-->
        <v-col lg="auto" md="4" sm="6">
        <CompDatePicker/>
        </v-col>
        <v-col lg="auto" md="3" sm="6">
            <CompAccordion/> 


        </v-col>
        <v-col lg="auto" md="4" sm="6">
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



  <div name="embedform" id="embedform" class="embed-area">


      <v-row gutters="10px"> <!--no-gutters-->

          <v-col lg="4" md="4" sm="12">
            <div class="dashboard-card embed-window">
              <div class="orange-from-orange">Form to embed</div>
                <CompForm/>
            </div>
          </v-col>

      </v-row>

  </div>



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




</script>
