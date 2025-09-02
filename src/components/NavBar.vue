<template>
  <div class="nav-wrapper">
    <nav class="top-nav">
       <div class="logo-area">
          <v-img 
          class="logo"
          src="@/assets/images/logos/vantor_logo_horizontal_white.svg"/>
       </div>


<v-row>
   <v-col cols="12" style="margin-bottom: 0px;">
      <RouterLink class="links" to="/">Home</RouterLink>
      <RouterLink class="links" to="/checkbox">Checkbox</RouterLink>
      <RouterLink class="links" to="/radiobutton">Radio Button</RouterLink>
      <RouterLink class="links" to="/cardstats">Stats Card</RouterLink>
      <RouterLink class="links" to="/card">Card Grid</RouterLink>
      <RouterLink class="links" to="/codeblock">Code Block</RouterLink>
   </v-col>

     <v-col cols="12" style="margin-top: 0px;">
            <RouterLink class="links" to="/navdrawer">Sidebar Drawer</RouterLink>
      <RouterLink class="links" to="/maptools">Map Tools</RouterLink>
      <RouterLink class="links" to="/cardhubproduct">Hub Card</RouterLink>
            <RouterLink class="links" to="/various">Various</RouterLink>
   </v-col>
</v-row>


    </nav>

   </div>
</template>

<style>
</style>

<script setup lang="ts">

</script>