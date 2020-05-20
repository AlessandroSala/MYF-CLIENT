<template>
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
            
            <v-data-table :items="tempData" :headers="headers">
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
//import ElementRow from './ElementRow'

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
                    { text: 'Category', value: 'category' },
                    { text: 'Type', value: 'type' },
                    { text: 'Amount €', value: 'amount' },
            ],
            tempData: [
                {title: "prova", category: "category", type: "type", amount: "500.0€"},
                {title: "prova", category: "category", type: "type", amount: "500.0€"},
                {title: "prova", category: "category", type: "type", amount: "500.0€"},
                {title: "prova", category: "category", type: "type", amount: "500.0€"},
                {title: "prova", category: "category", type: "type", amount: "500.0€"},
                {title: "prova", category: "category", type: "type", amount: "500.0€"},
                {title: "prova", category: "category", type: "type", amount: "500.0€"}
            ],
            balance: 400.0
        }
    },
    components: {
        //ElementRow
    }
}
</script>


<style scoped>

</style>
