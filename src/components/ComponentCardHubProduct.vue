<template>
  <v-row justify="center">

  <div style="width: 100%;">
    <v-col cols="auto">
      <v-radio-group
        v-model="color"
        hide-details
        inline
      >

        <v-radio
          color="Primary"
          label="Primary"
          value="Primary"
        ></v-radio>

        <v-radio
          color="Secondary"
          label="Secondary"
          value="Secondary"
        ></v-radio>

          <v-radio
          color="Tertiary"
          label="Tertiary"
          value="Tertiary"
        ></v-radio>
      </v-radio-group>
    </v-col>

    </div>

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
  <v-row>
    <v-col>
      <v-btn>This is a button</v-btn>
    </v-col>

  </v-row>
</template>


<style>


</style>

<script setup>
  import { ref } from 'vue'

  const variants = ['elevated', 'flat', 'tonal', 'outlined']
  const color = ref('primary')
</script>


