import React from 'react'
import {useSearchParams} from 'react-router-dom'

export default function Detail() {
  const [search] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
    return (
    <ul>
        {/* <li>
          <button onClick={()=>setSearch('id=005&title=ni&content=xixiix')}>点击更新参数</button>
        </li> setSearch的用法，但上面search处引用*/}
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
    </ul>
  )
}
