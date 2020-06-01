<template>
    <v-card>
        <v-form v-model="valid">
            <v-text-field class="px-2" label="ISIN" v-model="ISIN"></v-text-field>
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
                    let unixtimestamp = k
                    let months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

                    // Convert timestamp to milliseconds
                    let date = new Date(unixtimestamp*1000);

                    // Month
                    let month = months_arr[date.getMonth()];
                    tmpData[0].data[month] = res.data[k]
                }
                
                this.data = tmpData
                console.log(this.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>