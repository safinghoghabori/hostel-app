import { createStore } from "redux";
import { studentReducer } from "./students/studentReducer";

const store = createStore(studentReducer);

export default store;
