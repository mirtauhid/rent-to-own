import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import settingsFormReducer from "./slices/settingsForm";


const RootReducer = combineReducers({
  counter: counterReducer,
  settingsForm:settingsFormReducer
})



const store = configureStore({
  reducer: RootReducer,
});


export default store
