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
        return Api().delete('investments', {data : {investmentId: params.id}})
    },
    sellInvestment(params) {
        return Api().delete('investments/sell', {data : {investmentId: params.id, sellPrice: params.price}})
    }
}
