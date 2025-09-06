<template>

  <v-badge floating location="left center" :offset-x="-15" color="success" dot>
    Fulfilled
  </v-badge>

  <v-badge floating location="left center" :offset-x="-15" color="error" dot>
    Unfulfilled
  </v-badge>

  <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Status
        </th>
        <th class="text-left">
          Credits Charged
        </th>
        <th class="text-left">
          Creation Date
        </th>
        <th class="text-left">
          Product Type
        </th>

        <th class="text-left">
          Actions
        </th>

      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in orders"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        
        <td><img src="../assets/images/tables/{{ item.image }}"/></td>
        <td>{{ item.credits }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.type }}</td>
        <td>
          <div class="order-actions">
            <v-icon color="" icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon color="" icon="mdi-dots-vertical" size="small"></v-icon>
          </div>

        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<style>

.order-actions{
  display: flex;
  align-items: center;
  gap: 10px;
}

</style>
<script setup>
  import { ref } from 'vue'



  const orders = ref([

        {
      name: 'Order Name',
      image: "https://www.m3orange.com/vantor-fiexd/pill.png",
      credits: '0000.00',
      date: '2025-01-01 00:00:00',
      type: 'Vivid Standard',
    },
        {
      name: 'Order Name',
      thumbUrl: 'https://www.m3orange.com',
      credits: '0000.00',
      date: '2025-01-01 00:00:00',
      type: 'Vivid Standard',
    },
        {
      name: 'Order Name',
      image: '1.png',
      credits: '0000.00',
      date: '2025-01-01 00:00:00',
      type: 'Vivid Standard',
    },
    {
      name: 'Order Name',
      status: 'Fulfilled',
      credits: '0000.00',
      date: '2025-01-01 00:00:00',
      type: 'Vivid Standard',
    },
  ])
</script>