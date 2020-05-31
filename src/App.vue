<template>
<v-app>
  <div id="app">
    <v-container  v-if="!$store.state.userLogged">
      <v-row>
        <v-col cols="3"/>
        <v-col cols="6">
      <v-card>
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
    console.log(this.$store.state.user)
  }
};
</script>

<style scoped>
#app {
  font-family: 'Roboto', sans-serif;
}
</style>