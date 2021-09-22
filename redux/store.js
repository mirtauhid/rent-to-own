import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import counterReducer from "./slices/counter";


const RootReducer = combineReducers({
  counter: counterReducer,
  auth:authReducer
})



const store = configureStore({
  reducer: RootReducer,
});


export default store
