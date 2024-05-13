/*
 * @Description: 
 * @Author: mapengfei
 * @Date: 2024-05-10 17:49:03
 * @LastEditors: mapengfei
 * @LastEditTime: 2024-05-10 18:19:31
 */

import { NextResponse } from 'next/server'

export async function GET(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return NextResponse.json({ data })
}

export async function POST(request) {
  const article = await request.json()
  return NextResponse.json({
    id: Math.random().toString(36).slice(-8),
    data: article
  }, { status: 201 })
}