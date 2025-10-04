<template>
 <!-- https://cssgrid-generator.com/ -->
  



  <v-container fluid class="launchpad-top-nav">
<v-container style="padding-top: 0px; padding-bottom: 0px;">
  <img src="../assets/images/launchpad/logo-launchpad.png">
</v-container>

  </v-container>
    
<v-container>


  <div class="grid-container">
  <div class="main">
   <v-container>

    <v-row class="welcome">
      Welcome to your LaunchPad, Bryan
    </v-row>
    
    <v-row>

      <div class="grid-title">My Apps</div>
       <div class="grid-card-group">

         <div class="card">
          <div class="top">
            <div class="icon"><img src="../assets/images/launchpad/logo-01.png"></div>
            <div class="title">Portal</div>
            <div class="bookmark"><img src="../assets/images/launchpad/icon-bookmark-on.png"></div>
          </div>
          <div class="bottom">
            <div>Content</div>
            <div class="button">
            <v-btn density="default" size="x-small" variant="outlined" color="#06CFFF" class="card-button">Open</v-btn>
            </div>
          </div>
         </div><!--End of card-->

         <div class="card">
          <div class="top">
            <div class="icon"><img src="../assets/images/launchpad/logo-02.png"></div>
            <div class="title">Smart Scheduling</div>
            <div class="bookmark"><img src="../assets/images/launchpad/icon-bookmark-on.png"></div>
          </div>
          <div class="bottom">
            <div>Cortex Powered</div>
            <div class="button">
            <v-btn density="default" size="x-small" variant="outlined" color="#06CFFF" class="card-button">Open</v-btn>
            </div>
          </div>
         </div><!--End of card-->

        <div class="card">
          <div class="top">
            <div class="icon"><img src="../assets/images/launchpad/logo-03.png"></div>
            <div class="title">Space Domain Awareness</div>
            <div class="bookmark"><img src="../assets/images/launchpad/icon-bookmark-on.png"></div>
          </div>
          <div class="bottom">
            <div>Cortex Powered</div>
            <div class="button">
            <v-btn density="default" size="x-small" variant="outlined" color="#06CFFF" class="card-button">Open</v-btn>
            </div>
          </div>
         </div><!--End of card-->


        <div class="card">
          <div class="top">
            <div class="icon"><img src="../assets/images/launchpad/logo-04.png"></div>
            <div class="title" >Cortex</div>
            <div class="bookmark"><img src="../assets/images/launchpad/icon-bookmark-on.png"></div>
          </div>
          <div class="bottom">
            <div>Cortex Powered</div>
            <div class="button">
            <v-btn density="default" size="x-small" variant="outlined" color="#06CFFF" class="card-button">Open</v-btn>
            </div>
          </div>
         </div><!--End of card-->

        <div class="card">
          <div class="top">
            <div class="icon"><img src="../assets/images/launchpad/logo-05.png"></div>
            <div class="title">Nexus Library</div>
            <div class="bookmark"><img src="../assets/images/launchpad/icon-bookmark-on.png"></div>
          </div>
          <div class="bottom">
            <div>Cortex Powered</div>
            <div class="button">
            <v-btn density="default" size="x-small" variant="outlined" color="#06CFFF" class="card-button">Open</v-btn>
            </div>
          </div>
         </div><!--End of card-->



        </div><!-- End of grid-card-group-->
     </v-row>
   </v-container>
  </div>
  <div class="sidebar">
    <div>Empty</div>
    <div>Sidebar Title</div>
  </div>
</div>


    
</v-container>

</template>

<style>


.launchpad-top-nav{
  background-color: #1D1D1D;

 border: 1px solid rgba(84,84,84,0.5);
 padding: 0px!important;
 display: flex;
     align-items: center;
 height: 60px;
     padding-bottom: 10px !important;

}

.launchpad-top-nav img{
  width: 212px;
}

.launchpad-top-nav .container{
  border: 1px solid pink;
  height: 200px;
}

.parent-container {
display: grid;
grid-template-columns: (1fr, 1fr);
grid-template-rows: repeat(1fr, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.grid-container {
display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 2fr;
grid-column-gap: 24px;
grid-row-gap: 8px;
margin-top: 40px;
}


.main, .sidebar {

}

.main .welcome{
  color: #FFFFFF;
  font-size: 28px;
    font-family: "Everett Regular";
  font-weight: 600;
  letter-spacing: 0.03em;
}

.sidebar{
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(1fr, 1fr);
grid-column-gap: 8px;
grid-row-gap: 8px;
}

.sidebar div{

 
}

.grid-card-group{
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: repeat(2, 1fr);
 grid-auto-rows: 200px;

     row-gap: 18px;
    column-gap: 18px;

}

.grid-title{
  font-size: 18px;
  font-family: "Everett Bold";
 font-weight: 600!important;
 margin: 26px 0;
}


.card{
 background-color: #262626;
 border: 1px solid rgba(84,84,84,0.5);
 border-radius: 8px;
 /* aspect-ratio: 1/0.4; */
 padding: 24px;
 grid-row-gap: 48px;
 color: #D1D1D1;
 font-size: 10px ;
 font-family: "Everett Regular";
 height: fit-content!important;

}

/* .card .top{
 display: flex;
 flex-direction: row;
 align-items: center;
} */

.card .top{
 display: grid;
 grid-template-columns: 1fr 4fr 1fr;
 grid-column-gap:16px;

 align-items: center;
 margin-bottom: 20px;
 height: 50px!important;
}

.card .bottom{
 display: grid;
 grid-template-columns: 3fr 1fr;
 height: 40%;
 font-weight: 600;
 align-items: center;
}

.card .v-btn{
 text-transform: unset;

}

.card .button{
     display: flex
;
    justify-content: flex-end;
}



.card .icon{

}



.card .title{
  font-family: "Everett Regular";
  font-weight: 600;
  font-size: 18px;
   display:flex;
    justify-content: flex-start;
 align-items: center;
 line-height: 1.2em;
}

.card .bookmark{
 display:flex;
 justify-content: flex-end;
 align-items: center;
}



.v-col{
 border: 1px solid green;
}

</style>

<script>
  const cards = [
    { title: 'Cortex', src: '../assets/images/launchpad/logo-03.png', flex: 12 },
    { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
    { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
  ]

</script>