import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  
  search = async()=>{
    //获取用户输入
    const {keyWordElement:{value:keyWord}} = this//解构赋值连续写法
    //发送请求前通知List更新状态
    PubSub.publish('at',{isFirst:false,isLoading:true})
    // //发送网络请求====使用axios发送
    // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    //   response => {
    //     //请求成功后通知List更新状态
    //     PubSub.publish('at',{isLoading:false,users:response.data.items})
    //   },
    //   error => {
    //     //失败的值:注意存的应该是err的message属性,通知更新状态
    //     PubSub.publish('at',{isLoading:false,err:error.message})
    //   }
    // )

    // //发送网络请求====使用fetch发送(未优化)
    // fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    //   response => {console.log('联系服务器成功');
    //   return response.json()
    // },
    //   error =>{console.log('联系服务器失败');
    //   return new Promise(()=>{})  
    // }
    // ).then(
    //   response =>{console.log('获取数据成功'),response},
    //   error =>{console.log('获取数据失败'),error}
    // )
  
    //发送网络请求====使用fetch发送(优化后)
    // fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    //   response => {console.log('联系服务器成功');
    //   return response.json()
    // }).then(
    //   response =>{console.log('获取数据成功',response)}
    // ).catch(
    //   (error)=>{console.log('获取数据失败',error)}
    // )

    //发送网络请求====使用fetch发送(await写法优化)
    try {
      const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('at',{isLoading:false,users:data.items})
    } catch (error) {
      console.log('失败',error);
      PubSub.publish('at',{isLoading:false,err:error.message})
    }
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
