<template>
<v-row>
  <v-col cols="8">
    <v-form ref="form" class="form-canvas">
   

<v-row>
  <v-col cols="12" sm="12">
    <v-text-field variant="outlined" persistent-placeholder label="Order Name"></v-text-field>
  </v-col>
</v-row>

<!-- <v-row>
    <v-col cols="6" sm="6">
    <v-select
      label="Earliest Date"
      persistent-placeholder
      variant="outlined" 
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>
    </v-col>
    <v-col cols="6" sm="6">
    <v-select
      label="Latest Date"
      persistent-placeholder
      variant="outlined" 
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>
    </v-col>
</v-row> -->

<v-row>
    <v-col cols="6" sm="6">
      <v-text-field variant="outlined" persistent-placeholder label="Earliest Date">
        <div class="form-slider">
          <div class="calendar-date-text">
                <v-icon color="primary" icon="mdi-calendar-outline" size="small"></v-icon>
          2024-04-13
          </div>
        </div>
      </v-text-field>
    </v-col>


    <v-col cols="6" sm="6">
      <v-text-field variant="outlined" persistent-placeholder label="Latest Date">
        <div class="form-slider">
          <div class="calendar-date-text">
                <v-icon color="primary" icon="mdi-calendar-outline" size="small"></v-icon>
          2024-12-07
          </div>
        </div>
      </v-text-field>
    </v-col>
</v-row>




<v-row>
  <v-col cols="12" sm="12">
    <div class="form-slider">
    <v-text-field variant="outlined" density="compact" persistent-placeholder label="Off-Nadir Angle">
     <div class="slider-text"> Minº 0</div>
      <v-range-slider
        v-model="value"
        step="10"
        thumb-label="never"
        color="blue"
        width="100%"
      ></v-range-slider>
      <div class="slider-text"> 30 Maxº</div>
    </v-text-field>
    </div>
  </v-col>
</v-row>



      <div class="d-flex flex-column">



    <v-row align="center" class="button-row">




        <v-btn density="default" size="large" variant="outlined" color="tertiary" class="form-button">Cancel</v-btn>
        <v-btn density="default" size="large" variant="flat" color="primary" class="form-button">Submit</v-btn>


    </v-row>


      </div>
    </v-form>
  </v-col>
</v-row>
    
    




</template>

<style>

.form-canvas{
  padding: 30px;
}

.form-slider{
  z-index: 100;
}
.slider-text{
  min-width: fit-content;
}

.form-slider .v-field__input {
    display: flex!important;
    grid-area: control;
    flex-direction: row!important;
    flex-wrap: nowrap!important;
    min-height: fit-content!important;
    gap: 25px;
}

.v-field .v-input{
  height: 40px;
}

.form-slider .v-field{
  /* border: 3px solid red!important; */
  min-height: fit-content;
}

.v-field{
  height: 50px;
}
.v-slider-thumb__label {
    /* background: rgba(var(--v-theme-surface-variant), 1); */
    background: #444444!important;
    color: rgb(var(--v-theme-on-surface-variant));
}

.calendar-date-text{
  font-family: var(--font-everett);
  font-weight: 600;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.button-row{
  display: flex;
      justify-content: space-evenly;
      margin: 10px 0 0 0;
}

.form-button{
  text-transform: unset!important;
  font-family: var(--font-everett-bold);
  letter-spacing: 0px;
}


</style>


<script setup>
  import { ref } from 'vue'

  const value = ref([0, 50])
</script>
