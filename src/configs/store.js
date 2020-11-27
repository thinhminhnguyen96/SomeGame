import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import active from "../redux/reducers/active";
import dice from "../redux/reducers/dice";
import credentials from "../redux/reducers/credentials";
import thunk from "redux-thunk";

const reducer = combineReducers({
  active,
  credentials,
  dice,
  
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
  // applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
