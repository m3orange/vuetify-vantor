<template>


<div class="dashboard-card" style="padding: 0px!important;">

        <div class="monitoring-card">

            <v-row>
                <div class="monitoring-title-area">
                    <div class="title-left dashboard-card-title">
                    Airfield Monitoring 01
                    </div>

                    <div class="title-right">
                    <img style="margin-right: 10px;" src="@/assets/images/monitoring/monitoring-icon-01.png"/>
                    <img src="@/assets/images/monitoring/monitoring-icon-02.png"/>

                    </div>
                </div>

            </v-row>
                <v-row class="airport-image">
                    <img src="@/assets/images/monitoring/monitoring-image.png"/>

                </v-row>
            <v-row>
            <div class="bottom-images">
                <img style="margin-right: 10px;" src="@/assets/images/monitoring/monitoring-icon-03.png"/>
                <img src="@/assets/images/monitoring/monitoring-icon-04.png"/>
                </div>

            </v-row>

        </div>



</div>

</template>

<style>

.monitoring-card{

      background-color:var(--background)!important;
  border: 1px solid var(--border-color)!important;
  border-radius: 8px!important;
  padding: 40px!important;
  /* min-width: 200px; */
}

.monitoring-title-area{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
}

.airport-image{
    background-image: url(../assets/images/monitoring/monitoring-image.png);
    background-repeat: no;
    background-size: cover;
    height: 300px;
    height: 300px;
}

.title-left{
    font-family: var(--font-everett);
    font-size: 16px;
    color: var(--on-surface);
  
}

.title-right{
  
}

.bottom-images{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-top: 20px;
}

</style>

<script lang="ts" setup>

</script>
