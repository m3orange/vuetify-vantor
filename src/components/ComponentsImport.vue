<template>
  <v-container class="parent-container">
    <div>
      <v-img
        class="mb-4"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="mb-8 text-center">

        <h1 class="text-h2 font-weight-bold">Vuetify</h1>
      </div>








<v-row style="margin: 50px 0;">

  <v-col cols="6">

<v-btn-group></v-btn-group>

  <div class="area">

    <h1>Button</h1>
    <!-- <v-btn class="button-outline">Order</v-btn> -->

    <button type="button" class="v-btn v-theme--light v-btn--size-default button-outline"><span class="v-btn__overlay"></span>
      <span class="v-btn__underlay"></span>
      <span class="v-btn__content" data-no-activator="">Vantor</span>
    </button>


  </div>

  <div class="area">
        <h1>Radio Button</h1>
    <v-radio-group>
      <v-radio label="Radio One" value="one"></v-radio>
      <v-radio label="Radio Two" value="two"></v-radio>
      <v-radio label="Radio Three" value="three"></v-radio>
    </v-radio-group>
  </div>

    <div class="area">
          <h1>Checkbox</h1>
    <v-checkbox label="Checkbox"></v-checkbox>
  </div>

  <div class="area">
    <h1>Input Fields</h1>
    <v-text-field label="Label" variant="underlined"></v-text-field>
  </div>

  <div class="area">
    <h1>Date Picker</h1>

    <v-row justify="space-around">
      <v-date-picker
        color="primary"
      ></v-date-picker>
    </v-row>

  </div>


</v-col>


</v-row>




      

      




    </div>
  </v-container>
</template>

<style>

.bg-primary{
  background-color: var(--vantor-teal)!important;
}

.v-application__wrap {
  background-color: #222!important;
}

:root {
  --vantor-teal: #06cfff;
  --font-everett: 'TWK Everett';
  --font-inter: 'Inter';
  --v-theme-primary: #FF7700!important;
      
}

body{
  font-family: var(--font-inter);
}

.parent-container{

  color: #FFFFFF;
}

h1, h2, h3, h4, h5, h6{
    color: #06cfff;
    margin-bottom: 20px;
    font-family: var(--font-everett);
    font-weight: 500;
}

.area{
  margin: 0 0 150px 0;
}

.v-btn.button-outline {
  font-size: 18px;
  font-weight: 500;
  font-family: 'TWK Everett';
  color: var(--vantor-teal);
  text-align: center;
  display: inline-block;
  padding: 12px 24px;
  background: none;
  text-transform: unset;
  border: 1px solid var(--vantor-teal);
  border-radius: 4px;
}

.v-btn.button-outline:hover{
  background-color: rgba(6, 207, 255, 0.10);
}
.v-selection-control__input > .v-icon{
 color: var(--vantor-teal);
}
</style>

<script setup lang="ts">

</script>


