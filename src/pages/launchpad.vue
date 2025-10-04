<template>
 <!-- https://cssgrid-generator.com/ -->
<v-container>
<div class="grid-container">
  <div class="main">
   <v-container>
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
           <div>Cortex Powered</div>
           <div>Button</div>
          </div>

         </div>
         <div class="card">Smart Scheduling</div>
         <div class="card">3</div>
         <div class="card">4</div>
        </div>
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

.grid-container {
display: grid;
grid-template-columns: 2fr 1fr;
grid-column-gap: 24px;
grid-row-gap: 8px;
}


.main, .sidebar {

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
 grid-gap: 18px;

}




.card{
 background-color: #262626;
 border: 1px solid rgba(84,84,84,0.5);
 border-radius: 8px;
 aspect-ratio: 1/0.4;
 padding: 24px;
 grid-row-gap: 48px;
 color: #D1D1D1;
 font-size: 10px ;
 font-family: "Everett Regular";

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
 height: 60%;
 align-items: center;
}

.card .bottom{
 display: grid;
 grid-template-columns: 3fr 1fr;
 height: 40%;
 font-weight: 600;
 align-items: center;
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
}

.card .bookmark{
 display:flex;
 justify-content: center;
 align-items: center;
}



.v-col{
 border: 1px solid green;
}

</style>