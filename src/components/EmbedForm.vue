<template>
    <div name="embedform" id="embedform" class="embed-area">
      <v-col lg="5" md="5" sm="12" class="embed-v-col">
        <div class="dashboard-card embed-window">
            <CompForm/>
        </div>
      </v-col>
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

.embed-area{
    padding: 30px;
    margin: 0px!important;
    margin-top: 0px!important;
    visibility: hidden;
}


.embed-area,
.turn-on{
      overflow: hidden; 
}

.embed-window{
  width: 500px !important;
  min-width: 500px!important;
}

.embed-v-col{
  display: flex;
  justify-content: center;
  align-content: center;
}

.embed-turn-on{
visibility: visible!important;
width: 100%!important;
height: 100vh!important;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


position: absolute!important;
left: 0!important;
top: 0!important;
/* background-color: antiquewhite; */
background-color: #222 !important;
z-index: 1000!important;
}




</style>

<script lang="ts" setup>
//
</script>
