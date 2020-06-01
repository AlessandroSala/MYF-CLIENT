<template>
<v-container>
    <div>
        <v-card class="px-4">
        <v-row>
            <v-col>
                Summary of current month
                <pie-chart :data="categoriesData">
                </pie-chart>
                
            </v-col>
            
            
            <v-col>
                <span class="d-inline">Balance: </span> <p class="d-inline">{{balance}}€</p><br>
                <span class="">Spent this month: </span> <p class="d-inline">{{balance}}€</p><br>
                <span class="d-inline">Earned this month: </span> <p class="d-inline">{{balance}}€</p><br>
                <v-row>
                    <line-chart :data="yearlyDataExpenditures">
                    </line-chart>
                </v-row>
            </v-col>
        </v-row>
        </v-card>
        <v-card class="ma-4">
            <v-card-title>
                Your last 15 operations:
            </v-card-title>
            
        </v-card>
    </div>
</v-container>
</template>

<script>
//import ElementRow from './ElementRow'
import OperationsService from '@/services/OperationsService' 

export default {
    data() {
        return {
            categoriesData: {
                'prova': 1,
                'prova2': 1,
                'prova3': 1,
                'prova4': 1,
                'prova5': 1,
                'prova6': 1
            },
            yearlyDataExpenditures: {
                'January': 100,
                'February': 200,
                'March': 500,
                'April': 560,
                'May': 520,
                'June': 200,
                'July': 300,
                'August': 50,
                'September': 500,
                'October': 300,
                'November': 800,
                'December': 1000,
            },
            yearlyDataEarnings: {
                'January': 100,
                'February': 200,
                'March': 500,
                'April': 560,
                'May': 520,
                'June': 200,
                'July': 300,
                'August': 50,
                'September': 500,
                'October': 300,
                'November': 800,
                'December': 1000,
            },
            headers: [
                    /*{
                        text: 'Operations',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },*/
                    { text: 'Title', value: 'title' },
                    { text: 'Description', value: 'description' },
                    { text: 'Type', value: 'type' },
                    { text: 'Amount €', value: 'amount' },
                    { text: 'Actions', value: 'actions', sortable: false }
            ],
            tempData: [],
            balance: 400.0
        }
    },
    components: {
        //ElementRow
    },
    mounted: async function() {
        await OperationsService.getOperations({
            id: 1,
            limit: 10
        })
        .then((response) => {
            this.tempData=response.data.operations
        })
        console.log(this.tempData)
    }
}
</script>


<style scoped>

</style>
