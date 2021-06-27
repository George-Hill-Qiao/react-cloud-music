import { fromJS } from "immutable";
import * as  actionTypes from "./constants";

const defaultState = fromJS({
    singerList: [],//歌手列表的信息
    enterLoading: true,//进场的loading
    pullUpLoading: false,//上拉加载动画
    pullDownLoading: false,//下拉加载动画
    pageCount: 0,//默认当前页数
})


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SINGER_LIST:
            return state.set("singerList", action.data);
        case actionTypes.CHANGE_PAGE_COUNT:
            return state.set("pageCount", action.data);
        case actionTypes.CHANGE_ENTER_LOADING:
            return state.set("enterLoading", action.data);
        case actionTypes.CHANGE_PULLUP_LOADING:
            return state.set("pullUpLoading", action.data);
        case actionTypes.CHANGE_PULLDOWN_LOADING:
            return state.set("pullDownLoading", action.data);
        default:
            return state;
    }
}