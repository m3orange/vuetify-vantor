<template>
  <div class="embed-wrapper"">





  <v-row>    
    <v-col cols="6">
      <h3>Primary Button</h3>
<v-btn density="default" size="large" variant="flat" color="primary" class="form-button bg-primary" style="background-color: rgba(6,207,255,1)!important; color: var(--background)!important; text-transform: unset; font-weight: 600; letter-spacing: 0.5px;">Submit</v-btn>
    </v-col>
    <v-col cols="6">

  <h3>Secondary Button</h3>
      <v-btn density="default" size="large" variant="outlined" color="tertiary" class="form-button" style="text-transform: unset; font-weight: 600; letter-spacing: 0.5px;">Cancel</v-btn>

    </v-col>
  </v-row>




<div class="component-area">
<h3>Input Field</h3>

</div>

<div class="component-area">
<v-row>    
<v-col cols="6">
<h3>Form</h3>
<CompForm/>

</v-col>
</v-row>
  

</div>


<div class="component-area">
<h3>Table</h3>



</div>





  </div>
</template>

<style>

.component-area{

  padding: 40px 40px 60px 40px;
  margin: 0 0 20px 0;
  border-radius: 10px;
}



.one-component {
  margin-bottom: 100px;
}


</style>

<script lang="ts" setup>

</script>
