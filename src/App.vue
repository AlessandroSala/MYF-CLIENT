<template>
<v-app>
  <div id="app">
    <navbar/>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </div>
</v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
  font-family: 'Roboto', sans-serif;
}
</style>