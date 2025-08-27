<template>
  <v-container class="parent-container ">

    <v-row style="margin: 50px 0;">




      <v-col cols="8">


        <h3>Add brand image from Tomi's PDF</h3>

        <div class="area">

          <h2>Button</h2>
          <!-- <v-btn class="button-outline">Order</v-btn> -->

          <h4 class="gray-headers">Native</h4>
          <v-btn>Vantor</v-btn>

          <v-divider class="same-area"></v-divider>

          <h4 class="gray-headers">Custom</h4>

          <button type="button" class="v-btn v-theme--light v-btn--size-default button-outline"><span
              class="v-btn__overlay"></span>
            <span class="v-btn__underlay"></span>
            <span class="v-btn__content" data-no-activator="">Vantor</span>
          </button>

          <div class="vuetify-documentation">
            <img src="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.svg"/>
            <a href="https://vuetifyjs.com/en/components/buttons/#usage"
            target="_blank">View</a>
          </div>

        </div>

        <div class="area">
          <h2>Radio Button</h2>
          <v-radio-group>
            <v-radio label="Radio One" value="one"></v-radio>
            <v-radio label="Radio Two" value="two"></v-radio>
            <v-radio label="Radio Three" value="three"></v-radio>
          </v-radio-group>
          
          <div class="vuetify-documentation">
            <img src="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.svg"/>
            <a href="https://vuetifyjs.com/en/components/radio-buttons/#usage"
            target="_blank">View</a>
          </div>
        </div>

        <div class="area">
          <h2>Checkbox</h2>
          <v-checkbox label="Checkbox"></v-checkbox>
        </div>

        <div class="area">
          <h2>Input Field</h2>
          <v-text-field label="Label" variant="underlined"></v-text-field>
        </div>

        <div class="area">
          <h2>Date Picker</h2>
          <v-date-picker></v-date-picker>
        </div>

        <div class="area">
          <h2>VCard</h2>
          
          <div data-v-d4a662d3=""
          class="v-card v-theme--customTheme v-card--density-default elevation-0 v-card--variant-elevated"
          id="vividContainer"><!---->
          <div class="v-card__loader">
          <div class="v-progress-linear v-theme--customTheme v-locale--is-ltr" role="progressbar" aria-hidden="true"
          aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px;">
          <!---->
          <div class="v-progress-linear__background"></div>
          <div class="v-progress-linear__buffer" style="width: 0%;"></div>
          <div class="v-progress-linear__indeterminate">
          <div class="v-progress-linear__indeterminate long"></div>
          <div class="v-progress-linear__indeterminate short"></div>
          </div><!---->
          </div>
          </div><!----><!---->
          <div data-v-d4a662d3="" class="v-list v-theme--customTheme v-list--density-compact v-list--one-line "
          tabindex="0" role="listbox">


          <div data-v-3d08e742="" data-v-d4a662d3=""
          class="v-list-item v-list-item--active v-list-item--link v-theme--customTheme v-list-item--density-compact v-list-item--one-line rounded-0 v-list-item--variant-text isActive v-card-vantor"
          tabindex="-2"><span class="v-list-item__overlay"></span><span class="v-list-item__underlay"></span>
          <div class="v-list-item__prepend">
          <div data-v-3d08e742=""
          class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-theme--customTheme v-locale--is-ltr v-input--dirty v-checkbox"
          data-test="Vivid Advanced 15cm HD-toggle"><!---->
          <div class="v-input__control">
            <div
              class="v-selection-control v-selection-control--dirty v-selection-control--density-default v-checkbox-btn">
              <div class="v-selection-control__wrapper text-primary"><!---->
                <div class="v-selection-control__input"><i
                    class="mdi-checkbox-marked mdi v-icon notranslate v-theme--customTheme v-icon--size-default"
                    aria-hidden="true"></i><input id="checkbox-245" aria-disabled="false" type="checkbox"
                    aria-describedby="checkbox-245-messages" value="true"></div>
              </div><!---->
            </div>
          </div><!---->
          <div class="v-input__details">
            <div class="v-messages" role="alert" aria-live="polite" id="checkbox-245-messages"></div><!---->
          </div>
          </div>
          <div class="v-list-item__spacer"></div>
          </div>
          <div class="v-list-item__content" data-no-activator=""><!----><!---->

          <div data-v-3d08e742=""
          class="v-card v-theme--customTheme v-card--density-default elevation-0 v-card--variant-elevated bg-transparent">
          <!---->
          <div class="v-card__loader">
            <div class="v-progress-linear v-theme--customTheme v-locale--is-ltr" role="progressbar"
              aria-hidden="true" aria-valuemin="0" aria-valuemax="100"
              style="top: 0px; height: 0px; --v-progress-linear-height: 2px;"><!---->

              <div class="v-progress-linear__background"></div>
              <div class="v-progress-linear__buffer" style="width: 0%;"></div>
              <div class="v-progress-linear__indeterminate">
                <div class="v-progress-linear__indeterminate long"></div>
                <div class="v-progress-linear__indeterminate short"></div>
              </div><!---->
            </div>
          </div><!----><!---->
          <div data-v-3d08e742="" class="v-card-title">Vivid Advanced 15cm HD</div>
          <div data-v-3d08e742="" class="v-card-text">Coverage Areas: Global high-interest areas: population,
            change, infrastructure</div>
          <div data-v-3d08e742="" class="v-card-actions">
            <v-btn class="v-btn v-theme--light button-outline-small"
              variant="outlined"
              size="small">Order</v-btn>

          </div><!----><!---->
          <span class="v-card__underlay"></span>
          </div>
          </div>

          </div>


          </div><!----><!----><span class="v-card__underlay"></span>
          </div>
        </div>

          <div class="area">
          <h2>Speed Dial</h2>
          <component-speed-dial/>
          </div>

      </v-col>





    </v-row>

  </v-container>
</template>

<style>

.primary{
background-color: #06cfff !important;
}



</style>
<script setup lang="ts">

</script>


