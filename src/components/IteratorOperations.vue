<template>
  <div>
    <v-simple-table
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Category</th>
            <th class="text-left">Description</th>
            <th class="text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.name">
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.amount }}€</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>

<script>
import OperationsService from '@/services/OperationsService' 

  export default {
    data: () => ({
      dense: false,
      fixedHeader: false,
      height: 300,
      data: [
      ],
    }),
    mounted: async function() {
        await OperationsService.getOperations()
        .then((result) => {
            this.data=result.data.operations
        })
    }
  }
</script>