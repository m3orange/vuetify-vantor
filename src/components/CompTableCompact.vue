<template>


  <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left table-header">Name</th>
        <th class="text-left table-header">Status</th>
        <th class="text-left table-header">Credits</th>
        <!-- <th class="text-left table-header">Creation Date</th> -->
        <th class="text-left table-header">Product Type</th>
        <th class="text-left table-header">Actions</th>
      </tr>
    </thead>
    <tbody>


      <tr>
        <td>Order</td>
        <td>
          <div class="status-pill-02"><v-icon icon="mdi-circle" size="10px"></v-icon>In Progress</div>
      </td>
        <td class="cell-align-right">3,255.39</td>
        <!-- <td>2025-09-05 13:45:14</td> -->
        <td>Precision3D True Ortho</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order</td>
        <td>
          <div class="status-pill-02"><v-icon icon="mdi-circle" size="10px"></v-icon>In Progress</div>
      </td>
        <td class="cell-align-right">888.39</td>
        <!-- <td>2025-09-05 13:45:14</td> -->
        <td>Vivid Standard 15cm</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order</td>
        <td>
          <div class="status-pill-01"><v-icon icon="mdi-circle" size="10px"></v-icon>Fulfilled</div>
      </td>
        <td class="cell-align-right">4,255.39</td>
        <!-- <td>2025-09-05 13:45:14</td> -->
        <td>Object Detection</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order</td>
        <td>
          <div class="status-pill-03"><v-icon icon="mdi-circle" size="10px"></v-icon>Unfulfilled</div>
      </td>
        <td class="cell-align-right">8,255.39</td>
        <!-- <td>2025-09-05 13:45:14</td> -->
        <td>Vivid Standard 30cm</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order</td>
        <td>
          <div class="status-pill-01"><v-icon icon="mdi-circle" size="10px"></v-icon>Fulfilled</div>
      </td>
        <td class="cell-align-right">555.23</td>
        <!-- <td>2025-09-05 13:45:14</td> -->
        <td>Online Imagery</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order</td>
        <td>
          <div class="status-pill-01"><v-icon icon="mdi-circle" size="10px"></v-icon>Fulfilled</div>
      </td>
        <td class="cell-align-right">6,293.39</td>
        <!-- <td>2025-09-05 13:45:14</td> -->
        <td>Object Detection</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
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

.v-table{
  font-size: 13px!important;
  padding: 20px!important;
}

td, th{
  padding: 0px 8px!important;
}

.status-pill-01{ background-color: rgba(133,212,96,0.3);}

.status-pill-01 .v-icon{ color:rgba(133,212,96,1) ;}


.status-pill-02{ background-color: rgba(234,223,0,0.3);}
.status-pill-02 .v-icon{ color:rgba(234,223,0,1) ;}

.status-pill-03{ background-color: rgba(206,0,0,0.6);}
.status-pill-03 .v-icon{ color:rgba(206,0,0,1) ;}

.status-pill-01, .status-pill-02, .status-pill-03{
  padding: 6px 14px 5px 10px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  max-width: fit-content;
  font-size: 13px!Important;
  font-weight: 600;

}

.status-pill-01 .v-icon,
.status-pill-02 .v-icon,
.status-pill-03 .v-icon{
  margin-right: 10px;
}

.table-header{
  font-weight: 600!important;
  color: var(--vantor-teal);
}

.embed-container{

  margin: 0px;
  padding: 0px;
  max-width: fit-content!important;
  height: auto;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
}





</style>
<script setup>

</script>