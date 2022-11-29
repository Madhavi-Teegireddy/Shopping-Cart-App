import {legacy_create_store} from "redux";
import rootReducer from "./Redux/actionTypes";

const store = legacy_create_store(
    rootReducer
)


export default store;