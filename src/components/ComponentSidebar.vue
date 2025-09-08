<template>

  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        permanent
        @click="rail = false"
      >
        <v-list>
          <v-list-item prepend-avatar="@/assets/images/nav-bar/nav-logo-purple.png"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>

        <v-list-item href="https://dark-chill-08695284.figma.site/button" target="_blank" class="sidebar-links">
        <v-list-item-title>Button</v-list-item-title>
        </v-list-item>

        <v-list-item href="https://dark-chill-08695284.figma.site/input" target="_blank" class="sidebar-links">
        <v-list-item-title>Input Field</v-list-item-title>
        </v-list-item>

        <v-list-item href="https://dark-chill-08695284.figma.site/form" target="_blank" class="sidebar-links">
        <v-list-item-title>Form</v-list-item-title>
        </v-list-item>

        <v-list-item href="https://dark-chill-08695284.figma.site/table" target="_blank" class="sidebar-links">
        <v-list-item-title>Table</v-list-item-title>
        </v-list-item>

        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>

</template>

<style>
.sidebar-links{

}

.v-list-item--nav .v-list-item-title{
  padding: 15px 5px;
    font-family: var(--font-everett)!important;
  font-size: 16px!important;
  font-weight: 00!important;
}
</style>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(true)
  const rail = ref(true)
  
</script>


