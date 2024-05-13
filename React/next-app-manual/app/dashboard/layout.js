/*
 * @Description: 
 * @Author: mapengfei
 * @Date: 2024-05-10 14:39:02
 * @LastEditors: mapengfei
 * @LastEditTime: 2024-05-10 15:30:55
 */
'use client'
import { useState } from 'react'
import Link from 'next/link'


export default function DashboardLayout({ children }){
  const [count,setCount] = useState(0)
  return (
    <>
      <div>
        <Link href="/dashboard/about">About</Link>
        <br />
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <h1>Layout { count }</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      { children }
    </>
  )
}