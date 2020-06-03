<template>
    <v-card flat>
        <v-form v-model="valid">
            <v-text-field class="px-2" label="Ticker" v-model="ISIN"></v-text-field>
        </v-form>
        <line-chart :data="data"/>
    </v-card>
</template>

<script>
import StockService from '../services/StockService'


export default {
    data: function() {
        return {
            valid: false,
            requiredRule: [
                v => !!v || 'Field required',
            ],
            ISIN: null,
            data: null
        }
    },
    watch: {
        ISIN: function(val) {
            let tmpData = [
                {name: 'Stock Price', data:{}}
            ]
            
            StockService.getPrices(val)
            .then((res) => {
                for(const k in res.data){
                    
                    let months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

                    let month = months_arr[new Date(res.data[k].date).getMonth()];
                    tmpData[0].data[month] = res.data[k].open
                }
                this.data = tmpData
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>