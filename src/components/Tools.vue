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
    <v-tab-item>
    </v-tab-item>
      </v-tabs-items>
  </v-container>
</template>

<script>
import BEP from "./BEP";
export default {
    data: function() {
        return {
            tab:null
        }
    },
  components: {
    BEP
  }
};
</script>


<style scoped>
</style>
