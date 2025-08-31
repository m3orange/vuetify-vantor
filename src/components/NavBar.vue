<template>
  <div class="nav-wrapper">
    <nav class="top-nav">
       <div class="logo-area">
          <v-img 
          class="logo"
          src="@/assets/vantor_logo_horizontal_white.svg"/>
       </div>
      <RouterLink class="links" to="/">Home</RouterLink>
      <RouterLink class="links" to="/checkbox">Checkbox</RouterLink>
      <RouterLink class="links" to="/radiobutton">Radio Button</RouterLink>
      <RouterLink class="links" to="/navdrawern">Sidebar Drawer</RouterLink>
      <RouterLink class="links" to="/cardstats">Cards > Stats</RouterLink>
      <RouterLink class="links" to="/card">Cards > Grid</RouterLink>
    </nav>

   </div>
</template>

<style>
</style>

<script setup lang="ts">

</script>