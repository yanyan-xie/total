//该文件专门用于暴露一个store对象，整个应用只有一个store对象

//引入legacy_createStore，专门用于创建redux中最核心的store对象
import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
//引入Count组件服务的reducer
import countReducer from './reducers/count'
//引入Person组件服务的reducer
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

//合并所有Reducer
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})//传入对象就是redux中保存对象的总对象

//暴露store
export default legacy_createStore(allReducer,applyMiddleware(thunk))

 