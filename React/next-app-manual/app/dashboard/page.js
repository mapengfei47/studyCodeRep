/*
 * @Description: 
 * @Author: mapengfei
 * @Date: 2024-05-10 14:33:27
 * @LastEditors: mapengfei
 * @LastEditTime: 2024-05-10 16:00:36
 */
'use client'

import { useState } from 'react'
// async function getData(){
//   await new Promise((resolve) => setTimeout(resolve,3000))
//   return {
//     message: 'Hello Dashboard!'
//   }
// }

export default async function Page(){
  // const { message } = await getData()
  const [ error,setError ] = useState(false)

  const handleError = () => setError(true)
  // return <h1>{ message }</h1>
  return <>
  { error ? Error() : <button onClick={handleError}>Get Error</button> }
  </>
}