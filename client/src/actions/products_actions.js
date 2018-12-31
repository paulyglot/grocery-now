import axios from 'axios';
import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_GROCERIES,
    GET_PRODUCTS
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';


export function getProductsBySell(){
    //?sortBy=sold&order=desc&limit=100
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
                    .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_SELL,
        payload: request
    }

}

export function getProductsByArrival(){
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}


////////////////////////////////////
//////        CATEGORIES
////////////////////////////////////


export function getGroceries(){

    const request = axios.get(`${PRODUCT_SERVER}/groceries`)
                .then(response => response.data );

    return {
        type: GET_GROCERIES,
        payload: request
    }

}

export function getProducts(){
    const request = axios.get(`${PRODUCT_SERVER}/product`)
    .then(response => response.data );

    return {
        type: GET_PRODUCTS,
        payload: request
    }
}