<template>
  <v-row align="center" justify="center" dense>
    <v-col cols="12" md="6">

        <div class="monitoring-card">

            <v-row>
            <div class="monitoring-title-area">
                <div class="title-left">
                Airfield Monitoring 01
                </div>

                <div class="title-right">
                <img style="margin-right: 10px;" src="@/assets/images/monitoring/monitoring-icon-01.png"/>
                <img src="@/assets/images/monitoring/monitoring-icon-02.png"/>

                </div>
            </div>

            </v-row>
            <v-row>
                <img src="@/assets/images/monitoring/monitoring-image.png"/>

            </v-row>
            <v-row>
            <div class="bottom-images">
                <img style="margin-right: 10px;" src="@/assets/images/monitoring/monitoring-icon-03.png"/>
                <img src="@/assets/images/monitoring/monitoring-icon-04.png"/>
                </div>

            </v-row>

        </div>

    </v-col>
</v-row>
</template>

<style>

.monitoring-card{
    padding: 30px 40px;
    background-color: var(background);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    width: fit-content;
}

.monitoring-title-area{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
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
