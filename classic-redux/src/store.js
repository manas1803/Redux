import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import logger from "redux-logger";

const middlewares = [logger]
const composedEnhancers = compose(applyMiddleware(...middlewares))
const store = createStore(rootReducer,undefined,composedEnhancers)

export default store;