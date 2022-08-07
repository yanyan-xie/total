//引入react核心库
import React from 'react'
//引入App组件
import App from './App.js'
import { createRoot } from 'react-dom/client';
import store from './redux/store'
import {Provider} from 'react-redux'

const root = createRoot(document.getElementById('root'));
//渲染App到页面
root.render(
    /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
<Provider store={store}>
    <App tab="home" />
</Provider>);


