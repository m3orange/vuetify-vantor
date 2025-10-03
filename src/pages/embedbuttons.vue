<template>
  <div class="embed-container">
    <v-row class="each-component" style="width: 650px;justify-content: center; align-items: center;">
      <v-btn density="default" size="x-large" variant="outlined" color="#06CFFF"
        class="form-button buttons-for-movies forced-font">Primary</v-btn>
      <v-btn density="default" size="x-large" variant="outlined" color="#B2B2B2"
        class="form-button buttons-for-movies forced-font"
        style="background-color: rgba(178, 178, 178, 0.1)">Secondary</v-btn>
      <v-btn density="default" size="x-large" variant="outlined" color="#4F94EC"
        class="form-button buttons-for-movies forced-font"
        style="background-color: rgba(79, 148, 236, 0.1); margin-right: 0px!important;">Tertiary</v-btn>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
  //
</script>

<style>

h2{
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  padding-bottom: 10px;
  width: 100%;
}


.v-btn{
  text-transform: unset!important;
  letter-spacing: 0!important;
}

  .each-component{
    margin-bottom: 300px;
    padding: 50px;
  }


  .buttons-for-movies{
    text-transform: unset; font-weight: 600; letter-spacing: 0.5px;
    background-color: rgba(6,207,255,0.1)!important;
    font-family: "Everett Regular", 'Everett Regular', Everett Regular, Helvetica, Arial, sans-serif!important;
    margin-right: 40px;
    font-weight: 600!important;

        
  }

  .forced-font{
       font-family: "Everett Regular", 'Everett Regular', Everett Regular, Roboto Condensed, Helvetica, Arial, sans-serif!important;
  }

  .v-application__wrap{
display: flex!important;
height: 100%!important; 
width: 100%;
justify-content: center!important;
align-content: center!important;
background-color: #222!important;

}

.embed-container{
  background: none;
}




</style>
