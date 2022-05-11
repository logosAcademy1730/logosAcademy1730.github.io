import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./reducers/usersReducer";
import HryhorievPaCReducer from "../pages/VolodymyrHryhoriev/HryhorievRedux/HryhorievPaCReducer";
const rootReducer = combineReducers({
    usersReducer: usersReducer,
    HryhorievPaCReducer : HryhorievPaCReducer,
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
