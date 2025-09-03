<template>


  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list>
          <v-list-item
            prepend-avatar="@/assets/images/nav-bar/nav-logo-purple.png"
          >
            <template v-slot:append>
              <v-btn
                icon="mdi-chevron-left"
                variant="text"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

<v-list density="compact" nav>


<!--  v-list-item  -->        
  <div class="v-list-item v-list-item--link v-list-item--nav v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--square v-list-item--variant-text vantor-nav-links" tabindex="-2" aria-selected="false">
    <span class="v-list-item__overlay"></span>
    <span class="v-list-item__underlay"></span>
    <div class="v-list-item__prepend"><!---->
      <i class="v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" density="default">
        <div class="nav-icon">
          <img src="@/assets/images/nav-bar/nav-icon-01.png"/>
        </div>
      </i>
      <div class="v-list-item__spacer"></div>
    </div>
    <div class="v-list-item__content" data-no-activator="">
        <div class="v-list-item-title">Imagery</div><!----><!---->
    </div><!---->
  </div>
  <!--  v-list-item  -->        

  <!--  v-list-item  -->        
  <div class="v-list-item v-list-item--link v-list-item--nav v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--square v-list-item--variant-text vantor-nav-links" tabindex="-2" aria-selected="false">
    <span class="v-list-item__overlay"></span>
    <span class="v-list-item__underlay"></span>
    <div class="v-list-item__prepend"><!---->
      <i class="v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" density="default">
        <div class="nav-icon">
          <img src="@/assets/images/nav-bar/nav-icon-02.png"/>
        </div>
      </i>
      <div class="v-list-item__spacer"></div>
    </div>
    <div class="v-list-item__content" data-no-activator="">
        <div class="v-list-item-title">Vivid</div><!----><!---->
    </div><!---->
  </div>
  <!--  v-list-item  --> 

<!--  v-list-item  -->        
  <div class="v-list-item v-list-item--link v-list-item--nav v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--square v-list-item--variant-text vantor-nav-links" tabindex="-2" aria-selected="false">
    <span class="v-list-item__overlay"></span>
    <span class="v-list-item__underlay"></span>
    <div class="v-list-item__prepend"><!---->
      <i class="v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" density="default">
        <div class="nav-icon">
          <img src="@/assets/images/nav-bar/nav-icon-03.png"/>
        </div>
      </i>
      <div class="v-list-item__spacer"></div>
    </div>
    <div class="v-list-item__content" data-no-activator="">
        <div class="v-list-item-title">Areas</div><!----><!---->
    </div><!---->
  </div>
  <!--  v-list-item  --> 

<!--  v-list-item  -->        
  <div class="v-list-item v-list-item--link v-list-item--nav v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--square v-list-item--variant-text vantor-nav-links" tabindex="-2" aria-selected="false">
    <span class="v-list-item__overlay"></span>
    <span class="v-list-item__underlay"></span>
    <div class="v-list-item__prepend"><!---->
      <i class="v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" density="default">
        <div class="nav-icon">
          <img src="@/assets/images/nav-bar/nav-icon-04.png"/>
        </div>
      </i>
      <div class="v-list-item__spacer"></div>
    </div>
    <div class="v-list-item__content" data-no-activator="">
        <div class="v-list-item-title">Tasking</div><!----><!---->
    </div><!---->
  </div>
  <!--  v-list-item  --> 

  <!--  v-list-item  -->        
  <div class="v-list-item v-list-item--link v-list-item--nav v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--square v-list-item--variant-text vantor-nav-links" tabindex="-2" aria-selected="false">
    <span class="v-list-item__overlay"></span>
    <span class="v-list-item__underlay"></span>
    <div class="v-list-item__prepend"><!---->
      <i class="v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" density="default">
        <div class="nav-icon">
          <img src="@/assets/images/nav-bar/nav-icon-05.png"/>
        </div>
      </i>
      <div class="v-list-item__spacer"></div>
    </div>
    <div class="v-list-item__content" data-no-activator="">
        <div class="v-list-item-title">Orders</div><!----><!---->
    </div><!---->
  </div>
  <!--  v-list-item  --> 

        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>


</template>

<style>
</style>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(true)
  const rail = ref(true)
  
</script>


