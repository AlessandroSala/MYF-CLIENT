<template>
    <v-card>
        <v-form v-model="valid">
        <v-row class="pa-5">
            <v-col>
            <v-text-field   type="number" label="Fixed Costs" :rules="requiredRule" v-model="fixedCosts"></v-text-field>
            </v-col>
            <v-col>
            <v-text-field   type="number"  label="Revenues Per Item" :rules="requiredRule" v-model="revenuesPerItem"></v-text-field>
            </v-col>
            <v-col>
            <v-text-field   type="number"  label="Cost Per Item" :rules="requiredRule" v-model="costsPerItem"></v-text-field>
            </v-col>
            <v-col>
            <v-text-field   type="number"  label="Maximum Quantity" :rules="requiredRule" v-model="maximumQuantity"></v-text-field>
</v-col>
        </v-row>
        <line-chart :data="data"/>
        </v-form>
    </v-card>
</template>


<script>

export default {
    data: function() {
        return {
            valid: false,
            requiredRule: [
                v => !!v || 'Field required',
            ],
                fixedCosts: 0,
                revenuesPerItem: 0,
                costsPerItem: 0,
                maximumQuantity: 1,
            steps: 15,
            data: [
                {name: "Fixed Costs", data: {}},
                {name: "Total Costs", data: {}},
                {name: "Earnings per Item", data: {}}
            ]
        }
    },
    watch: {
        fixedCosts: function() {
            let compData = [
                {name: "Fixed Costs", data: {}},
                {name: "Total Costs", data: {}},
                {name: "Earnings per Item", data: {}}
            ]
            this.fixedCosts=Number(this.fixedCosts)
            this.costsPerItem=Number(this.costsPerItem)
            this.revenuesPerItem=Number(this.revenuesPerItem)
            this.maximumQuantity=Number(this.maximumQuantity)
            for(let i = 0; i<=this.maximumQuantity; i+=this.maximumQuantity/this.steps) {
                let str=''+Math.round(i)
                compData[0].data[str]= this.fixedCosts
                compData[1].data[str]= this.costsPerItem*i+this.fixedCosts
                compData[2].data[str]= this.revenuesPerItem*i
            }
            this.data=compData
            console.log(this.data)
        },
        revenuesPerItem: function() {
            let compData = [
                {name: "Fixed Costs", data: {}},
                {name: "Total Costs", data: {}},
                {name: "Earnings per Item", data: {}}
            ]
            this.fixedCosts=Number(this.fixedCosts)
            this.costsPerItem=Number(this.costsPerItem)
            this.revenuesPerItem=Number(this.revenuesPerItem)
            this.maximumQuantity=Number(this.maximumQuantity)
            for(let i = 0; i<=this.maximumQuantity; i+=this.maximumQuantity/this.steps) {
                let str=''+Math.round(i)
                compData[0].data[str]= this.fixedCosts
                compData[1].data[str]= this.costsPerItem*i+this.fixedCosts
                compData[2].data[str]= this.revenuesPerItem*i
            }
            this.data=compData
            console.log(this.data)
        },
        costsPerItem: function() {
            let compData = [
                {name: "Fixed Costs", data: {}},
                {name: "Total Costs", data: {}},
                {name: "Earnings per Item", data: {}}
            ]
            this.fixedCosts=Number(this.fixedCosts)
            this.costsPerItem=Number(this.costsPerItem)
            this.revenuesPerItem=Number(this.revenuesPerItem)
            this.maximumQuantity=Number(this.maximumQuantity)
            for(let i = 0; i<=this.maximumQuantity; i+=this.maximumQuantity/this.steps) {
                let str=''+Math.round(i)
                compData[0].data[str]= this.fixedCosts
                compData[1].data[str]= this.costsPerItem*i+this.fixedCosts
                compData[2].data[str]= this.revenuesPerItem*i
            }
            this.data=compData
            console.log(this.data)
        },
        maximumQuantity: function() {
            let compData = [
                {name: "Fixed Costs", data: {}},
                {name: "Total Costs", data: {}},
                {name: "Earnings per Item", data: {}}
            ]
            this.fixedCosts=Number(this.fixedCosts)
            this.costsPerItem=Number(this.costsPerItem)
            this.revenuesPerItem=Number(this.revenuesPerItem)
            this.maximumQuantity=Number(this.maximumQuantity)
            for(let i = 0; i<=this.maximumQuantity; i+=this.maximumQuantity/this.steps) {
                let str=''+Math.round(i)
                compData[0].data[str]= this.fixedCosts
                compData[1].data[str]= this.costsPerItem*i+this.fixedCosts
                compData[2].data[str]= this.revenuesPerItem*i
            }
            this.data=compData
            console.log(this.data)
        },

    }
}
</script>