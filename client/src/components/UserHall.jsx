import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserCalender from './userCalender'

export default function UserHall() {
  // const nav = useNavigate()
  const parsData = JSON.parse(localStorage.getItem('userDetails'))
  const id = parsData._id
  // console.log("🚀 ~ UserHall ~ id", id)

  //מציג את כל האולמות שבבעלותו
  const [userHallData, setUserHallData] = useState([])

  //מציג את האולמות שבבעלותו בעזרת הid
  useEffect(() => {
    const getOwnerHall = async () => {
      try {
        const { data } = await axios.post('http://localhost:4000/user/id', { id });
        if (data) {
          // console.log("🚀 ~ getOwnerHall ~ data", data)
          setUserHallData(data)
        }
      }
      catch (err) {
        console.log("error getting");
      }
    }
    getOwnerHall();
  }, []);

  return (
    <div >
      {/* אם קיים בעל אולם מוצג באולמות שבבעלותו */}
      {userHallData && userHallData.length > 0 && userHallData.map((data, index) => (
        <div key={index} >
          <div >
            <img className='my-5 border rounded-2xl h-[750px] w-full bg-no-repeat bg-cover bg-bottom  '
              src={userHallData[index]?.image} alt="" />
          </div>
          <div className='text-white mt-20 max-w-[1240px]' >
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold p-2 m-2'>
              {userHallData[index]?.hallName}
            </h1>
          </div>
          <h2 className='md:text-3xl sm:text-2xl text-1xl font-bold m-2 border-b my-4'>
            {userHallData[index]?.description}
          </h2>
          <div>
            <ul className='text-white flex justify-around items-center mt-9  h-24 max-w-[600px] mx-auto px-4  border-b '>
              <div className=' text-center  '>
                <span className="material-symbols-outlined">groups</span>
                <li className='p-4'>{userHallData[index]?.amount}</li>
              </div>
              <div className=' text-center'>
                <span className="material-symbols-outlined">lunch_dining</span>
                <li className='p-4'>{userHallData[index]?.kosher && "כשר רבנות"}{userHallData[0]?.Mehadrin && "מהדרין "}</li>
              </div>
              <div className=' text-center'>
                <span className="material-symbols-outlined">location_city</span>
                <li className='p-4'>{userHallData[index]?.hall && "אולם "}/{userHallData[0]?.eventGarden && " גן אירועים "}</li>
              </div>
              <div className=' text-center'>
                <span className="material-symbols-outlined">location_on</span>
                <li className='p-4'>{userHallData[index]?.city}</li>
              </div>
            </ul>
          </div>
          <div  >
            <h1 className=' mx-auto text-2xl px-10 pt-3  '>אודות</h1>
            <div className='p-10 flex flex-row items-center md:w-[800px]  mx-auto leading-loose '>
              {userHallData[index]?.about}</div>
          </div>
          <div>
            <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold pt-10 text-center my-3'>עדכן את הלוח שנה שלך</h1>
            <UserCalender emptiDate={userHallData[index]?.dates} />
          </div>
          <div className='bg-white grid md:grid-cols-2 gap-8  '>
            <div className='my-10  ' >
              <h1 className=' bg-[#778D45] text-white max-w-96 mt-20 h-12 text-center p-3 mx-auto '>
                יצירת קשר/הצעת מחיר</h1>
              <h2 className='max-w-96 mt-5 h-12 text-center mx-auto text-2xl '>
                {userHallData[index]?.phone}</h2>
              <div className=' flex justify-around max-w-96 mt-2 h-12 text-center p-3 mx-auto bg-[#778D45] text-white mb-8'>
                <span className="material-symbols-outlined">call</span>
                <span className="material-symbols-outlined">mail</span>
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
            </div>
          </div>
        </div>
      )) }
    </div>
  )
}

 
    