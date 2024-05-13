/*
 * @Description: 
 * @Author: mapengfei
 * @Date: 2024-05-10 15:47:43
 * @LastEditors: mapengfei
 * @LastEditTime: 2024-05-10 16:01:47
 */
'use client'

export default function GlobalError({ error,reset }){
  return (
    <html>
      <body>
        <h2>Something went Wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
