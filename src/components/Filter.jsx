import React, { useContext, useState } from 'react'
import DataContext from './context/DataContext';
import Checkbok from './Checkbok.buttom'


export default function Filter() {
  const { searchResults, setFilterResults } = useContext(DataContext);
  console.log("🚀 ~ Filter ~ searchResults", searchResults)

  const [filter, setFilter] = useState({
    max200: false, max300: false, max400: false, max500: false, max600: false,
    Mehadrin: false, kosher: false,
    fleshy: false, dairy: false, vegan: false,
    eventGarden: false, hall: false,
  })

  const heandleSubmit = async () => {
    const result = {};
    Object.keys(filter).forEach((key) => {
      if (filter[key]) {
        result[key] = filter[key];
      }
    });
    // console.log("🚀 ~ heandleSubmit ~ result", result)

    const data = Object.values(searchResults).map((data, index) => {
      console.log(searchResults[index][Object.keys(result)[index]] != true);
      // console.log(Object.keys(result)[index]);


    })
   


  }



  return (
    <div className="h-[600px] overflow-auto touch-auto p-2 ">
      <h1 className='my-8 border-b  border-slate-950'>סינונים</h1>

      <details className='m-4 border-b  border-slate-950'>
        <summary className='my-4 font-bold '>סוג מתחם</summary>
        <Checkbok name="גן אירועים  " customKey="eventGarden" type="checkbox" setField={setFilter} field={filter} />
        <Checkbok name="אולם אירועים  " customKey="hall" type="checkbox" setField={setFilter} field={filter} />
      </details>

      <details className='m-4 border-b  border-slate-950'>
        <summary className='my-4 font-bold '>צפי אורחים</summary>
        <Checkbok name="עד 200 " customKey="max200" type="checkbox" setField={setFilter} field={filter} />
        <Checkbok name="עד 300" customKey="max300" type="checkbox" setField={setFilter} field={filter} />
        <Checkbok name="עד 400 " customKey="max400" type="checkbox" setField={setFilter} field={filter} />
        <Checkbok name="עד 500 " customKey="max500" type="checkbox" setField={setFilter} field={filter} />
        <Checkbok name="מעל 600 " customKey="max600" type="checkbox" setField={setFilter} field={filter} />
      </details>

      <details className='m-4 border-b  border-slate-950'>
        <summary className='my-4 font-bold '>כשרות</summary>
        <Checkbok name="כשר " customKey="kosher" type="checkbox" setField={setFilter} field={filter} />
        <Checkbok name="מהדרין " customKey="Mehadrin" type="checkbox" setField={setFilter} field={filter} />
      </details>

      <details className='m-4 border-b  border-slate-950'>
        <summary className='my-4 font-bold  '>תפריט</summary>
        <Checkbok name="בשרי " customKey="fleshy" type="checkbox" setField={setFilter} field={filter} />
        <Checkbok name="חלבי " customKey="dairy" type="checkbox" setField={setFilter} field={filter} />
        <Checkbok name="טבעוני " customKey="vegan" type="checkbox" setField={setFilter} field={filter} />
      </details>

      <div onClick={heandleSubmit} className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
      >חיפוש</div>
    </div>
  )
}
