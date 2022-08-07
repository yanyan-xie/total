//1.该文件是用于创建一个Count组件服务的reducer，reducer的本质就是一个函数
//2.reducer函数会接到两个参数，分别是：之前状态（preState），动作对象（action）
// import {legacy_createStore as createStore} from 'redux'
import {INCREMENT,DECREMENT} from './constant'

const initState = 0
export default function countReducer(preState=initState,action){
    //从action对象中获取：type,data
    const {type,data} = action
    //根据type决定如何加工数据
    switch (type) {
        //加
        case INCREMENT:
            return preState + data
        //减
        case DECREMENT:
            return preState - data
        default:
            return preState;
    }
}