import React from 'react'

export default function Footer() {
  return (
    <div className='h-[400px] mb-0 text-white bg-[#1c1c1c]'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-center pt-8 font-bold text-3xl' >חיפושים נפוצים לאירוע</h1>
        <div className='  mt-14 flex justify-between '>
          <div className='flex justify-center text-lg '>
            <ul >
              <li>אולמות אירועים באזור חיפה</li>
              <li>אולמות אירועים בשפלה</li>
              <li>גני אירועים בעמק חפר</li>
              <li>מקום לברית</li>
            </ul>
          </div>
          <div className='  flex justify-center text-lg '>
            <ul >
              <li >אולמות אירועים בבאר שבע</li>
              <li >אולמות אירועים בשרון</li>
              <li >גני אירועים בצפון</li>
              <li >מקום לבריתה</li>
            </ul >
          </div>
          <div className='flex justify-center text-lg '>
            <ul >
              <li>אולמות אירועים בדרום</li>
              <li>אולמות אירועים בתל אביב - יפו</li>
              <li>גני אירועים בשפלה</li>
              <li>מקום לבר מצווה</li>
            </ul>
          </div>
          <div className='flex justify-center text-lg'>
            <ul >
              <li>אולמות אירועים במרכז</li>
              <li>גני אירועים בבאר שבע</li>
              <li>גני אירועים בתל אביב - יפו</li>
              <li>מקום לחינה</li>
            </ul>
          </div>
          <div className='flex justify-center text-lg'>
            <ul >
              <li>אולמות אירועים בצפון</li>
              <li>גני אירועים במרכז</li>
              <li>מקום לאירוע עסקי</li>
              <li>מקום לכנסים</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
