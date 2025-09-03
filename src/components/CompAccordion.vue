<template>
<div class="dashboard-card" style="padding: 24px;">
<h2>Collections</h2>
  <v-expansion-panels>

<!--One Tab & Expandable-->
    <v-expansion-panel>
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col class="d-flex justify-start" cols="4">
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
    <v-expansion-panel>
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col class="d-flex justify-start" cols="4">
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
    <v-expansion-panel>
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col class="d-flex justify-start" cols="4">
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

      </v-expansion-panel-text>
    </v-expansion-panel>





    

    <v-expansion-panel>
      <v-expansion-panel-title v-slot="{ expanded }">
        <v-row no-gutters>
          <v-col class="d-flex justify-start" cols="4">
            Start and end dates
          </v-col>
          <v-col
            class="text--secondary"
            cols="8"
          >
            <v-fade-transition leave-absolute>
              <span v-if="expanded">When do you want to travel?</span>
              <v-row
                v-else
                style="width: 100%"
                no-gutters
              >
                <v-col class="d-flex justify-start" cols="6">
                  Start date: {{ trip.start || 'Not set' }}
                </v-col>
                <v-col class="d-flex justify-start" cols="6">
                  End date: {{ trip.end || 'Not set' }}
                </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row
          justify="space-around"
          no-gutters
        >
          <v-col cols="3">
            <v-text-field
              v-model="trip.start"
              label="Start date"
              type="date"
            ></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field
              v-model="trip.end"
              label="End date"
              type="date"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</div>


</template>

<script setup>
  import { ref } from 'vue'

  const locations = ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France']

  const trip = ref({
    name: '',
    location: null,
    start: null,
    end: null,
  })
</script>
<style>
.accordion-panel-content-blue-border {
  border: 1px solid var(--vantor-blue)!important;
}
.v-expansion-panel{
  background-color: var(--background);
}
.panel-content-above{

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

.v-selection-control__input > .v-icon{

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
  padding:5px 30px 5px 30px!important;

}
.v-card-text img{
  height: 16px!important;

  margin: 0 4px;
}

</style>