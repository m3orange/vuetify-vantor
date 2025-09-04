<template>
  <v-row justify="center">
    <v-col cols="auto">
      <v-radio-group
        v-model="color"
        hide-details
        inline
      >
        <v-radio
          color="primary"
          label="primary"
          value="primary"
        ></v-radio>

                <v-radio
          color="secondary"
          label="secondary"
          value="secondary"
        ></v-radio>

        <v-radio
          color="tertiary"
          label="tertiary"
          value="tertiary"
        ></v-radio>

      </v-radio-group>
    </v-col>

  </v-row>
  
  <v-row justify="center">

    <v-col
      v-for="(variant, i) in variants"
      :key="i"
      cols="12"
      md="3"
    >
      <v-card
        :color="color"
        :variant="variant"
        class="mx-auto"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              {{ variant }}
            </div>
            <div class="text-h6 mb-1">
              Headline
            </div>
            <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn>
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  import { ref } from 'vue'

  const variants = ['flat', 'tonal', 'outlined']
  const color = ref('indigo')
</script>

<style>


</style>


