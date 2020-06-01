/* eslint-disable */
import Api from '@/services/Api';

export default {
    getPrices(ISIN) {
        return Api().get('stock/'+ISIN)
    }
}
