import { combineReducers } from "redux";
import contactsReducer from "./reducers";
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;


