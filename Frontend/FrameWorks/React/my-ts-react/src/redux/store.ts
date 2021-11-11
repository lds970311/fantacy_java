import {createStore} from "redux";
import countReducer from "./reducers/countReducer";

const store = createStore(countReducer)

export default store
