//该文件专门用于暴露一个store对象，整个应用只有一个store对象

//引入legacy_createStore，专门用于创建redux中最核心的store对象
import {legacy_createStore} from 'redux'
//引入Count组件服务的reducer
import countReducer from './count_reducer'
//暴露store
export default legacy_createStore(countReducer)

 