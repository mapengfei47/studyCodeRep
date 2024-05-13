/*
 * @Description: 
 * @Author: mapengfei
 * @Date: 2024-05-10 16:03:27
 * @LastEditors: mapengfei
 * @LastEditTime: 2024-05-10 16:05:03
 */
'use client'

import Link from 'next/link'

export default function NotFound(){
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}