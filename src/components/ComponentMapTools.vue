<template>

<div class="dial-locator">
  <div class="tool-bar">
<!-- Button #1-->
    <v-speed-dial
      location="bottom left"
      transition="fade-transition"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab v-bind="activatorProps" size="medium" variant="flat">
              <img src="@/assets/images/map-tools/tool-btn-01a.png"/>
                    <v-tooltip activator="parent" location="top">Add an Annotation</v-tooltip>
        </v-fab>
      </template>

      <v-btn key="1" class="panel-drawer">
        <div class="panel-content">
          <v-row>

          <div class="panel-title">Add an Annotation</div>

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
                <div class="panel-links">
                  <img src="@/assets/images/map-tools/tools-annot-05.png"/>Grid
                </div>
                <div class="panel-links">
                  <img src="@/assets/images/map-tools/tools-annot-06.png"/>Military Symbol
                </div>
                <div class="panel-links">
                  <img src="@/assets/images/map-tools/tools-annot-07.png"/>Basic Symbol
                </div>

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
<!-- Button #1-->

<!-- Divider -->
    <v-fab size="medium" variant="flat">
          <img src="@/assets/images/map-tools/divider.png"/>
    </v-fab>
<!-- Divider -->

<!-- Button #2-->
    <v-speed-dial
      location="bottom left"
      transition="fade-transition"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab v-bind="activatorProps" size="medium" variant="flat">
              <img src="@/assets/images/map-tools/tool-btn-02a.png"/>
              <v-tooltip activator="parent" location="top">Add an Area</v-tooltip>
        </v-fab>
      </template>

      <v-btn key="1" class="panel-drawer">
      <div class="panel-content">
      <v-row>

      <div class="panel-title">Create an Area</div>

      </v-row>
      <v-row>
        <v-col cols="6">
          <div class="links-left">
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-area-01b.png"/>Use Viewport
            </div>
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-area-02.png"/>Draw Area
            </div>
            <div class="panel-links">
              <img src="@/assets/images/map-tools/tools-area-03.png"/>Polyline
            </div>
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
<!-- Button #2-->

<!-- Divider -->
    <v-fab size="medium" variant="flat">
          <img src="@/assets/images/map-tools/divider.png"/>
    </v-fab>
<!-- Divider -->


<!-- Button #3-->
    <v-speed-dial
      location="bottom left"
      transition="fade-transition"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab v-bind="activatorProps" size="medium" variant="flat">
              <img src="@/assets/images/map-tools/tool-btn-03a.png"/>
              <v-tooltip activator="parent" location="top">Measure Distance</v-tooltip>
        </v-fab>
      </template>

    </v-speed-dial>
<!-- Button #3-->

<!-- Divider -->
    <v-fab size="medium" variant="flat">
          <img src="@/assets/images/map-tools/divider.png"/>
    </v-fab>
<!-- Divider -->
 
<!-- Button #4-->
    <v-speed-dial
      location="bottom left"
      transition="fade-transition"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab v-bind="activatorProps" size="medium" variant="flat">
              <img src="@/assets/images/map-tools/tool-btn-04b.png"/>
        </v-fab>
      </template>

 

    </v-speed-dial>
<!-- Button #4-->

  </div>
</div>

</template>



<style scoped>


.v-btn--variant-elevated, .v-btn--variant-flat{
  background-color: none!important;
}

.tool-bar {
      background-color: #212121;
    /* background-color: teal; */
  padding: 6px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  border: 1px solid #2d2d2d;

}

.vfab-divider{
  width: 16px!important;
  margin: 0px 10px;
  padding: 2px 0px;
}


.v-btn--variant-elevated, .v-btn--variant-flat{
  background-color: #1D1D1D;
}

.v-btn__overlay,.v-btn__underlay  {
    background-color: none!important;
    border-radius: inherit;
    opacity: 0;
    transition: unset!important;
    height: fit-content;
      border: 5px solid green!important;
}

.v-btn:hover,
.v-btn:focus{
  /* background-color: rgba(6,207,255,0.2)!important; */
  background-color: none!important;
   width: fit-content!important;
     padding: 0px!important;
     /* border: 4px solid yellow; */
}

.v-fab, .v-btn{
    width: fit-content!important;
      padding: 0px!important;
}

.v-fab .v-btn--variant-elevated{
  width: fit-content!important;
  /* border: 1px solid red; */
  padding: 0px!important;
}

.v-btn.v-btn--density-default
{
    padding: 0px!important;
    margin: 0px!important;
}

.v-tooltip{
  border: 1px solid orange!important;
}

</style>


<script>

</script>




