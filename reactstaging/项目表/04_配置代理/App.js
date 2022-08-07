import React,{Component} from 'react';
import axios from 'axios'

export default class App extends Component{

    getStudentData = ()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('请求成功',response.data)},//成功获取的值
            error => {console.log('请求失败',error)}//失败的值
        )
    }

    getCarData = ()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            response => {console.log('请求成功',response.data)},//成功获取的值
            error => {console.log('请求失败',error)}//失败的值
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarData}>点我获取汽车数据</button>
            </div>
        )
    }
}


