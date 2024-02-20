import React from 'react'

export default function TextField(props) {
  const { name, customKey, type, setField, field } = props;
  return (
    <div>
      <label htmlFor={customKey} className="block text-sm font-medium leading-6 text-gray-900">
        {name}
      </label>
      <div className="mt-2 ">
       
        <input  className="block w-full h-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         onChange={(e) => setField({ ...field, [customKey]: e.target.value })}
          id={customKey}
          name={customKey}
          type={type}
          autoComplete={customKey}
          required/>
      </div>
    </div>
  )
}
