<template>
  <v-container class="parent-container ">

  <v-row justify="center">

    <v-col v-for="(variant, i) in variants" :key="i" cols="12" md="4">
        <v-card :color="color" :variant="variant" class="mx-auto stats-card">
            <v-card-item>
              <div class="content-block">
                <div class="top-area">
                <div class="mb-1 stats-title">SQ KM Streamed</div>
                <div class="mb-1 stats-digit">+180<span class="super">%</span>
                </div>

                </div>
                <div class="stats-period inter-600">
                Last 30 Days
                </div>
              </div>
            </v-card-item>

        </v-card>
    </v-col>

    <v-col v-for="(variant, i) in variants" :key="i" cols="12" md="4">
        <v-card :color="color" :variant="variant" class="mx-auto stats-card">
            <v-card-item>
              <div class="content-block">
                <div class="top-area">
                <div class="mb-1 stats-title">SQ KM Streamed</div>
                <div class="mb-1 stats-digit">+180<span class="super">%</span>
                </div>

                </div>
                <div class="stats-period inter-600">
                Last 30 Days
                </div>
              </div>
            </v-card-item>

        </v-card>
    </v-col>

    <v-col v-for="(variant, i) in variants" :key="i" cols="12" md="4">
        <v-card :color="color" :variant="variant" class="mx-auto stats-card">
            <v-card-item>
              <div class="content-block">
                <div class="top-area">
                <div class="mb-1 stats-title">SQ KM Streamed</div>
                <div class="mb-1 stats-digit">+180<span class="super">%</span>
                </div>

                </div>
                <div class="stats-period inter-600">
                Last 30 Days
                </div>
              </div>
            </v-card-item>

        </v-card>
    </v-col>



  </v-row>

  </v-container>
</template>

<style>

.primary{
background-color: #06cfff !important;
}



</style>

<script setup>
  import { ref } from 'vue'

  const variants = ['outlined']
  const color = ref('gray')
  
</script>



