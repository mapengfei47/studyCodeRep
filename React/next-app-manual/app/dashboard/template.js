/*
 * @Description: 
 * @Author: mapengfei
 * @Date: 2024-05-10 14:52:49
 * @LastEditors: mapengfei
 * @LastEditTime: 2024-05-10 15:31:07
 */
'use client'
import { useState } from 'react'

export default function Template({ children }){
  const [count,setCount] = useState(0)

return (
  <>
    <h1>Template { count }</h1>
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
    { children }
  </>
)
}