import React from 'react'
import { BsBank2 } from "react-icons/bs";
import { FaPeopleGroup, FaLocationDot } from "react-icons/fa6";

import { FaPhone } from "react-icons/fa";
export default function ListHalls(props) {
  const { searchResults } = props;
  return (
    <div className="grid  gap-4  md:grid-cols-2 bg-white  basis-3/6   h-[600px] ">
      {Object.keys(searchResults).map((date, index) => (
        <div className='m-4 bg-slate-200 '>
          <div className='  h-[250px]  w-full bg-no-repeat bg-cover bg-bottom bg-yellow-500 '>image</div>
          <h1 className=" text-2xl " key={index}>
            {searchResults[date].hallName}-{searchResults[date].description} </h1>

          <ul className="flex flex-row gap-4 my-5 mx-2 ">
            <li><BsBank2 size={20} /></li>
            <li> {searchResults[date].description}</li>
            <li><FaPeopleGroup size={20} /></li>
            <li>{searchResults[date].amount}</li>
          </ul>

          <ul className="flex flex-row gap-4 my-5 mx-2 border-solid border-2 border-black ">
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
