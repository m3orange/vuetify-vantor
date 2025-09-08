<template>


<v-row class="hero-header">
<v-col lg="7" md="6" sm="12" class="hero-left-col">
  <div class="logo-block bg-with-corners">  
    <img src="../assets/images/logos/atlas-logo-bw.png"/>

  </div>
  <div class="text-block bg-with-corners">
    <div class="hero-title">Atlas Design System</div>
    <div class="hero-paragraph">
        Atlas is the design system for Vantor’s products and user experiences. This repository contains Atlas’s documentation, which includes design and usage guidelines, product specifications, and working code with live previews.
    </div>

  </div>




</v-col>

<v-col lg="3" md="6" sm="12">

  <div class="hero-button">
    <v-btn
        class="mb-8"
        color="rgba(6,207,255,1)"
        size="x-large"
        variant="outlined"
        density="default"
        outline
        block>
        <a href="https://dark-chill-08695284.figma.site/" target="_blank">
        View Documentation
        </a>
      </v-btn>
        <!--   <v-btn
        class="mb-8"
        color="white"
        size="large"
        variant="flat"
        density="default"
        outline
        block>
    View Documentation
      </v-btn> -->
  </div>



</v-col>




</v-row>

</template>

<style>

.bg-with-corners{
   background-image: 
    url(../assets/images/dashboard/bg-corners-01.png),
        url(../assets/images/dashboard/bg-corners-02.png),
            url(../assets/images/dashboard/bg-corners-03.png),
                url(../assets/images/dashboard/bg-corners-04.png);

  background-position:
    top left, /* this positions the first image */
    top right, /* this positions the second image */
    bottom left,
    bottom right;
  background-repeat:
    no-repeat; /* this applies to both images */
}

.dashboard-bg-mesh-01{
    background: url(../assets/images/dashboard/dashboard-bg-11a.png);
  background-size: 1200px;
  background-repeat: no-repeat;
  background-position-x: 120% ;
  background-position-y: 100px ;
  left: 0px;
    /* filter: sepia(100%) hue-rotate(90deg) saturate(200%);  */
    /* Example filter chain */
}

.dashboard-bg-image-01{
  background: url(../assets/images/dashboard/dashboard-bg-01.png);

  background-size: 60%;
  background-repeat: no-repeat;
  background-position-x: 800px ;
  background-position-y: 100px ;

}

.dashboard-bg-image-03{
  background: url(../assets/images/dashboard/dashboard-bg-03.png);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position-x: 110% ;
  background-position-y: 100px ;
  left: 0px;
}

.dashboard-bg-image-06{
    background-image: url(../assets/images/dashboard/dashboard-bg-06.png);
    background-position-x: 150%;
    background-position-y: 150px ;
  
}



.hero-header{
  height: 40vh;
  padding: 80px 0;


}

.hero-header.v-row{
    display: flex;
  align-items: center;
    justify-content: space-between;
}

.hero-left-col{
  display: flex;
  flex-direction: row;
  gap: 20px;

}

.logo-block{

}

.text-block{
  padding: 20px 0 0 0;;
}

.logo-block, .text-block{
  border: 1px solid rgba(255,255,255,0.2);
  padding: 20px 20px 30px 20px;
}

.hero-title{
font-size: 42px; 
font-family: var(--font-everett-bold);
line-height: 1em; 
margin-bottom: 20px;
padding-right: 30px;
}

.hero-paragraph{
  font-size: 20px;
  font-family: var(--font-everett);
line-height: 1.3em; 
}

.hero-button .v-btn{
  padding: 35px 30px;
  /* max-width: 100px!important; */
    /* border: 1px solid white; */
  border-radius: 8px;
  margin-bottom: 0px;

}
</style>