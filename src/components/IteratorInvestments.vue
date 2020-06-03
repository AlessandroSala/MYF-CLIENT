<template>
  <div>
    <v-simple-table
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">ISIN</th>
            <th class="text-left">Quantity</th>
            <th class="text-left">Purchase Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.name">
            <td>{{ item.ISIN }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.purchasePrice }}€</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>

<script>
import InvestmentsService from '@/services/InvestmentsService' 

  export default {
    data: () => ({
      dense: false,
      fixedHeader: false,
      height: 300,
      data: [
      ],
    }),
    mounted: async function() {
        await InvestmentsService.getInvestments()
        .then((result) => {
            this.data=result.data.investments
        })
    }
  }
</script>