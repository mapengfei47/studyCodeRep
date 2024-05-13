/*
 * @Description: 
 * @Author: maxiaofei
 * @Date: 2024-05-10 11:22:16
 * @LastEditors: mapengfei
 * @LastEditTime: 2024-05-10 14:50:54
 */
export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <div>Root layout</div>
        <div>
        { children }
        </div>
      </body>
    </html>
  )
}