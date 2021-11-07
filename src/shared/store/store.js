import { createStore } from "redux";
import committeeReducer from "./reducers";

export default createStore(committeeReducer);