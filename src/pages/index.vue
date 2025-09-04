<template>
  <v-container class="app-wrapper-dashboard">
    <h1>Vantor Design System</h1>

    <v-row gutters="10px"> <!--no-gutters-->
        <v-col lg="auto" md="4" sm="6">
        <CompDatePicker/>
        </v-col>
        <v-col lg="4" md="3" sm="6">
            <CompAccordion/>
            <CompCardHubProduct/> 

        </v-col>
        <v-col lg="auto" md="4" sm="6">
        <div class="dashboard-card">
            <CompForm/>
        </div>
        </v-col>

    </v-row>

    <v-row style="">
      <v-col lg="5" md="6" sm="12">
        <CompLogin/>
      </v-col>

      <v-col lg="4" md="6" sm="12">
        <CompMonitoringCard/>
      </v-col>
    </v-row>

    <v-row gutters="10px">
      <v-col cols="8">
        <CompTable/>
      </v-col>
    </v-row>





    </v-container>
</template>

<style>


.v-container{
  max-width: 1600px!important;
}

</style>

<script lang="ts" setup>




</script>
