import React, { useState } from 'react'
import { LiaSchoolSolid } from "react-icons/lia";
import { BsPhone, BsMagic } from "react-icons/bs";
import { GiMissileLauncher } from "react-icons/gi";

// import { BsMagic } from "react-icons/bs";
// import { GiSubmarineMissile } from "react-icons/gi";
export default function Plan() {
  const aboutPlan = [
    "3 - 2 - 1 ממריאים!  לתכנן ולנהל אירוע זו משימה מאתגרת(במיוחד למי שעושה זאת בפעם הראשונה אבל עם מערכת מתקדמת שמכוונת אתכם לאורך הדרך המשימה הופכת לחוויה מהנה. ארגז הכלים החדש שהכנו לכם מלא בכלים טכנולוגים מתקדמים שיהפכו אתכם למקצוענים!",
    " אירוע מושלם דורש עבודת צוות מושלמת  מאז ומתמיד המפתח לאירוע טוב היה סנכרון בין הגורמים השונים שלוקחים בו חלק. כשאתם וכל נותני השירות שלכם עובדים באותה מערכת ומקבלים תמונת מצב אחידה מכל מקום ובכל שעה, האירוע שלכם בדרך הנכונה להצלחה!",
    "שומרים על קשר עם האורחי כדי שהאורחים שלכם ירגישו כמה הם חשובים לכם אתם תירצו להיות איתם בקשר. לספר להם על האירוע, לשאול אותם אם הם מגיעים, לברר אם הם צריכים משהו מיוחד, לעדכן אותם שיהיה קריר וכדאי להביא משהו חם, לשלוח הוראות הגעה, לעדכן שיש חניה ואפילו לומר תודה! נשמע מורכב? אנחנו פה בשביל לאפשר לכם לעשות את זה בלחיצת כפתור",
    " ללמוד מכל צע    אנחנו רוצים לעשות לכם סדר בבלאגן, זו הרי הסיבה המרכזית שבגללה אתם משתמשים במערכת שלנו! תנו לנו לעזור לכם להשתמש בכל המידע שתצברו בדרך לאירוע. עם ממשק סטטיסטיקות פשוט ומובן, תדעו בדיוק כמה אורחים הזמנתם, וכמה מגיעים. תוכלו לראות חלוקה ברורה לצדדים הלוקחים חלק באירוע, גם לפי קבוצות ואפילו סיכום של המתנות שקיבלתם."
  ];
  const [indexPlan, setIndexPlan] = useState(10)

  return (
    <div className='grid lg:grid-cols-2 h-full bg-[#eef1f3]  '>
      <section className='max-w-[800px] mx-auto'>
        <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold pt-10 text-center my-5'>תכנון אירוע נעשה פשוט</h1>
        <h3 className='font-bold text-center mb-4'>ליחצו על הלשוניות השונות בכדי לראות את מגוון התכונות שהמערכת מציעה</h3>
        <div>
          <ul className='flex justify-between items-center'>
            <li onClick={() => setIndexPlan(0)} className='grid justify-items-center' >
              <div className=' flex justify-center rounded-full h-20 w-20 item-center  m-auto p-4  text-5xl text-[#0c0c0c]   bg-[#e5af31]'><BsMagic /></div>
              <div><h3 className=' text-[#1b1c1a]  '>שיגור</h3></div>
            </li>

            <li onClick={() => setIndexPlan(1)} className='grid justify-items-center'>
              <div className=' flex justify-center rounded-full h-20 w-20 item-center  m-auto p-4 text-5xl text-[#0c0c0c]   bg-[#e5af31]'><GiMissileLauncher /></div>
              <div> <h3 className='text-[#1b1c1a] '>שיתוף פעולה</h3></div>
            </li>

            <li onClick={() => setIndexPlan(2)} className='grid justify-items-center'>
              <div className=' flex justify-center rounded-full h-20 w-20 item-center  m-auto p-4 text-5xl text-[#0c0c0c]   bg-[#e5af31]'> <BsPhone /></div>
              <div><h3 className='text-[#1b1c1a] '>תקשורת</h3></div>
            </li>

            <li onClick={() => setIndexPlan(3)} className='grid justify-items-center'>
              <div className=' flex justify-center rounded-full h-20 w-20 item-center  m-auto p-4 text-5xl text-[#0c0c0c]   bg-[#e5af31]'> <LiaSchoolSolid /></div>
              <div><h3 className='text-[#1b1c1a]'>למידה</h3></div>
            </li>
          </ul>
        </div>
        
        <div className='w-[500px] my-5 text-start leading-8'>{aboutPlan[indexPlan]}</div>
      </section>

      <section className="h-full hidden lg:block">
        <img className='rotate-180'
          src="https://res.cloudinary.com/dzvdihcc0/image/upload/v1712488056/venue_mxd6d9.jpg" alt="" />
      </section>

    </div>
  )
}
