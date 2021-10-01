import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import counterReducer from "./slices/counter";
import chatReducer from './slices/messaging';


const RootReducer = combineReducers({
  counter: counterReducer,
  auth:authReducer,
  message: chatReducer
})



const store = configureStore({
  reducer: RootReducer,
});


export default store
