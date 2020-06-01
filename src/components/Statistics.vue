<template>
<v-container>
    <v-tabs v-model="tab"
            centered
            fluid>
            <v-tab href="#general">General</v-tab>
            <v-tab href="#expenses">Expenses</v-tab>
            <v-tab href="#earnings">Earnings</v-tab>
            <v-tab href="#investments">Investments</v-tab>
      </v-tabs>
    <v-card>
        <v-tabs-items v-model="tab">
            <v-tab-item value="investments">
                 <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header> Positive Investments this Month </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header> Positive Investments this Year </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-header> Negative Investments this Month </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel> 
                        <v-expansion-panel-header> Negative Investments this Year </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</v-container>
</template>

<script>
export default {
    data: function() {
        return {
            tab: null
        }
    }
}
</script>


<style scoped>

</style>
