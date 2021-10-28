import {createStore} from "redux";
import rawReducer from "./rawReducer";

const store = createStore(rawReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;