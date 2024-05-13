/*
 * @Description: 
 * @Author: mapengfei
 * @Date: 2024-05-10 15:52:11
 * @LastEditors: mapengfei
 * @LastEditTime: 2024-05-10 15:54:26
 */
'use client'
import { useEffect } from 'react'
export default function Error({ error, reset }){
  useEffect(() => {
    console.log(error);
  },[error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}