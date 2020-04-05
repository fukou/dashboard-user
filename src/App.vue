<template>
  <v-app id="inspire">
    <v-content class="wp">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>


<style>
.theme--light.v-application {
  background-color: #eee !important;
}

@media (min-width: 60rem) {
  .wp {
    margin-top: 1rem;
  }
}
</style>
