<template>
  <v-container>
    <v-card>
      <v-card-title class="pl-6">
        Investments
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn fab dark color="indigo" v-on="on">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card class="pa-4">
            <v-card-title>
              <span class="headline">Add Investment</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="ISIN or Title"
                        required
                        v-model="newInvestment.ISIN"
                        :rules="requiredRule"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="Quantity"
                        required
                        v-model="newInvestment.quantity"
                        :rules="requiredRule"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="Purchase Price"
                        required
                        v-model="newInvestment.purchasePrice"
                        :rules="requiredRule"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false" class="float-right">Close</v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="submit"
                  :disabled="!valid"
                  class="float-right"
                >Add</v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-data-table :items="data" :headers="headers">
        <template v-slot:item.actions="{ item }">
          <v-tooltip bottom small>
            <template v-slot:activator="{ on }">
              <v-btn icon @click="remove(item)" v-on="on">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
            <span>Remove</span>
          </v-tooltip>
          <v-dialog v-model="dialog2" max-width="600px">
            <template v-slot:activator="{ on }">
            <v-btn icon  v-on="on">
            <v-icon>mdi-cash-multiple</v-icon>
          </v-btn>
            </template>
            <v-card class="pa-4">
              <v-card-title>
                Sell Investment
              </v-card-title>
              <v-form red="form" v-model="valid2">
              <v-container class="px-8 pt-0">
                <v-row>
                <v-text-field label="Selling Price" v-model="sellPrice" :rules="requiredRule" type="number"></v-text-field>
                </v-row>
              </v-container>

              </v-form>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!valid2" @click="sell(item)" color="blue darken-1"
                  text>
                  Sell
                </v-btn>
              </v-card-actions>
      </v-card>
          </v-dialog>

        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import InvestmentsService from "@/services/InvestmentsService";

export default {
  data: function() {
    return {
      headers: [
        { text: "ISIN/Title", value: "ISIN" },
        { text: "Quantity", value: "quantity" },
        { text: "Purchase Price €", value: "purchasePrice" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      data: [],
      dialog: false,
      dialog2: false,
      valid: false,
      valid2: false,
      sellPrice: 0,
      newInvestment: {
        ISIN: null,
        quantity: null,
        purchasePrice: null
      },
      requiredRule: [v => !!v || "Title is required"]
    };
  },
  components: {},
  mounted: async function() {
    this.updateTable();
  },
  methods: {
    submit: async function() {
      console.log(this.newInvestment);
      InvestmentsService.addInvestment(this.newInvestment).then(() => {
        this.updateTable();
      });
      this.dialog = false;
    },
    updateTable: async function() {
      await InvestmentsService.getInvestments({
        id: 1,
        limit: 10
      }).then(response => {
        this.data = response.data.investments;
      });
    },
    remove: async function(item) {
      await InvestmentsService.removeInvestment(item).then(response => {
        console.log(response);
        this.updateTable();
      });
    },
    sell: async function(item) {
      InvestmentsService.sellInvestment({id: item.id, price: this.sellPrice}).then(response => {
        console.log(response);
        this.updateTable();
      });
    }
  },
  watch: {
    valid: function() {
      console.log(this.valid);
    }
  }
};
</script>


<style scoped>
</style>
