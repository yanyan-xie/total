import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err} = this.props
    return (
        <div className="row">
            {
                isFirst ? <h2>欢迎使用，请输入关键字，然后点击搜索</h2> : 
                isLoading ? <h2>Loading......</h2> :
                err ? <h2 style={{color:'red'}}>{err}</h2> :
                users.map((userOBJ)=>{
                    return (
                        <div key={userOBJ.id} className="card">
                            <a  rel="noreferrer" href={userOBJ.html_url} target="_blank">
                            <img src={userOBJ.avatar_url} alt="avatar" style={{width:'100px'}}/>
                            </a>
                            <p className="card-text">{userOBJ.login}</p>
                        </div>
                    )
                })
            }
        </div>
    )
  }
}
