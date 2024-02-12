import React, { useState } from 'react'

export default function Plan() {
  const [tab, setTab] = useState(0)
  return (
    <div className='grid md:grid-cols-2 h-full '>
      <section className='bg-[#eef1f3]'>
        <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold pt-10 text-center'>תכנון אירוע נעשה פשוט</h1>
        <h3 className='font-bold text-center'>ליחצו על הלשוניות השונות בכדי לראות את מגוון התכונות שהמערכת מציעה</h3>
      </section>

      <section className="h-full">
        <img className='rotate-180' src="../assets/xxx.jpg" alt="" />

      </section>

    </div>
  )
}
