import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import alertReducer from "./reducers/alertReducer";
import weatherReducer from "./reducers/weatherReducer";


const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
