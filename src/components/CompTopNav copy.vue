<template>
  <div class="header-bar">



    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="menu-hamburger">
          <v-icon color="var(--vantor-purple)" icon="mdi-menu" size="large" style="font-size: 30px;"></v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <router-link :to="item.route" style="text-decoration: none; color: inherit;">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>

  </div>
</template>

<style>

.header-bar{
  width: 100%;
  height: 60px;
  position: absolute;
  background-color: #222;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.v-overlay__content{
  background-color: #222;
}

.menu-hamburger{
   padding: 20px 10px;
}

</style>

<script setup lang="ts">
  const menuItems = [
        { text: 'Home', route: '/' },
        { text: 'Checkbox', route: '/checkbox' },
        { text: 'Radio Button', route: '/radiobutton' },
        { text: 'Color Ramps', route: '/colorramps' },
                { text: 'Accordion', route: '/accordion' },
{ text: 'Date Picker', route: '/datepicker' },
{ text: 'Form', route: '/form' },
{ text: 'Login', route: '/login' },
{ text: 'Map Tools', route: '/maptools' },
{ text: 'Sidebar', route: '/navdrawer' },
{ text: 'Hub Card', route: '/cardhubproduct' },
      ]

</script>


