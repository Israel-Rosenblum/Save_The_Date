import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import OwnerHall from './OwnerHall'
import Display from './Display'
import Hall from './Hall'
import NewHall from './NewHall'
// import Search from './Search'
import DataContext from './context/DataContext'


export default function Content() {
  const nav = useNavigate();
  const parsedOwnerData = JSON.parse(sessionStorage.getItem('ownerDetails'))

  const { selectedDates, setSelectedDates } = useContext(DataContext)
  //פרטי בעל האולם
  const [ownerDetails, setOwnerDetails] = useState(parsedOwnerData || {})

  //מעדכן את בעל האולם ב sessionStorage
  useEffect(() => {
    const ownerDetailsJSON = JSON.stringify(ownerDetails);
    const ownerDetailsKey = 'ownerDetails';
    sessionStorage.setItem(ownerDetailsKey, ownerDetailsJSON);
    if (Object.keys(ownerDetails).length !== 0) {
      nav('/ownerHall');
    }
  }, [ownerDetails])

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
        <Route path='/login' element={<Login setOwnerDetails={setOwnerDetails} />} />
        <Route path='/register' element={<Register setOwnerDetails={setOwnerDetails} />} />
        <Route path='/ownerHall' element={<OwnerHall />} />
        <Route path='/display' element={<Display />} />
        <Route path='/hall' element={<Hall />} />
        <Route path='/newHall' element={<NewHall />} />
        <Route path='*' element={<h1>not found</h1>} />
      </Routes>
    </div>
  )
}
