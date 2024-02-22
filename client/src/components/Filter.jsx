import React, { useContext, useState } from 'react'
import DataContext from './context/DataContext';
import Checkbok from './compoInputs/Checkbok.buttom'
import RadioFilter from './compoInputs/RadioFilter';

export default function Filter() {
  const { searchResults, setFilterResults } = useContext(DataContext);

  const [filter, setFilter] = useState({
    amount: 0, Mehadrin: false, kosher: false,
    fleshy: false, dairy: false, vegan: false,
    eventGarden: false, hall: false,
  })

  const heandleSubmit = async () => {
    // מחזיר מערך רק של true
    const result = {};
    Object.keys(filter).forEach((key) => {
      if (filter[key]) {
        result[key] = filter[key];
      }
    });
    console.log(result);
    // בודק האם השדות תואמים לסינון שנבחר
    const matchingObjects = searchResults.filter((obj2Item) => {
      return Object.keys(result).every((data1) => {
        if (data1 === "amount") {
          return obj2Item[data1] <= result[data1];
        }
        return data1 in obj2Item && obj2Item[data1];
      });
    });
   
    //אם נבחרו סינונים יציג את הסינונים ואם לא נבחרו סינונים העדכן את המצב ההתחלתי
    matchingObjects.length != 0 ?
      setFilterResults(matchingObjects) :
      setFilterResults(searchResults)
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
        <RadioFilter name="עד 200" setField={setFilter} field={filter} customKey="amount" amount="200" />
        <RadioFilter name="עד 300" setField={setFilter} field={filter} customKey="amount" amount="300" />
        <RadioFilter name="עד 400" setField={setFilter} field={filter} customKey="amount" amount="400" />
        <RadioFilter name="עד 500" setField={setFilter} field={filter} customKey="amount" amount="500" />
        <RadioFilter name="מעל 600 " setField={setFilter} field={filter} customKey="amount" amount="10000" />
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
