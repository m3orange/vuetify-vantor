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
      <tr>
        <td class="order-name">Order A</td>
        <td>
          <div class="status-pill">
           <v-icon icon="mdi-circle" size="medium" color="var(--status-green-icon)" class="status-pill-circle"></v-icon>Fulfilled</div>
        </td>
        <td>2025-08-19 13:59:19</td>
        <td>Vivid Standard 30cm HD</td>
        <td>
        <div class="action-buttons-area">
          <v-btn>
        
        <v-icon icon="mdi-tray-arrow-down" size="small" class="action-icons" color="var(--status-green-icon)" ></v-icon>
        
        </v-btn>
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

  .status-pill{
    padding: 4px 20px;
    width: fit-content;
    border-radius: 100px;
    background-color: var(--status-green-bg)!important;
    font-size: 14px;

  }

   .status-pill-circle{
    margin-right: 10px;

        /* caret-color: var(--status-green-icon)!important; */
   }

.action-icons{
  width: 30px;
}

.action-buttons-area{
  display: flex;
  flex-direction: row;
  gap: 20px;


}

.action-buttons-area .v-btn{
  border: 1px solid green;
  padding: 6px;
  border-radius: 100%;
  width: 60px!important;
  height: 60px!important;

}

.v-btn.v-btn--density-default{

}



</style>

<script setup>
</script>
