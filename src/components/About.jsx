import React from 'react'

export default function About() {
  return (
    <div className=' bg-white text-center mt-20   h-full  '>
      <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold pt-10'> למעלה מ 200,000 אירועים תוכננו עם<span className='md:text-5xl sm:text-4xl text-2xl font-bold '> SAVE THE DADE</span></h1>

      <div className='text-white max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8' >

        <div className=' w-full   p-4  my-4  rounded-lg  bg-[#778D45]'>
          <div className='flex justify-center rounded-full mt-2 mx-auto bg-[white] w-40 h-40  hover:scale-105 duration-300 '>
            <span className='text-8xl my-auto  text-[#778D45] '>💻</span>
          </div>
          <h1 className='mt-4 px-6'>כלים לאירגון אירוע</h1>
          <p className='px-6 leading-8'>ניהול רשימת מוזמנים, סקיצת סידורי הושבה, אישורי הגעה, ממשק משימות, דיוור סמסים ואפילו מסך לניהול המתנות. כאן תמצאו את כל הכלים שיעזרו לכם לנהל את האירוע!</p>
        </div>

        <div className=' w-full   p-4 my-4 rounded-lg  bg-[#778D45]'>
          <div className=' flex justify-center rounded-full mt-2 mx-auto bg-[white] w-40 h-40 hover:scale-105 duration-300  '>
            <span className='text-8xl my-auto text-[#778D45]'>🏡</span>
          </div>
          <h1 className='mt-4 px-6'>חיפוש מקום לאירוע  </h1>
          <p className='px-6'> אנחנו יודעים מה טוב בשבילכם! וזו לא קלישאה :)
            אלגוריתם החיפוש שלנו מבוסס על עשרות אלפי אירועים ומספק לכם את ממשק החיפוש הטוב ביותר למציאת המקום המושלם לאירוע שלכם!</p>
        </div>

        <div className=' w-full   p-4 my-4 rounded-lg   bg-[#778D45]'>
          <div className='flex justify-center rounded-full mt-2 mx-auto bg-[white] w-40 h-40 hover:scale-105 duration-300 '>
            <span className='text-8xl my-auto  text-[#778D45]'>❤️</span>
          </div>
          <h1 className='mt-4 px-6'>  באים מאהבה</h1>
          <p className='px-6'>הפירגון שלכם הוא הדלק שלנו, עשרות אלפי זוגות בכל רחבי הארץ משתמשים ב iPlan ומספרים על חווית השימוש שלהם, אנחנו רוצים לשתף אתכם באהבה ומקווים שהמשוב הבא יהיה שלכם!</p>
        </div>



      </div>
    </div>
  )
}



