//该文件专门为count组件生成action对象
import {INCREMENT,DECREMENT} from '../constant'

//同步action，值为object
export function createIncrementAction (data){
    return {type:INCREMENT,data}
}
export function createDecrementAction (data){
    return {type:DECREMENT,data}
}

//异步action，值为函数，异步action中一般都会调用同步action，异步action不是一定要用的
export function createIncrementAsyncAction (data,time){
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}