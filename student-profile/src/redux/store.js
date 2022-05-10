import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./reducers/usersReducer";
import lipinskaReducer from "../pages/MariiaLipinska/Redux_homework/reducers/reducersLipinska"

const rootReducer = combineReducers({
    usersReducer: usersReducer,
    lipinskaReducer: lipinskaReducer
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
