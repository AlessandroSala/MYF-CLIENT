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
                <v-text-field label="Title" v-model="newOperation.title" required :rules="requiredRule"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Category" v-model="newOperation.category" required :rules="requiredRule"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Description" v-model="newOperation.description" required :rules="requiredRule"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Amount" v-model="newOperation.amount" required :rules="requiredRule"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-select :items="['1', '0']" label="Type" v-model="newOperation.type" required :rules="requiredRule"></v-select>
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
    <v-data-table :items="data" :headers="headers">
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
            headers: [
                    { text: 'Title', value: 'title' },
                    { text: 'Description', value: 'description' },
                    { text: 'Type', value: 'type' },
                    { text: 'Amount €', value: 'amount' },
                    { text: 'Actions', value: 'actions', sortable: false }
            ],
            data: [],
            dialog: false,
            newOperation: {
                title: null,
                description: null,
                userId: 1,
                type: null,
                amount: null
            },
            valid: false,
            name: '',
            requiredRule: [
                v => !!v || 'Title is required',
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
