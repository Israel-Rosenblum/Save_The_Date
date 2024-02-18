import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import ListHalls from './ListHalls'
import Filter from './Filter'
import Map from './Map'
import DataContext from './context/DataContext'

export default function Display() {
  const { selectedDates, searchResults, setSearchResults } = useContext(DataContext)
  //מציג את כל האולמות שנבחרו לפי התאריך
  useEffect(() => {
    async function getDates() {
      const { data } = await axios.post('http://localhost:4000/hall/search', { selectedDates });
      setSearchResults(data)
    }
    getDates();
  }, [selectedDates])

  return (
    <div className='mt-20  bg-white '>
      <h1 className='text-3xl tracking-wide text-center  bg-white'>נמצאו&nbsp;{searchResults.length}&nbsp;תוצאות</h1>
      <div className="flex  justify-around gap-4 p-2">
        <div className="h-full  w-full max-w-60 hidden lg:block">
          <Filter />
        </div>
        <div className="h-full bg-yellow-500 w-full ">
          <ListHalls />
        </div>
        <div className="h-full bg-orange-500 max-w-[450px] w-full hidden xl:block ">
          <Map />
        </div>
      </div>


    </div>
  )
}
