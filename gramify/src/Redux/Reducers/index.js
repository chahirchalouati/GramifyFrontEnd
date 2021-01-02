import { combineReducers } from "redux";
import RX_SIGN_UP from "./RX_SIGN_UP";
import RX_POST from "./RX_POST";
import RX_SIGN_IN from "./RX_SIGN_IN";
import RX_COMMENT from "./RX_COMMENT";
import RX_ACCESS_TYPE from "./RX_ACCESS_TYPE"
import RX_STORY from "./RX_STORY";

export default combineReducers({
  RX_SIGN_IN,
  RX_SIGN_UP,
  RX_POST,
  RX_COMMENT,
  RX_ACCESS_TYPE,
  RX_STORY
});
