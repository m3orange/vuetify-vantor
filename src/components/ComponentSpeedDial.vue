<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-speed-dial
    location="top right"
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <div class="speed-dial-placement">
        <v-fab
          v-bind="activatorProps"
          size="large"
          icon="$vuetify"
        ></v-fab>
      </div>

    </template>

    <v-btn key="1" icon="$success"></v-btn>
    <v-btn key="2" icon="$info"></v-btn>
    <v-btn key="3" icon="$warning"></v-btn>
    <v-btn key="4" icon="$error"></v-btn>
  </v-speed-dial>
</template>

<style>
</style>

<script setup lang="ts">

</script>


