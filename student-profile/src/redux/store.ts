import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./reducers/usersReducer";
import lipinskaReducer from "../pages/MariiaLipinska/Redux_homework/reducers/reducersLipinska"

import borysovReducer from "../pages/Info/redux/reducers/borysovReducers";
import HryhorievPaCReducer from "../pages/VolodymyrHryhoriev/HryhorievRedux/HryhorievPaCReducer";

const rootReducer = combineReducers({
    usersReducer: usersReducer,
    lipinskaReducer: lipinskaReducer
    borysovReducer: borysovReducer,
    HryhorievPaCReducer : HryhorievPaCReducer,
})
type rootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<rootReducerType>;

export type PropertiesTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
