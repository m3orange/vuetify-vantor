<template>
  <v-table class="table-orders">
    <thead>
      <tr>
        <th>
          Name
        </th>
        <th>Status</th>
        <th>Creation Date</th>
        <th>Product Type</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td class="order-name">{{ item.name }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.type }}</td>
        <td>

<div class="action-buttons-area">
  <v-btn class="action-icons"
  icon="mdi-tray-arrow-down" size="medium"></v-btn>
  <v-btn class="action-icons"
  icon="mdi-dots-vertical" size="medium"></v-btn>
</div>

        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style>
  .v-table > .v-table__wrapper > table > tbody > tr > th,
  .v-table > .v-table__wrapper > table > thead > tr > th,
  .v-table > .v-table__wrapper > table > tfoot > tr > th{
    font-family: var(--font-everett-bold);
    color: rgba(255,255,255,0.5)!important;
        font-size: 14px;
  }

  .v-table > .v-table__wrapper > table > tbody{
    font-size: 16px!important;
    font-family: var(--font-inter);
    font-size: 20px;
    color: #FFF!important;
  }

  .order-name{
    font-size: 16px;
        font-family: var(--font-everett-bold);

  }

.action-icons{

}

.action-buttons-area{
  display: flex;
  flex-direction: row;
  gap: 10px;

}

</style>

<script setup>
  import { ref } from 'vue'

  const desserts = ref([
    {
      name: 'Order A',
      status: 'Fulfilled',
      date:'2025-08-01',
      type: 'Vivid Standard 30cm HD',
    },
    {
      name: 'Order A',
      status: 'Fulfilled',
      date:'2025-08-01',
      type: 'Vivid Standard 30cm HD',
    },
    {
      name: 'Order A',
      status: 'Fulfilled',
      date:'2025-08-01',
      type: 'Vivid Standard 30cm HD',
    },
    {
      name: 'Order A',
      status: 'Fulfilled',
      date:'2025-08-01',
      type: 'Vivid Standard 30cm HD',
    },
    {
      name: 'Order A',
      status: 'Fulfilled',
      date:'2025-08-01',
      type: 'Vivid Standard 30cm HD',
    },
  ])
</script>
