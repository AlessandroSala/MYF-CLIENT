<template>
  <v-container>
      <v-tabs v-model="tab"
    centered
    fluid>
    <v-tab href="#enterprise">Enterprise</v-tab>
    <v-tab href="#user">User</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
    <v-tab-item value="enterprise">
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header> Compute Break Even Point and Graph it </v-expansion-panel-header>
            <v-expansion-panel-content>
                <b-e-p />
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-tab-item>
    <v-tab-item value="user"> 
        <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header> Track Stock Price </v-expansion-panel-header>
            <v-expansion-panel-content>
                <tracker/>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-tab-item>
      </v-tabs-items>
<!--       <div class="text-center display-3 font-italic font-weight-thin mt-12"> More Coming Soon </div>
 -->  </v-container>
</template>

<script>
import BEP from "./BEP"
import Tracker from "./Tracker"


export default {
    data: function() {
        return {
            tab:null
        }
    },
  components: {
    BEP,
    Tracker
  }
};
</script>


<style scoped>
</style>
