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

  const handleSubmit = async () => {
    // Create an empty object to store selected filters
    const selectedFilters = {};

    // Filter out unchecked checkboxes and unselected radio buttons
    Object.keys(filter).forEach((key) => {
      if (filter[key] !== false) { // Check for non-false values (true or custom values)
        selectedFilters[key] = filter[key];
      }
    });

    // Filter searchResults based on selectedFilters
    const matchingObjects = searchResults.filter((obj2Item) =>
      Object.keys(selectedFilters).every((data1) => {
        if (data1 === "amount") {
          return obj2Item[data1] >= selectedFilters[data1]
            && obj2Item[data1] <= parseInt(selectedFilters[data1]) + 150;
        } else if (data1 in obj2Item && obj2Item[data1] === selectedFilters[data1]) {
          return true;
        }
        return false;
      })
    );

    // Update setFilterResults only if there are matching objects
    setFilterResults(matchingObjects.length > 0 ? matchingObjects : []);
  };



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
        <RadioFilter name=" 200-350" setField={setFilter} field={filter} customKey="amount" amount="200" />
        <RadioFilter name=" 350-500" setField={setFilter} field={filter} customKey="amount" amount="350" />
        <RadioFilter name=" 500-650" setField={setFilter} field={filter} customKey="amount" amount="500" />
        <RadioFilter name=" 650-800" setField={setFilter} field={filter} customKey="amount" amount="600" />
        <RadioFilter name=" 800-950 " setField={setFilter} field={filter} customKey="amount" amount="800" />
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

      <div onClick={handleSubmit} className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
      >חיפוש</div>
    </div>
  )
}
