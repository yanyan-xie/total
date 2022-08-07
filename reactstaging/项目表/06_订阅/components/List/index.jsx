import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  
    state = {
        users:[],//初始化转态，初始值为数组
        isFirst:true,//是否为第一次打开页面
        isLoading:false,//标识是否处于加载中
        err:''//存储请求相关的错误信息
    }

    //订阅消息
    componentDidMount(){
        this.token = PubSub.subscribe('at',(msg,stateObj)=>{
            this.setState(stateObj)
        })
    }

    //结束时取消订阅
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，请输入关键字，然后点击搜索</h2> : 
                    isLoading ? <h2>Loading......</h2> :
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    users.map((userObj)=>{
                        return (
                            <div key={userObj.id} className="card">
                                <a  rel="noreferrer" href={userObj.html_url} target="_blank">
                                <img src={userObj.avatar_url} alt="avatar" style={{width:'100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
  }
}
