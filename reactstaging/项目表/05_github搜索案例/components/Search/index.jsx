import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  
  search = ()=>{
    //获取用户输入
    const {keyWordElement:{value:keyWord}} = this//解构赋值连续写法
    //发送请求前通知App更新状态
    this.props.updateAppState({isFirst:false,isLoading:true})
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {
        //请求成功后通知App更新状态
        this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      //
      error => {this.props.updateAppState({isLoading:false,err:error.message})}//失败的值:注意存的应该是err的message属性
    )
  }

  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索用户</h3>
            <div>
                <input ref={c=> this.keyWordElement = c} type="text" placeholder="输入关键词"/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
        </section>
    )
  }
}
