import React, { useContext } from 'react'
import { BsBank2 } from "react-icons/bs";
import { FaPeopleGroup, FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import DataContext from './context/DataContext';
import { Link } from 'react-router-dom';
export default function ListHalls() {
  const { filterResults } = useContext(DataContext)
  return (

    <div className="grid  gap-4  lg:grid-cols-2   bg-white h-[600px] overflow-auto touch-auto ">
      {Object.keys(filterResults).map((date, index) => (
        <Link to={`/hall/${index}`}>
          <div key={index}
            className='ml-4 bg-slate-200  w-full my-2   '>

            <img className=' h-[250px]  w-full bg-no-repeat bg-cover bg-bottom bg-slate-500  '
              src={filterResults[date].image} alt="" />
            <h1 className=" text-1xl font-bold w-full" key={index}>
              {filterResults[date].hallName}-{filterResults[date].description} </h1>

            <ul className="flex flex-row gap-4 my-5 mx-2 ">
              <li><BsBank2 size={20} /></li>
              <li> {filterResults[date].description}</li>
              <li><FaPeopleGroup size={20} /></li>
              <li>{filterResults[date].amount}</li>
            </ul>

            <ul className="flex flex-row justify-around  my-5 mx-2   ">
              <li><FaPhone size={20} /></li>
              <li>{filterResults[date].phone}</li>
              <li><FaLocationDot size={20} /></li>
              <li className=''>{filterResults[date].city}</li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  )
}
