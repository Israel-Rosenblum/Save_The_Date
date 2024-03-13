import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import TextField from "./compoInputs/TextField";
import axios from "axios";

export default function Register({ setUserDetails }) {
  const nav = useNavigate();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    email: "",
  });

  const createUser = async (event) => {
    event.preventDefault();
    const { data } = await axios.post('http://localhost:4000/user/create', { newUser });
    console.log(data);
    if (data) {
      setUserDetails(data)

    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          הרשם לבעל אולם חדש
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={createUser}>
          <TextField setField={setNewUser} field={newUser} name="שם פרטי" customKey="firstName" type="text" />
          <TextField setField={setNewUser} field={newUser} name="שם משפחה" customKey="lastName" type="text" />
          <TextField setField={setNewUser} field={newUser} name="אימיל" customKey="email" type="email" />
          <TextField setField={setNewUser} field={newUser} name="טלפון" customKey="phone" type="tel" />
          <TextField setField={setNewUser} field={newUser} name="סיסמא" customKey="password" type="password" />

          <button
            className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          >
            הרשמה
          </button>
        </form>
      </div>
    </div>
  );
}


