import React from 'react'

export default function Checkbok(props) {
    const { name, customKey, type, field, setField } = props;
    return (
        <div className='flex items-center'>
            <input id={customKey} name={customKey} type={type} autoComplete={customKey}
                className='m-4'
                checked={field[customKey]}
                onChange={() => setField({ ...field, [customKey]: !field[customKey] })}
            />
            <label htmlFor={customKey} className='block text-sm font-medium leading-6 text-gray-900'>
                {name}
            </label>
        </div>

    )
}
