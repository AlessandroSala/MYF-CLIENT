/* eslint-disable */
import Api from '@/services/Api';

export default {
    getAvg(params) {
        return Api().get('statistics/avg/' + params.type)
    },
    getYearly(params) {
        return Api().get('statistics/yearly/' + params.type + '/' + params.year)
    },
    getMonthly(params) {
        return Api().get('statistics/monthly/' + params.type + '/' + params.month)
    },
    
}
