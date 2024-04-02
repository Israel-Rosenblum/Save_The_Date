// import React from 'react'

// export default function RadioFilter(props) {
//     const { name, setField, field, customKey, amount } = props;
//     return (
//         <div>
//             <div className='my-4'>
//                 <input id={customKey} name={customKey} type="radio" autoComplete={customKey}
//                     onChange={() => setField({ ...field, [customKey]: amount })}
//                 />
//                 <label className="m-4 text-sm font-medium leading-6 text-gray-900"
//                     htmlFor={customKey}> {name} </label>
//             </div>

//         </div>
//     )
// }

import React from 'react';

const RadioFilter = ({ name, setField, field, customKey, amount }) => {
    const handleChange = () => {
        if (amount === '') {
            setField({});
        } else {
            setField({ ...field, [customKey]: amount });
        }
    };

    return (
        <div className='my-4'>
            <input type="radio"
                id={name} name={customKey} value={amount} checked={field[customKey] === amount} onChange={handleChange} />
            <label className="m-4 text-sm font-medium leading-6 text-gray-900" htmlFor={name}>{name}</label>
        </div>
    );
};

export default RadioFilter;