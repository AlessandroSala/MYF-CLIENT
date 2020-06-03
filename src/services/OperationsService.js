/* eslint-disable */
import Api from '@/services/Api';

export default {
    addOperation(operation) {
        return Api().post('operations', operation)
    },
    getOperations(params) {
        return Api().get('operations')
    },
    removeOperation(params) {
        return Api().delete('operations', {data : {userId: 1, operationId: params.id}})
    },
    getCategoriesData(params) {
        return Api().get('categories/month/' + params.month)
    },
    getMonthExpenses(params) {
        return Api().get('statistics/dbdexp/' + params.month)
    },
    getMonthEarnings(params) {
        return Api().get('statistics/dbdear/' + params.month)
    }
}
