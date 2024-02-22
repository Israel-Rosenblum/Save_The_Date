import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import TextField from './compoInputs/TextField';

export default function Login({ setOwnerDetails }) {

  const [checkOwner, setCheckOwner] = useState({
    password: "",
    email: ""
  });

  const heandleOwner = async (event) => {
    event.preventDefault();
    const { data } = await axios.post('http://localhost:4000/owner/login', { checkOwner });
    if (data) {
      setOwnerDetails(data);
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          התחברות
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" >
          <TextField setField={setCheckOwner} field={checkOwner} name="אימיל" customKey="email" type="email" />
          <TextField setField={setCheckOwner} field={checkOwner} name="סיסמא" customKey="password" type="password" />
          <div>
            <button onClick={heandleOwner}
              className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " >
              התחברות
            </button>
            <Link to={"/register"}>
              <div
                className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 my-8 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "  >
                הרשמה
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>

  )
}

