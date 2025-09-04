<template>
  <div class="embed-page">
    <v-container class="">

      <a name="section-id"style="color: white;">Go to form</a>
        <a href="http://localhost:3000#embedform" style="color: white;">Go to form</a>

    <div class="embed-container-around">
      <iframe 
      scrolling="no"
      src="https://vuetify-vantor-ovc08nax1-vantor-ds.vercel.app/#embedform"
      class="embed-iframe">
      </iframe>
    </div><!--embed-container-around-->
<a href="#div_id">jump link</a>
Then make


    </v-container>
  </div>
</template>

<style>


  .embed-page{
    margin: 0px;
  }

  .embed-container-around{
    border: 2px solid #D5CC5A; 
    overflow: hidden; 
    margin: 15px auto; 
    max-width: 575px;
  }

  .embed-iframe{
    border: 0px none; 
    margin-left: 0px; 
    height: 812px; 
    margin-top:-100px;
    width: 650px;

  }

</style>

<script lang="ts" setup>
//
</script>
