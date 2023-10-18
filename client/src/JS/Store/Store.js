import ContactReducer from "../Reducers/ContactReducer";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(ContactReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
