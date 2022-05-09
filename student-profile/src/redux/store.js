import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./reducers/usersReducer";
import borysovReducer from "../pages/Info/redux/reducers/borysovReducers";
const rootReducer = combineReducers({
    usersReducer: usersReducer,
    borysovReducer: borysovReducer
})

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
