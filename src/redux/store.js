import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducer/cartReducer";


const rootReducer = combineReducers({
    cart: cartReducer,

})
const store = createStore(rootReducer, composeWithDevTools());

export default store;