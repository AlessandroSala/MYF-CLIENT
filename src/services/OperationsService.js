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
    }
}
