import React from 'react'

export default function RadioFilter(props) {
    const { name, setField, field, customKey, amount } = props;
    return (
        <div>
            <div className='my-4'>
                <input id={customKey} name={customKey} type="radio" autoComplete={customKey}
                    onChange={() => setField({ ...field, [customKey]: amount })}
                />
                <label className="m-4 text-sm font-medium leading-6 text-gray-900"
                    htmlFor={customKey}> {name} </label>
            </div>

        </div>
    )
}
