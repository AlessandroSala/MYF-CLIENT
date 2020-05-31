/* eslint-disable */
import Api from '@/services/Api';

export default {
    addInvestment(investment) {
        return Api().post('investments', investment)
    },
    getInvestments(params) {
        return Api().get('investments')
    },
    removeInvestment(params) {
        return Api().delete('investments', {data : {userId: 1, investmentId: params.id}})
    }
}
