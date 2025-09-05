<template>

  <v-card
    height="100vh"
    image="@/assets/images/app-map-bg-2300x1300.png"
    border
    flat
  >
    <template v-slot:text>
      <v-toolbar rounded="lg" border floating>
        <div class="px-4">
          <v-btn
            color="medium-emphasis"
            density="comfortable"
            icon="mdi-crosshairs-gps"
          ></v-btn>
        </div>


      </v-toolbar>



      <v-toolbar rounded="lg" border floating>
        <div class="px-4">
    <v-speed-dial
      location="bottom left"
      transition="fade-transition"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab v-bind="activatorProps" size="medium">
              <img src="@/assets/images/map-tools/tool-btn-01a.png"/>
        </v-fab>
      </template>

      <v-btn key="1" class="panel-drawer">
      <div class="panel-content">
      <v-row>

      <div class="panel-title">Add an Area</div>

      </v-row>
      <v-row>
        <v-col cols="6">
          <div class="links-left">
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-annot-01.png"/>Text
            </div>
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-annot-02.png"/>Polygon
            </div>
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-annot-03.png"/>Polyline
            </div>
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-annot-04.png"/>Magnify
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="links-right">
            <div class="panel-links">Text</div>
            <div class="panel-links">Polygon</div>
            <div class="panel-links">Polyline</div>
            <div class="panel-links">Magnify</div>

          </div>
        </v-col>
      </v-row>
      </div>
      
      </v-btn>

      <!--
      <v-btn key="2" icon="$info"></v-btn>
      <v-btn key="3" icon="$warning"></v-btn>
      <v-btn key="4" icon="$error"></v-btn>
      --->
    </v-speed-dial>
        </div>

        <template v-slot:append>
    <v-speed-dial
      location="bottom left"
      transition="fade-transition"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab v-bind="activatorProps" size="medium">
              <img src="@/assets/images/map-tools/tool-btn-01a.png"/>
        </v-fab>
      </template>

      <v-btn key="1" class="panel-drawer">
      <div class="panel-content">
      <v-row>

      <div class="panel-title">Add an Area</div>

      </v-row>
      <v-row>
        <v-col cols="6">
          <div class="links-left">
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-annot-01.png"/>Text
            </div>
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-annot-02.png"/>Polygon
            </div>
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-annot-03.png"/>Polyline
            </div>
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-annot-04.png"/>Magnify
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="links-right">
            <div class="panel-links">Text</div>
            <div class="panel-links">Polygon</div>
            <div class="panel-links">Polyline</div>
            <div class="panel-links">Magnify</div>

          </div>
        </v-col>
      </v-row>
      </div>
      
      </v-btn>

      <!--
      <v-btn key="2" icon="$info"></v-btn>
      <v-btn key="3" icon="$warning"></v-btn>
      <v-btn key="4" icon="$error"></v-btn>
      --->
    </v-speed-dial>
        </template>
      </v-toolbar>


    </template>
    
  </v-card>


</template>

<script lang="ts" setup>
  //
</script>


