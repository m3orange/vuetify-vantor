<template>
<div class="full-screen">
  <v-row style="height: 100vh;     justify-content: flex-start;">

      <div class="right-side-panel">
        <h3>Visualization Settings</h3>
        <h4>Road Change Visualization</h4>
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
                <img src="../assets/images/color-ramps/ramp-button-01.png"/>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>



            <v-text-field size="x-small" density="compact">
              100%
            </v-text-field>

          </div>

      </div>

  </v-row>

</div>
</template>

<style>

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

.full-screen{
  margin: 0px;
  padding: 0px;
  background-color: #262626;
  height: 100vh;
  background: url(../assets/images/app-map-bg.png);
  background-size: cover;
  overflow-x: hidden;
}

.right-side-panel{
  background-color: var(--background);
  padding: 30px;
  width: 33%;
  height: 100%;
  min-width: 400px;
}

.button-row{
  display: flex;
  height: 50px;
  gap: 10px;

}

.v-btn{
  border: 1px solid #393939!important;
    /* border: 1px solid orange!important; */
    height: 40px!important;

}

.v-input,
.v-btn__content{
  background-color: rgba(255,255,255,0.02)!important;
  height: 40px!important;
  border-radius: 4px!important;
  border: 1px solid #393939!important;
}

.v-field__input{
  color: #B2B2B2!important;
  font-size: 14px!important;
  font-family: "Everett Regular",Helvetica, Arial, sans-serif;
}


.ramp-btn{

  border: 0px;
  margin: 0px;
  padding: 0px;
}


.v-btn--size-default,
.v-btn__content{
   width: 252px!important;
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

</style>

<script setup>
  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
</script>

