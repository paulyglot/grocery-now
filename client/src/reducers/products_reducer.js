import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_GROCERIES,
    GET_PRODUCTS
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){
        case GET_PRODUCTS_BY_SELL:
            return {...state, bySell: action.payload }
        case GET_PRODUCTS_BY_ARRIVAL:
            return {...state, byArrival:  action.payload }
        case GET_GROCERIES:
            return {...state, groceries: action.payload }
        case GET_PRODUCTS:
            return {...state, product: action.payload }
        default:
            return state;
    }
}