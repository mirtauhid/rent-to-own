import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import authReducer from "./slices/auth"


const RootReducer = combineReducers({
  counter: counterReducer,
  auth:authReducer
})



const store = configureStore({
  reducer: RootReducer,
});


export default store
