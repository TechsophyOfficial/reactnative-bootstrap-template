import { combineReducers } from "redux";
import ThemeSlice from "./ThemeSlice";

export default combineReducers({
  theme: ThemeSlice,
});
