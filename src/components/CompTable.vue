<template>


  <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left table-header">Name</th>
        <th class="text-left table-header">Status</th>
        <th class="text-left table-header">Credits</th>
        <th class="text-left table-header">Creation Date</th>
        <th class="text-left table-header">Product Type</th>
        <th class="text-left table-header">Actions</th>
      </tr>
    </thead>
    <tbody>


      <tr>
        <td>Order Name</td>
        <td>
          <div class="status-pill-02"><v-icon icon="mdi-circle" size="10px"></v-icon>In Progress</div>
      </td>
        <td>132255.39</td>
        <td>2025-09-05 13:45:14</td>
        <td>Precision3D True Ortho</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order Name</td>
        <td>
          <div class="status-pill-02"><v-icon icon="mdi-circle" size="10px"></v-icon>In Progress</div>
      </td>
        <td>888.39</td>
        <td>2025-09-05 13:45:14</td>
        <td>Vivid Standard 15cm HD</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order Name</td>
        <td>
          <div class="status-pill-01"><v-icon icon="mdi-circle" size="10px"></v-icon>Fulfilled</div>
      </td>
        <td>132255.39</td>
        <td>2025-09-05 13:45:14</td>
        <td>Object Detection</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order Name</td>
        <td>
          <div class="status-pill-03"><v-icon icon="mdi-circle" size="10px"></v-icon>Unfulfilled</div>
      </td>
        <td>132255.39</td>
        <td>2025-09-05 13:45:14</td>
        <td>Vivid Standard 30cm HD</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order Name</td>
        <td>
          <div class="status-pill-01"><v-icon icon="mdi-circle" size="10px"></v-icon>Fulfilled</div>
      </td>
        <td>555.23</td>
        <td>2025-09-05 13:45:14</td>
        <td>Online Imagery</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order Name</td>
        <td>
          <div class="status-pill-01"><v-icon icon="mdi-circle" size="10px"></v-icon>Fulfilled</div>
      </td>
        <td>18293.39</td>
        <td>2025-09-05 13:45:14</td>
        <td>Object Detection</td>
        <td>
          <div class="order-actions">
            <v-icon icon="mdi-tray-arrow-down" size="small"></v-icon>
            <v-icon icon="mdi-dots-vertical" size="small"></v-icon>
          </div>
        </td>
      </tr>
      <tr>
        <td>Order Name</td>
        <td>
          <div class="status-pill-03"><v-icon icon="mdi-circle" size="10px"></v-icon>Unfulfilled</div>
      </td>
        <td>18293.39</td>
        <td>2025-09-05 13:45:14</td>
        <td>Online Imagery</td>
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

.status-pill-01{ background-color: rgba(133,212,96,0.3);}

.status-pill-01 .v-icon{ color:rgba(133,212,96,1) ;}


.status-pill-02{ background-color: rgba(234,223,0,0.3);}
.status-pill-02 .v-icon{ color:rgba(234,223,0,1) ;}

.status-pill-03{ background-color: rgba(206,0,0,0.6);}
.status-pill-03 .v-icon{ color:rgba(206,0,0,1) ;}

.status-pill-01, .status-pill-02, .status-pill-03{
  padding: 5px 20px 5px 15px;
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





</style>
<script setup>

</script>