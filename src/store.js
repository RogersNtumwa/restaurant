import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./reducers/auth";
// import {
//   productsList,
//   productDetails,
//   deleteProductReducer,
//   createProductReducer,
//   editProductReducer,
//   relatedProductsReducer,
// } from "./reducers/products";
// import { cartReducer } from "./reducers/cart";
// import user from "./reducers/auth";
// import {
//   PlaceOrderReducer,
//   OrderDetailsReducer,
//   OrderReducer,
//   deleteOrderReducer,
// } from "./reducers/order";
// import { Users } from "./reducers/users";
import alertReducer from "./reducers/alert";

// const cartItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];
// const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
//   ? JSON.parse(localStorage.getItem("shippingAddress"))
//   : {};

// const inititalState = {
//   cart: {
//     cartItems: cartItemsFromStorage,
//     shippingAddress: shippingAddressFromStorage,
//   },
// };
const middleware = [thunk];

const reducer = combineReducers({
  alert: alertReducer,
  auth: user,
});

const store = createStore(
  reducer,
  //   inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
