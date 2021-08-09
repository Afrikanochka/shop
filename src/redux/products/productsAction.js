import {createAction} from "@reduxjs/toolkit";

export const addProduct = createAction("products/addProduct");
export const deleteProduct = createAction("products/deleteProduct");
export const getLaptops = createAction("products/getLaptops");
export const getPhones = createAction("products/getPhones");
export const getAllProducts = createAction("products/getAllProducts");
export const setError = createAction("products/setError");
export const resetError = createAction("products/resetError");
export const setLoader = createAction("products/setLoader");
export const productsByCategory = createAction("products/productsByCategory");


// const ADD_PRODUCT = "addProduct";
// const DELETE_PRODUCT = "deleteProduct";
// const GET_ALL_PRODUCTS = "getAllProducts";
// const GET_PHONES = "getPhones";
// const GET_LAPTOPS = "getLaptops";

// export {
//   ADD_PRODUCT,
//   DELETE_PRODUCT,
//   GET_LAPTOPS,
//   GET_PHONES,
//   GET_ALL_PRODUCTS,
// };

// export const addProduct = (product) => ({
//   type: ADD_PRODUCT,
//   payload: product,
// });

// export const deleteProduct = (category, id) => ({
//   type: DELETE_PRODUCT,
//   payload: {
//     category,
//     id,
//   },
// });

// export const getLaptops = (laptops) => ({
//   type: GET_LAPTOPS,
//   payload: laptops,
// });

// export const getPhones = (phones) => ({
//   type: GET_PHONES,
//   payload: phones,
// });

// export const getAllProducts = (products) => ({
//   type: GET_ALL_PRODUCTS,
//   payload: products,
// });