

<template>

      <v-btn 
      density="default" 
      size="x-large" 
      variant="outlined" 
      color="v-theme-primary"
      class="btn-primary-outlined">
      Primary
      </v-btn>


      <v-btn 
      density="default" 
      size="x-large" 
      variant="outlined" 
      color="v-theme-secondary"
      class="btn-secondary-outlined">
      Secondary
      </v-btn>

      <v-btn 
      density="default" 
      size="x-large" 
      variant="outlined" 
      color="v-theme-tertiary"
      class="btn-tertiary-outlined">
      Tertiary
      </v-btn>

<!--Text Field-->

      <v-text-field 
      variant="outlined"
      persistent-placeholder
      ></v-text-field>



<!--Form-->

    <v-form class="tasking-form">
   
      <v-row no-gutters>
            <v-col class="d-flex justify-start dashboard-card-title" cols="12">
                  General Parameters
            </v-col>
      </v-row>
      <v-row>
            <v-col cols="12" sm="12">
                  <v-text-field variant="outlined" persistent-placeholder label="Order Name"></v-text-field>
            </v-col>
      </v-row>


      <v-row>
      <v-col cols="6" lg="6" md="12" sm="12">
            <v-text-field variant="outlined" persistent-placeholder label="Earliest Date">
            <div class="calendar-date-text">
                  <v-icon color="var(--v-theme-primary)" icon="mdi-calendar-outline" size="small"></v-icon>
            </div>
            </v-text-field>
      </v-col>


      <v-col cols="6" lg="6" md="12" sm="12">
            <v-text-field variant="outlined" persistent-placeholder label="Latest Date">
            <div class="calendar-date-text">
                  <v-icon color="var(--v-theme-primary)" icon="mdi-calendar-outline" size="small"></v-icon>
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
                              color="var(--v-theme-primary)"
                              width="100%"
                              ></v-range-slider>
                              <div class="slider-text"> 30 Maxº</div>
                        </v-text-field>
                  </div>
            </v-col>
      </v-row>



      <div class="d-flex flex-column">
            <v-row align="center" class="form-button-row">
                  <v-btn density="default" size="large" variant="outlined" color="var(--v-theme-secondary)" class="form-button">Cancel</v-btn>
                  <v-btn density="default" size="large" variant="flat" color="var(--v-theme-primary)" class="form-button">Submit</v-btn>
            </v-row>
      </div>
    </v-form>


</template>

<style>


.btn-primary-outlined{
      background-color: rgba(6,207,255,0.1)!important;
}

.btn-secondary-outlined{
      background-color: rgba(178, 178, 178, 0.1)!important;
}

.btn-secondary-outlined{
      background-color: rgba(79, 148, 236, 0.1)!important;
}


</style>