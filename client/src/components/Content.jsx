import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import UserHall from './userHall'
import Display from './Display'
import Hall from './Hall'
import NewHall from './NewHall'
// import Search from './Search'
import DataContext from './context/DataContext'


export default function Content() {
  const nav = useNavigate();
  const parsedOwnerData = JSON.parse(localStorage.getItem('userDetails'))

  const { selectedDates, setSelectedDates } = useContext(DataContext)
  //פרטי בעל האולם
  const [userDetails, setUserDetails] = useState(parsedOwnerData || {})
  console.log("🚀 ~ Content ~ userDetails", userDetails)

  //מעדכן את בעל האולם ב localStorage
  useEffect(() => {
    if (userDetails) {
      const userDetailsJSON = JSON.stringify(userDetails);
      const userDetailsKey = 'userDetails';
      localStorage.setItem(userDetailsKey, userDetailsJSON);
    }
    //אם הוכנס שם משתמש 
    if (Object.keys(userDetails).length > 0) {
      // אם המשתמש הוא מנהל נעבור להרשמה ואם לא נעבור לאולם עצמו
      userDetails.permission === "admin" ? nav('register') : nav('/userHall');
    }


  }, [userDetails])

  //מציג את תוצאות האולמות שנבחרו
  useEffect(() => {
    if (Object.keys(selectedDates).length !== 0) {
      nav('/display')
    }
  }, [selectedDates])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setUserDetails={setUserDetails} />} />
        <Route path='/register' element={<Register setUserDetails={setUserDetails} />} />
        <Route path='/userHall' element={<UserHall />} />
        <Route path='/display' element={<Display />} />
        <Route path='/hall' element={<Hall />} />
        <Route path='/newHall' element={<NewHall />} />
        <Route path='*' element={<h1>not found</h1>} />
      </Routes>
    </div>
  )
}
