<template>
  <v-container class="app-wrapper-dashboard"> <!--bg-surface-variant-->
    <v-row> <!--no-gutters-->
        <v-col lg="4" md="6" sm="12" style="height: max-content!important;">
            <CompAccordion/>  
        </v-col>
        <v-col lg="5" md="6" sm="12">
            <div class="dashboard-card"><CompForm/></div>
        </v-col>
        <v-col lg="3" md="6" sm="12">
            <div class="dashboard-card">..</div>
        </v-col>
    </v-row>

<v-row style=""> <!--no-gutters-->
        <v-col lg="6" md="6" sm="12">
        <CompLogin/>
        </v-col>
</v-row>





    </v-container>
</template>

<style>

.app-wrapper-dashboard{
    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */


}

</style>

<script lang="ts" setup>

</script>
