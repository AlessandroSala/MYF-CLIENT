<template>
<v-toolbar>
<v-toolbar-title class="pr-4"><v-icon class="center">account_balance_wallet</v-icon></v-toolbar-title>
<v-toolbar-items >
   <v-btn text to="/home" >
      <span>Home</span>
   </v-btn>
   <v-btn text to="/operations">
      <span>Operations</span>
   </v-btn>
   <v-btn text to="/investments">
      <span>Investments</span>
   </v-btn>
   <v-btn text to="/statistics">
      <span>Statistics</span>
   </v-btn>
     <v-btn text to="/tools">
      <span>Tools</span>
   </v-btn> 
</v-toolbar-items>
<v-spacer></v-spacer>
<v-toolbar-items>
   <v-btn text to="/about">
      <span>About</span>
   </v-btn>
</v-toolbar-items>
<v-toolbar-items>
<v-btn text to="/user">
   <span>Logout</span>
</v-btn>
</v-toolbar-items>
</v-toolbar>
</template>

<script>

export default {

}
</script>


<style scoped>

</style>
