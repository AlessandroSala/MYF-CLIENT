<template>

<v-container>
<v-tabs v-model="tab"
    centered
    fluid>
    <v-tab href="#general">General</v-tab>
    <v-tab href="#operations">Operations</v-tab>
    <v-tab href="#investments">Investments</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
    <v-tab-item value="general">
        <v-row>
             <v-col :cols="singleColNum" :offset="(12-singleColNum)/2">
         <v-card>
              <v-card-title class="subheading font-weight-bold">General</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Average Spending every Month:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ generalStats.averageSpending }}€</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Average Spending every Year:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ generalStats.averageEarning }}€</v-list-item-content>
                </v-list-item>


              </v-list>
            </v-card>
        </v-col>
        </v-row>
    </v-tab-item>
    <v-tab-item value="operations">
        <v-row>
            
            <v-col cols="5" offset="1">
     <v-card class="mx-auto">
              <v-card-title class="subheading font-weight-bold">Expenses</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Spent this month:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ operationsStas.expenses.spentThisMonth}}€</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Spent this year:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ operationsStas.expenses.spentThisYear }}€</v-list-item-content>
                </v-list-item>


              </v-list>
            </v-card>
            </v-col>
            <v-col cols="5">
            <v-card class="mx-auto">
              <v-card-title class="subheading font-weight-bold">Earnings</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Earned this month:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ operationsStas.earnings.earnedThisMonth  }}€</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Earned this year:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ operationsStas.earnings.earnedThisYear }}€</v-list-item-content>
                </v-list-item>


              </v-list>
            </v-card>
            </v-col>
        </v-row>
    </v-tab-item>
    <v-tab-item value="investments">
        <v-row>
            <v-col :cols="singleColNum" :offset="(12-singleColNum)/2">
   <v-card>
              <v-card-title class="subheading font-weight-bold">Investments</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Positive Investments:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ investmentsStats.numberPosInv }}</v-list-item-content>
                </v-list-item>


              </v-list>
            </v-card>
            </v-col>
        </v-row>
    </v-tab-item>
      </v-tabs-items>
      
</v-container>
</template>

<script>
import StatisticsService from '../services/StatisticsService'
  export default {
    data: () => ({
        singleColNum: 6,
      itemsPerPage: 4,
      operationsStas: {
          expenses: {
                spentThisMonth: 0,
                spentThisYear: 0
          },
          earnings: {
                earnedThisMonth: 0,
                earnedThisYear: 0
          }
      },
      investmentsStats: {
          numberPosInv: "Coming soon"
      },
      generalStats: {
          averageEarning: 0,
          averageSpending: 0
      },
      tab: null

    }),
    mounted: async function() {
      const currYear=''+(new Date().getYear()+1900)
      let currMonth = ''+(new Date().getMonth()+1)
        if(currMonth < 10 ) {
            currMonth = '0'+currMonth
        }
        let tmpData = {
          operationsStas: {
            expenses: {
                  spentThisMonth: 0,
                  spentThisYear: 0
            },
            earnings: {
                  earnedThisMonth: 0,
                  earnedThisYear: 0
            }
            },
            investmentsStats: {
                numberPosInv: 0
            },
            generalStats: {
                averageEarning: 0,
                averageSpending: 0
            },
        }
        await StatisticsService.getAvg({  type: 1 })
        .then ((result) => {
          let avg=0
          let c=0
          result.data.data.forEach(element => {
            avg+=element.amount
            c++
          });
          avg = c>0 ? avg/c : 0
          tmpData.generalStats.averageSpending=avg
        })
        .catch(err => console.log(err))


        await StatisticsService.getAvg({ type: 0 })
        .then ((result) => {
          let avg=0
          let c=0
          result.data.data.forEach(element => {
            avg+=element.amount
            c++
          });
          avg = c>0 ? avg/c : 0
          tmpData.generalStats.averageEarning=avg
        })
        .catch(err => console.log(err))

        
        await StatisticsService.getYearly({ year: currYear, type: 1 })
        .then ((result) => {
          tmpData.operationsStas.expenses.spentThisYear=result.data.data[0].amount
        })
        .catch(err => console.log(err))

        
        await StatisticsService.getYearly({ year: currYear, type: 0 })
        .then ((result) => {
          tmpData.operationsStas.earnings.earnedThisYear=result.data.data[0].amount
        })
        .catch(err => console.log(err))
        await StatisticsService.getMonthly({ month: currMonth, type: 1 })
        .then ((result) => {
          tmpData.operationsStas.expenses.spentThisMonth=result.data.data[0].amount
        })
        .catch(err => console.log(err))
        await StatisticsService.getMonthly({ month: currMonth, type: 0 })
        .then ((result) => {
          tmpData.operationsStas.earnings.earnedThisMonth=result.data.data[0].amount
        })
        .catch(err => console.log(err)) 
        
        this.operationsStas = tmpData.operationsStas
        this.generalStats = tmpData.generalStats

    }
  }
</script>