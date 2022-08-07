//引入react核心库
import React from 'react'
//引入App组件
import App from './App.js'
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
//渲染App到页面
root.render(
<App tab="home" />
);


