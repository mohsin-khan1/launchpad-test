import { applyMiddleware, createStore,compose } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from 'redux-thunk';

const middleWares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

export const store = createStore(rootReducer,composeEnhancer(applyMiddleware(...middleWares)));
export default store;
