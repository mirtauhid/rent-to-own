import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import counterReducer from "./slices/counter";
import chatReducer from './slices/messaging';
import propertyReducer from './slices/property';
import areasReducer from './slices/areas';


const RootReducer = combineReducers({
  counter: counterReducer,
  auth:authReducer,
  message: chatReducer,
  property: propertyReducer,
  areas: areasReducer,
})



const store = configureStore({
  reducer: RootReducer,
});


export default store
