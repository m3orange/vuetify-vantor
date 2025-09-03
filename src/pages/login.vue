<template>
  <div class="align-center">
    <v-row style="justify-content: center; margin-top: 30px;">
    <v-col cols="6">
    <v-card
      class="mx-auto pa-12 pb-8 login-card"
      elevation="0"
      rounded="lg"
      width="600px"

    >

      <h4>Log in using your Google account</h4>
      <v-btn
        class="mb-8"
        color="white"
        size="large"
        variant="tonal"
        style="border: 1px solid rgba(255,255,255,0.3); 
        height: 50px; padding: 10px;"
        block
      >
        <div class="google-sso-btn">
          <img src="@/assets/images/google-logo.png"/>
          Sign in with Google
        </div>

      </v-btn>

      <div class="google-sso-divider">
        <hr class="hr">
OR
        <hr></hr>
       </div>

        <h4>Log in using your email</h4>

      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        density="comfortable"
        placeholder="anastasia.suderman@maxar.com"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password


      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="comfortable"
        placeholder="•••••••••••••••"
        variant="outlined"
        @click:append-inner="visible = !visible"></v-text-field>


      <v-btn
        class="mb-8"
        color="rgba(189, 82, 244,10)"
        size="large"
        variant="tonal"
        block
        style="border: 1px solid var(--vantor-purple)!important; height: 50px;"
      >
        Log In
      </v-btn>

      <v-row>
        <v-card-text class="text-center">
          <div style="margin-bottom: 10px;">New to Vantor?
            <a class="text-blue" href="#" rel="noopener noreferrer">
              Create your freemium account.
            </a>
          </div>
          <div>
            <a class="text-blue" href="#" rel="noopener noreferrer">
              Forgot your password?
            </a>
          </div>
        </v-card-text>
      </v-row>

    </v-card>
</v-col>
    </v-row>

  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const visible = ref(false)
</script>



<style>

.login-card{
  background-color: #1D1D1D!important;
  border: 1px solid #3D3D3D!important;
}

.login-card h4{
  color: #FFF!important;
}

.google-sso-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

}

.google-sso-divider{
  display: flex;
  flex-direction: row;
  justify-content: center;
    align-items: center;
    color: #888;
}

hr {
  border: none; /* Remove default border */
  border-top: 1px solid rgba(255,255,255,0.2); /* Add a custom top border */
  margin: 20px 10px; /* Add vertical spacing */
  width: 200px;
}

.v-field--variant-outlined{
  border: 1px solid var(--border-color);
}

.text-blue{
  color: rgba(6,207,255,1)!important; 
} 

a{
  color: var(--vantor-blue)!important;
}

.google-sso-btn,
.v-btn {
  text-transform: none!important;
  letter-spacing: 0px!important;
  font-family: var(--font-everett);
  font-weight: 500;
}


.google-sso-btn img{
  max-height: 30px;
}
</style>