import { combineReducers, configureStore } from "@reduxjs/toolkit";
import areasReducer from './slices/areas';
import authReducer from "./slices/auth";
import counterReducer from "./slices/counter";
import mapReducer from './slices/map';
import chatReducer from './slices/messaging';
import offerReducer from "./slices/offer";
import propertyReducer from './slices/property';


const RootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  message: chatReducer,
  property: propertyReducer,
  areas: areasReducer,
  map: mapReducer,
  offer: offerReducer
})



const store = configureStore({
  reducer: RootReducer,
});


export default store
