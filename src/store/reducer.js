import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index"
//合并不同模块的reducer
export default combineReducers({
    recommend: recommendReducer
})