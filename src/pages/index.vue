<template>
  <v-container class="app-wrapper-dashboard">
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
<v-col lg="5" md="6" sm="12">
<CompLogin/>
</v-col>

<v-col lg="4" md="6" sm="12">
Monitoring card goes here
</v-col>

<!-- <v-col lg="3" md="6" sm="12">
<div class="dashboard-card">
Another Card
</div>
</v-col> -->
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
