<template>
<div class="full-screen-with-map">
  <v-row style="height: 100vh;     justify-content: flex-start;">

      <div class="right-side-panel">
<div class="panel-content">
          <h4>Visualization Settings</h4>
        <h5>Road Change Visualization</h5>
        <h6>Change Vector Color</h6>


          <div class="button-row">

          <v-menu
            transition="slide-y-transition"
            flat
          >
            <template v-slot:activator="{ props }">
              <v-btn
                color="rgba(6,207,255,1)"
                v-bind="props"
                elevation="0"
                class="ramp-btn"
              >
                <img  src="../assets/images/color-ramps/ramp-button-01-@2x.png"/>
              </v-btn>
            </template>
            <v-list>
              <v-list-item class="ramp-panel">
                <v-list-item-title>
                                  <img  src="../assets/images/color-ramps/ramp-panel-01-nopadding@2x.png"/>

                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>



            <v-text-field size="x-small" density="compact" class="ramp-text-field"
            style="border: 1px solid rgba(255, 255, 255, 0.2) !important;">
              100%
            </v-text-field>

          </div>
          <v-container style="width: 100%;">
<v-row class="row-toggle">
<div class="row-toggle-text">
<h5>Toggle change vector</h5><a href="#">Fill</a>
</div>

    <v-switch
    hide-details
    inset
  ></v-switch>

</v-row>


          </v-container>
</div>

      </div>
      <div>
         <img  src="../assets/images/color-ramps/ramp-panel-mockup.png" style="width: 380px;"/>
      </div>

  </v-row>

</div>
</template>

<style>


.row-toggle{
  display: flex;
      justify-content: space-between;
}

.row-toggle-text{
  display: flex;
    flex-direction: row;
    gap: 10px;
        align-items: baseline;
}

.v-btn, v-btn--elevated, v-theme--dark v-btn--density-default, v-btn--size-default, v-btn--variant-elevated
{
  background-color: #262626!important;
  padding: 0px!important;
}
.panel-image img{
    background-color: blue!important;
  border: 1px solid red;
  width: 60px;
  height: 60px;
  overflow: hidden;
}

h1, h2, h3, h4, h5, h6{
  color: var(--on-surface);
}



.right-side-panel{
  background-color: var(--background);
  padding: 30px;
  width: 450px;
  height: 100%;
  min-width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  
}
  .panel-content{
    display: flex;
    flex-direction: column;
  }

.button-row{
  display: flex;
  height: 50px;
  gap: 10px;

}

.v-btn{
    border: 1px solid rgba(255,255,255,0.2)!important;
    width: 80%!important;
    height: 40px!important;

}

v-input__control{
    width: 100px!important;
    max-width: 100px!important;
}

.v-input,
.v-btn__content{
  background-color: rgba(255,255,255,0.02)!important;
  height: 40px!important;
  /* width: 10px!important; */
  border-radius: 4px!important;
  
}

.v-input{
    /* border: 1px solid rgba(255,255,255,0.2)!important; */
        width: 100px!important;
        max-width: 100px!important; /* Size of the input field next to the ramp button.*/
        background-color: unset;

}

.v-field__input{
  color: #B2B2B2!important;
  font-size: 14px!important;
  font-family: "Everett Regular",Helvetica, Arial, sans-serif;

  /* width: 50px!important; */
    /* border: 4px solid teal!important; */
}


.v-input--density-compact .v-field__input{
  display: flex;
  flex-direction: row;
      justify-content: center;
}

.ramp-btn{ 

  border: 0px;
  margin: 0px;
  padding: 0px;
}

.ramp-btn img{
  width: 100%!important; /* This is the size of the image inside the button. */
}


.v-btn--size-default,
.v-btn__content{
   /* 
    width: auto!important;
    This is the size of the ramp btn. Image width is 252px */
   height: 40px!important;
    padding: 10px;

}

.v-btn__content{

  border-radius: 4px;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

}

.v-menu > .v-overlay__content{
  background-color: #393939;
  padding: 0px!important;
  margin-top: 10px;
}

.ramp-panel img{
  width: 300px!important;
}

.v-menu > .v-overlay__content > .v-list{
  box-shadow: 0px!important;
}

.v-list-item{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{
  padding-inline: 0px!important;
  padding: 20px;
}

v-list v-theme--dark v-list--density-default v-list--one-line{
  box-shadow: none!important;
}



</style>

<script setup lang="ts">

  const menuItems = [
    { image: 'assets/color-ramps/ramp-panel-01@2x.png' },
      ]

</script>

