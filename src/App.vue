<template>
<v-app>
  <div id="app">
    <v-container  v-if="!$store.state.userLogged">
      <v-row>
        <v-col cols="1"/>
        <v-col cols="10">
          <v-card class="px-4">
            <v-card-title><p class=" display-1 font-weight-light mx-auto mb-0">Welcome to Manage Your Finance</p> </v-card-title>
            <!--v-card>
                <span class="d-inline">Balance: </span> <p class="d-inline">{{balance}}€</p>
                <span class="">Spent this month: </span> <p class="d-inline">{{balance}}€</p>
                <span class="d-inline">Earned this month: </span> <p class="d-inline">{{balance}}€</p>
            </v-card-->
            <v-divider class="mb-2"></v-divider>
      <v-card flat>
    <v-tabs v-model="tab"
    centered
    fluid>
    <v-tab href="#tab-1">Register</v-tab>
    <v-tab>Login</v-tab>
  </v-tabs>
  <v-tabs-items v-model="tab">
    <v-tab-item value="tab-1">
      <register/>
    </v-tab-item>
    <v-tab-item>
      <login/>
    </v-tab-item>
  </v-tabs-items>
      </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <navbar  v-if="$store.state.userLogged"/>
    <v-content  v-if="$store.state.userLogged">
        <router-view></router-view>
    </v-content>
  </div>
</v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'

export default {
  name: 'App',

  components: {
    Navbar,
    Register,
    Login
  },

  data: () => ({
    tab: null
  }),

  mounted: function() {
  }
};
</script>

<style scoped>
#app {
  font-family: 'Roboto', sans-serif;
}
</style>