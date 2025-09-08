<template>
    <div class="embed-wrapper" style="  background-color: #303030;">
    
      <div class="view-wrapper">

  <v-row class="each-component" style="width: 650px;">    
    <!-- <h2>Buttons</h2> -->


    <v-col cols="12">

      <v-btn density="default" size="x-large" variant="outlined" color="#06CFFF" class="form-button buttons-for-movies forced-font">Primary</v-btn>





      <v-btn density="default" size="x-large" variant="outlined" color="#B2B2B2" class="form-button buttons-for-movies forced-font" style="background-color: rgba(178, 178, 178, 0.1)">Secondary</v-btn>
            <v-btn density="default" size="x-large" variant="outlined" color="#4F94EC" class="form-button buttons-for-movies forced-font" style="background-color: rgba(79, 148, 236, 0.1);">Tertiary</v-btn>
    </v-col>
  </v-row>


<v-row class="each-component" style="width: 500px;">    
  <!-- <h2>Input Field</h2> -->
<v-col cols="12">

    <v-text-field placeholder="Enter something here" variant="outlined" persistent-placeholder label="Input Field"></v-text-field>



</v-col>
</v-row>   




<v-row class="each-component" style="width: 600px;">    
  <!-- <h2>Form</h2> -->
<v-col cols="12">

<CompForm/>
</v-col>
</v-row>   



<v-row class="each-component">    
  <h2>Table</h2>
<v-col cols="6">

Add table
</v-col>
</v-row>  



</div><!--View wrapper-->
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
.view-wrapper{
  margin: 100px;


}

  .each-component{
    margin-bottom: 300px;
    padding: 50px;
    border: 1px solid rgba(255,255,255,0.05);
  }


  .buttons-for-movies{
text-transform: unset; font-weight: 600; letter-spacing: 0.5px;
background-color: rgba(6,207,255,0.1);
font-family: "Everett Regular", 'Everett Regular', Everett Regular, Helvetica, Arial, sans-serif!important;
margin-right: 40px;
        
  }

  .forced-font{
       font-family: "Everett Regular", 'Everett Regular', Everett Regular, Roboto Condensed, Helvetica, Arial, sans-serif!important;

  }
</style>
