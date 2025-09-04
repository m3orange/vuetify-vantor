<template>

  <div class="code-block-page">

    <div class="area">

      <button type="button" class="v-btn v-theme--light v-btn--size-default button-outline">
          <span class="v-btn__overlay"></span>
          <span class="v-btn__underlay"></span>
          <span class="v-btn__content" data-no-activator="">Button</span>
      </button>
    </div>

    <div class="code-block">
      <v-btn prepend-icon="$vuetify" variant="outlined">
         Button
      </v-btn>
    </div>

  </div>

</template>

<style>

.code-block-page{
  width: 600px;
}

.code-block{
  padding: 20px;
  background-color: #4e4e4e;
  color: rgba(255,255,255,0.8);
  font-family: 'Monaco', Courier, monospace;
  font-size: 14px;
  border-radius: 8px;

}


</style>







<script>
</script>



