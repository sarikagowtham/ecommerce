import {get} from './api';
const FETCH = 'productreducer/FETCH';
const FETCH_SUCCESS = 'productreducer/FETCH_SUCCESS';
const FETCH_ERROR = 'productreducer/FETCH_ERROR';
const initialState = {
    loading: false,
    products: [],
};
export default function reducer(state = initialState, action = {}) {
let product;
let i;
switch (action.type) {
case FETCH:
return { ...state, loading: true };
case FETCH_SUCCESS:
return {
...state,
products: action.payload.products,
loading: false,
error: null,
};
case FETCH_ERROR:
return { ...state, error: action.payload.error, loading: false };
default:
return state;
}
}
export function fetchProducts() {
    return dispatch => {
    dispatch({ type: FETCH });
    get('/products')
    .then(products =>
    dispatch({ type: FETCH_SUCCESS, payload: { products } }),
    )
    .catch(error => dispatch({ type: FETCH_ERROR, payload: { error } }));
    };
    }