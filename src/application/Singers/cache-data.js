import React, { createContext, useReducer } from "react";
import { fromJS } from "immutable";

//context 提供上下文组件
export const CategoryDataContext = createContext({});

//constants常量
export const CHANGE_CATEGORY = "singers/CHANGE_CATEGORY";
export const CHANGE_ALPHA = "singers/CHANGE_ALPHA";

// reducer函数
const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return state.set("category", action.data);
        case CHANGE_ALPHA:
            return state.set("alpha", action.data);
        default:
            return state;
    }
}

//Provider组件(提供数据和方法)
export const Data = props => {
    // useReducer的第二个参数传入初始值
    const [data, dispatch] = useReducer(reducer, fromJS({
        category: "",
        alpha: "",
    }));
    return (
        <CategoryDataContext.Provider value={{ data, dispatch }}>
            {props.children}
        </CategoryDataContext.Provider>
    )
}