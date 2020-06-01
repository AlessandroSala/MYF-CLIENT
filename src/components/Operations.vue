<template>
<v-container>
<v-card>
        <v-card-title class="pl-6">
        Operations
        <v-spacer>
        </v-spacer>
        <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on }">
        <v-btn fab dark color="indigo" v-on="on">
            <v-icon>
                mdi-plus
            </v-icon>
        </v-btn>
        </template>
        <v-card class="pa-4">
        <v-card-title>
          <span class="headline">Add Operation</span>
        </v-card-title>
        <v-card-text >
          <v-form
            ref="form"
            v-model="valid"
          >
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Category" v-model="newOperation.title" required :rules="requiredRule"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Category" v-model="newOperation.category" required :rules="requiredRule"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="newOperation.date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="newOperation.date"
                      label="Date"
                      prepend-icon="event"
                      readonly
                      :rules="requiredRule"

                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="newOperation.date" scrollable required :rules="requiredRule">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(newOperation.date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Description" v-model="newOperation.description" required :rules="requiredRule"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Amount" v-model="newOperation.amount" required :rules="requiredRule" type="number"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-select :items="types" item-text="name" item-value="value" label="Type" v-model="newOperation.type" required :rules="requiredRule"></v-select>
              </v-col>
            </v-row>
          </v-container>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false" class="float-right">Close</v-btn>
        
            <v-btn color="blue darken-1" text @click="submit" :disabled="!valid" class="float-right">Add</v-btn>
          </v-card-actions>
          
        
        </v-card-text >
      </v-card>
        </v-dialog>
    </v-card-title>
    <v-data-table :items="data" :headers="headers" :options.sync="options">
        <template v-slot:item.actions="{ item }">
      <v-btn icon
        @click="remove(item)">
      <v-icon>
        mdi-delete
      </v-icon>
      </v-btn>
    </template>
    </v-data-table>
</v-card>
</v-container>
</template>

<script>
import OperationsService from '@/services/OperationsService'

export default {
    data: function(){
        return {
          options: {sortBy: ['date'], sortDesc: [true], /*'rowsPerPage': -1*/},
            headers: [
                    { text: 'Category', value: 'title' },
                    { text: 'Description', value: 'description' },
                    { text: 'Date', value: 'date'},
                    { text: 'Type', value: 'type' },
                    { text: 'Amount €', value: 'amount' },
                    { text: 'Actions', value: 'actions', sortable: false }
            ],
            types: [
              { name: "Expense", value: 1},
              { name: "Earning", value: 0}

            ],
            data: [],
            dialog: false,
            modal: false,
            newOperation: {
                title: null,
                description: null,
                userId: 1,
                type: null,
                amount: null,
                date: null
            },
            valid: false,
            name: '',
            requiredRule: [
                v => !!v || 'Field is required',
            ]
        }
    },
    components: {
        
    },
    mounted: async function() {
        this.updateTable()
    },
    methods: {
        submit: async function() {
            console.log(this.newOperation)
            OperationsService.addOperation(this.newOperation)
            .then(()=>{
                this.updateTable()
            })
            this.dialog=false;
        },
        updateTable: async function() {
            await OperationsService.getOperations({
                id: 1,
                limit: 10
            })
            .then((response) => {
                console.log(response)
                response.data.operations.forEach(element => {
                  element.type = element.type == 1 ? "Expense" : "Earning";
                });
                this.data=response.data.operations
            })
        },
        remove: async function(item) {
            await OperationsService.removeOperation(item)
            .then((response) => {
                console.log(response)
                this.updateTable()
            })
        }
    },
    watch: {
      valid: function () {
        console.log(this.valid)
      }
    }
}
</script>


<style scoped>

</style>
