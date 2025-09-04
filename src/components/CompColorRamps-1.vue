<template>



<v-select
  :items="items"
  label="Select an item"
  v-model="selectedItem"
>
  <template v-slot:item="{ item }" class="panel-item">
    <v-list-item-avatar>
      <div class="panel-image">
        <v-img :src="item.raw.image"></v-img>
      </div>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ item.raw.text }}</v-list-item-title>
    </v-list-item-content>
  </template>
</v-select>


</template>

<style>

.panel-item, .v-list-item-content,
.v-list-item-avatar{

}

.panel-image img{
    background-color: blue!important;
  border: 1px solid red;
  width: 60px;
  height: 60px;
}

</style>

<script setup>
  const items = [
    { text: 'Option 1', value: 1, image: './src/assets/images/map-tools/tools-annot-01.png' },
    { text: 'Option 2', value: 2, image: './src/assets/images/map-tools/tools-annot-02.png' },
        { text: 'Option 3', value: 3, image: './src/assets/images/map-tools/tools-annot-03.png' },
            { text: 'Option 4', value: 4, image: './src/assets/images/map-tools/tools-annot-04.png' },
    // ... more items
  ]
</script>

