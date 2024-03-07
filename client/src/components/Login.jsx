import React, { useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
import TextField from './compoInputs/TextField';

export default function Login({ setUserDetails }) {

  const [UserLogin, setUserLogin] = useState({
    password: "",
    email: ""
  });

  const heandleUser = async (event) => {
    event.preventDefault();
    const { data } = await axios.post('http://localhost:4000/user/login', { UserLogin });
    if (data) {
      setUserDetails(data.results);

      const { accessToken } = data.token
      Cookies.set("token", accessToken, { expires: 1 });
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
          <TextField setField={setUserLogin} field={UserLogin} name="אימיל" customKey="email" type="email" />
          <TextField setField={setUserLogin} field={UserLogin} name="סיסמא" customKey="password" type="password" />
          <div>
            <button onClick={heandleUser}
              className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " >
              התחברות
            </button>
            {/* <Link to={"/register"}>
              <div
                className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 my-8 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "  >
                הרשמה
              </div>
            </Link> */}
          </div>
        </form>
      </div>
    </div>

  )
}

