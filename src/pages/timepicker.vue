<template>
  <v-container>


<div class="wrapper">
    <v-row>
    <v-col>

      <h2>Time Picker</h2>
      <v-time-picker
      color="green-lighten-1"
      ></v-time-picker>

      <div class="color-swatch" style="margin-top: 25px;">
<h4>Primary | #06CFFF</h4>
      </div> 

            <div class="color-swatch-2">
<h4>Secondary | #4F94EC</h4>
      </div> 
    </v-col>
  </v-row>
</div>

<div class="wrapper">
  <v-row>
    <v-col lg="5" md="6" sm="12">
      <a href="https://vuetifyjs.com/en/components/avatars/#usage" target="_blank">
      Documentation in Vuetify</a>
    <img src="@/assets/images/fpo-time-picker-1.jpg" class="fpo"/>
    </v-col>

      <v-col lg="5" md="6" sm="4">
        <a href="https://m3.material.io/components/time-pickers/specs#48179859-4512-449e-9cbd-ddb6f7851ee7" target="_blank">
        Documentation in Material</a>
      <img src="@/assets/images/fpo-time-picker-2.jpg" class="fpo"/>
    </v-col>
  </v-row>




  <!-- <v-col cols="6">
  <h2 class="text-pink ">Tertiary</h2>
  <v-time-picker
    color="pink"
  ></v-time-picker>
  </v-col> -->

</div>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const time = ref('11:15')
  const timeStep = ref('10:10')

  const allowedHours = v => v % 2
  const allowedMinutes = v => v >= 10 && v <= 50
  const allowedStep = m => m % 10 === 0
</script>

<style>



.text-pink {
    color: #4F94EC!important /* Setting temporary value for a Vantor tertiary. Adding to time picker. */
}

.bg-pink {
    background-color: #4F94EC!important /* Setting temporary value for a Vantor tertiary. Adding to time picker. */
}

.text-green-lighten-1{
  color:  #06CFFF !important; /* Setting temporary value for a Vantor primary. Adding to time picker. */
}

.btn__overlay{
    background-color: #06CFFF!important /* Setting temporary value for a Vantor primary. Adding to time picker. */
}

.bg-green-lighten-1 {
    background-color: #06CFFF !important;
}

.v-time-picker-controls__ampm .text-green-lighten-1{
  color:  #4F94EC!important; 
  /* color: #39B790!important; */
}
/* 
.v-time-picker-controls__time--with-ampm__btn
 {
    color:  #06CFFF  !important;
} */  

.wrapper{

  margin: 40px 0 0 0;
  padding: 80px;
  background-color: rgba(255,255,255,1);
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: center;
}

.fpo{
  max-width: 100%;
}

.color-swatch h4,
.color-swatch-2 h4{
  padding: 5px 10px;
  color: #FFFFFF;
  width: fit-content;
}
.color-swatch h4
{
    background-color: #06CFFF!important;
}




.color-swatch-2 h4
{
  background-color: #4F94EC!important;
}

</style>
