<template>
<div class="dashboard-card" style="padding: 24px; height: max-content!important;">
<h3 class="dashboard-card-title">Collections</h3>
  <v-expansion-panels v-model="activePanel">

<!--One Tab & Expandable-->
    <v-expansion-panel value="0">
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col class="d-flex justify-start" cols="12">
              General Parameters
            </v-col>
            <v-col
              class="text-grey"
              cols="8"
            >

            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,consectetur feugiat felis vel congue nulla lacinia ultricies. Etiam blandit aliquam consequat sit amet tempus.
      </v-expansion-panel-text>
    </v-expansion-panel>


<!--One Tab & Expandable-->
    <v-expansion-panel value="1">
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col class="d-flex justify-start" cols="12">
              Advanced Parameters
            </v-col>
            <v-col
              class="text-grey"
              cols="8"
            >

            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,consectetur feugiat felis vel congue nulla lacinia ultricies. Etiam blandit aliquam consequat sit amet tempus.
      </v-expansion-panel-text>
    </v-expansion-panel>

<!--One Tab & Expandable-->
    <v-expansion-panel value="settings">
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col class="d-flex justify-start" cols="12">
              Collection Availability
            </v-col>
            <v-col
              class="text-grey"
              cols="8"
            >

            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>

      <v-expansion-panel-text class="accordion-panel-content">
        <v-radio-group>
        <v-row>
          <v-col>
            <v-card
            variant="outlined"
            color="rgba(6,207,255,1)"

            >
            <v-card-title class="v-card-title-1">
            <div class="panel-content-above">

            <v-radio label="2025-12-20 - 2025-12-21"  color="primary" value="primary"></v-radio>
            </div>
            </v-card-title>
            <v-card-text>
            <div>CC: <img src="../assets/images/collections/collections-icons-01.png"/> 30% - 50%
            </div>
            <div>ONA: <img src="../assets/images/collections/collections-icons-02.png"/> 30°
            </div>
            </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card
              variant="outlined"
              color="rgba(255,255,255,0.5)"
            >
              <v-card-title class="v-card-title-2">
                <div class="">
                  <v-radio label="2025-12-24 - 2025-12-25" color="purple" value="purple"></v-radio>
                </div>
              </v-card-title>
              <v-card-text>
                <div>CC: <img src="../assets/images/collections/collections-icons-01.png"/> 10% - 100%
                </div>
                <div>ONA: <img src="../assets/images/collections/collections-icons-02.png"/> 30°
                </div>
              </v-card-text>
            </v-card>
          </v-col>

        </v-row>
</v-radio-group>
      </v-expansion-panel-text>
    </v-expansion-panel>


  </v-expansion-panels>
</div>


</template>

<script setup>
  import { ref } from 'vue'

const activePanel = ref('settings') // "settings" panel starts open


  const locations = ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France']

  const trip = ref({
    name: '',
    location: null,
    start: null,
    end: null,
  })
</script>
<style>

.v-expansion-panel--active{
  border-top: 1px solid rgba(255,255,255,0.2)!important;
}
.accordion-panel-content-blue-border {
  border: 1px solid var(--vantor-blue)!important;
}
.v-expansion-panel{
  background-color: var(--background);
}


.v-label{
  color: var(--on-surface);
  font-weight: 600;
}

.v-card-title-1{
    background-color: rgba(6, 207, 255, 0.15)!important;
    border-bottom: 1px solid rgba(6, 207, 255, 1);

}

.v-card-title-2{
    background-color: unset!important;
    border-bottom: 1px solid var(--on-surface)!important;
}

.v-card-title-1,
.v-card-title-2{
    padding: 10px 10px 10px 12px;

}

.v-expansion-panel__shadow{
  box-shadow: none!important;
}


/* 
.radio-01{
  color: var(--vantor-blue);
}

.radio-02{
  color: var(--on-surface);
} */


.v-expansion-panel{
  background-color: unset !important;
}

.v-card-text{
  color: var(--on-surface);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:5px 20px 5px 20px!important;

}


.v-card-text img{
  height: 16px!important;

  margin: 0 4px;
}

</style>