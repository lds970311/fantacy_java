import {Reducer} from "redux";

const initialState = 0
const countReducer: Reducer = (preState = initialState, action) => {
    const {type, data} = action;
    switch (type) {
        case "add":
            return preState + data
        case "sub":
            return preState - data;
        default:
            //初始化状态
            return preState
    }
}

export default countReducer
