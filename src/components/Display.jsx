import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListHalls from './ListHalls'
import Filter from './Filter'
import Map from './Map'

export default function Display(props) {
  const { selectedDates } = props
  console.log("🚀 ~ Display ~ selectedDates", selectedDates)
  //מערך של תוצאות האולמות
  const [searchResults, setSearchResults] = useState([])
  console.log("🚀 ~ Display ~ searchResults", searchResults)

  useEffect(() => {
    async function getDates() {
      const { data } = await axios.post('http://localhost:4000/hall/search', { selectedDates });
      setSearchResults(data)
    }
    getDates();
  }, [selectedDates])

  return (
    <div className='mt-20 '>
      <h1 className='text-3xl tracking-wide text-center  bg-white '>נמצאו&nbsp;{searchResults.length}&nbsp;תוצאות</h1>
      <div className="flex flex-row">
        <Filter />
        <ListHalls searchResults={searchResults} />
        <Map />
      </div>
    </div>
  )
}
