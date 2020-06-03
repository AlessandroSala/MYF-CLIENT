<template>
<v-container>
    <div>
        <v-card class="px-4">
            <v-card-title><p class=" display-2 font-weight-light mx-auto mb-0">Summary of current month - {{currentMonth}} </p> </v-card-title>
            
            <v-divider></v-divider>
        <v-row>
            <v-col>
                <v-card flat>
                    <v-card-title class="justify-center">Expenses by Category</v-card-title>
                <pie-chart :data="pieData" suffix="€">
                </pie-chart>
                </v-card>
            </v-col>
            
            
            <v-col>
                <v-card flat>
                    <v-card-title class="justify-center">Expenses and Earnings by Day</v-card-title>
                    <line-chart :data="totalData" xtitle="Day" ytitle="Amount" suffix="€" >
                    </line-chart>
                </v-card>
            </v-col>
        </v-row>
        </v-card>
            <v-divider class="my-4"></v-divider>
        <v-card class="ma-4">
            <v-card-title>
                Recent operations
            </v-card-title>
            <iterator-operations/>
        </v-card>
            <v-divider class="my-4"></v-divider>
            <v-card class="ma-4">
                <v-card-title>
                Recent investments
            </v-card-title>
            <iterator-investments/>
        </v-card>
    </div>
</v-container>
</template>

<script>
//import ElementRow from './ElementRow'
import OperationsService from '@/services/OperationsService' 
import IteratorOperations from '@/components/IteratorOperations'
import IteratorInvestments from '@/components/IteratorInvestments'

export default {
    data() {
        return {
            pieData: {
                vestiti: 1,
                bar: 1
            },
            monthlyExpenses: {},
            monthlyEarnings: {},
            totalData: {},
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
        IteratorInvestments,
        IteratorOperations
    },
    computed: {
        currentMonth: function() {
            const m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            return m[new Date().getMonth()]
        }
    },
    mounted: async function() {
        let tmpData = {}
        let currMonth = ''+(new Date().getMonth()+1)
        if(currMonth < 10 ) {
            currMonth = '0'+currMonth
        }

        await OperationsService.getCategoriesData({
            month: currMonth
        })
        .then((response) => {
            response.data.categoriesData.forEach(element => {
                tmpData[element.category]=element.amount
            });
            this.pieData=tmpData
        })
        .catch((err) => console.log(err))

        tmpData = {}
        await OperationsService.getMonthExpenses({
            month: currMonth
        })
        .then((response) => {
            response.data.expenses.forEach(element => {
                
                tmpData[Number(element.day)]=element.amount
            });
            this.monthlyExpenses=tmpData
        })
        .catch((err) => console.log(err))

        tmpData = {}
        await OperationsService.getMonthEarnings({
            month: currMonth
        })
        .then((response) => {
            response.data.earnings.forEach(element => {
                
                tmpData[Number(element.day)]=element.amount
            });
            this.monthlyEarnings=tmpData
        })
        .catch((err) => console.log(err))
        this.totalData = [
            {
                name: "Expenses",
                data: this.monthlyExpenses
            },
            {
                name: "Earnings",
                data: this.monthlyEarnings
            }
        ]
        
        
    }
}
</script>


<style scoped>

</style>
