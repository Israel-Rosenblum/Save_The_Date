import React, { useContext } from 'react'
import { BsBank2 } from "react-icons/bs";
import { FaPeopleGroup, FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import DataContext from './context/DataContext';

export default function ListHalls() {
  const { searchResults } = useContext(DataContext)
  return (

    <div className="grid  gap-4  lg:grid-cols-2   bg-white h-[600px] overflow-auto touch-auto ">
      {Object.keys(searchResults).map((date, index) => (
        <div key={index}
          className='ml-4 bg-slate-200  w-full my-2   '>
          <div className=' h-[250px]  w-full bg-no-repeat bg-cover bg-bottom bg-yellow-500 '>image</div>

          <h1 className=" text-1xl font-bold w-full" key={index}>
            {searchResults[date].hallName}-{searchResults[date].description} </h1>

          <ul className="flex flex-row gap-4 my-5 mx-2 ">
            <li><BsBank2 size={20} /></li>
            <li> {searchResults[date].description}</li>
            <li><FaPeopleGroup size={20} /></li>
            <li>{searchResults[date].amount}</li>
          </ul>

          <ul className="flex flex-row justify-around p-3 my-5 mx-2 border-solid border-2 border-black ">
            <li><FaPhone size={20} /></li>
            <li>{searchResults[date].phone}</li>
            <li><FaLocationDot size={20} /></li>
            <li className=''>{searchResults[date].city}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}
