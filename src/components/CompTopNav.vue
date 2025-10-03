<template>
  <div class="header-bar">



    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="menu-hamburger">
          <v-icon color="var(gray" icon="mdi-menu" size="large" style="font-size: 30px;"></v-icon>
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
  width: fit-content;
  height: 60px;
  bottom: 0px;
  right: 0px;
  position: fixed;
  /* background-color: #222; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
        z-index: 200!important;
}
.v-overlay__content{
  background-color: #222;
}

.menu-hamburger{
    padding: 20px 10px;
    display: flex;
    align-items: center;
      /* background-color: #111!important; */
            background-color: transparent!important;
      border: 0px;
      /* margin: 10px 12px 20px 0; */
      margin-right: 12px;
      margin-bottom: 10px;

}

.menu-hamburger:hover{
  background-color: #444 !important;
}

.menu-hamburger .v-icon{
  color: transparent!important;

}

.menu-hamburger:hover .v-icon{
  color: #fff!important;
}

.v-list{
  min-width: 200px!important;
}

.v-list-item--density-default{

    padding: 10px 30px!important;
    min-height: 36px!important;

}

.v-list-item-title{
  font-size: 14px!important;
}

</style>

<script setup lang="ts">

  const menuItems = [
    { text: 'Home', route: '/' },
    { text: 'Embed Button', route: '/embedbuttons' },
        { text: 'Embed Input', route: '/embedinput' },
    { text: 'Embed Form', route: '/embedform' },
    { text: 'Embed Table', route: '/embedtable' },
    { text: 'Checkbox', route: '/checkbox' },
    { text: 'Radio Button', route: '/radiobutton' },
    { text: 'Color Ramps', route: '/colorramps' },
    { text: 'Form', route: '/form' },
    { text: 'Map Tools', route: '/maptools' },
    { text: 'Sidebar', route: '/navdrawer' },

      ]

</script>
