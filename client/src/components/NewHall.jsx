import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TextField from './compoInputs/TextField'
import Checkbok from './compoInputs/Checkbok.buttom'
import MultiCalender from './MultiCalender'
import UploadImage from './upload/UploadImage'
import Cookies from 'js-cookie';

export default function NewHall() {
    const parsData = JSON.parse(localStorage.getItem('userDetails'))
    const nav = useNavigate()
    const [newHall, setNewHall] = useState({
        userId:  parsData._id,
        hallName: "", amount: "", description: "", dates: [],
        about: "", phone: "", city: "", address: "", image: "",
        hall: false, eventGarden: false, Mehadrin: false, kosher: false,
        elevator: false, accessibility: false, parking: false, fleshy: false, dairy: false, vegan: false,
    })

    // console.log(newHall.image);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:4000/hall/createHall', { newHall },
            { headers: { authorization: Cookies.get("token") } })
            console.log("🚀 ~ handleSubmit ~ data", data.dates)
            nav('/login')
        }
        catch (err) {

        }
    };
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" >
                    <div className=' grid  gap-8 '>
                        <TextField name="שם אולם" customKey="hallName" type="text" setField={setNewHall} field={newHall} />
                        <TextField name="מספר אורחים מקסימלי" customKey="amount" type="number" setField={setNewHall} field={newHall} />
                        <TextField name="תיאור" customKey="description" type="textarea" setField={setNewHall} field={newHall} />

                        <div className='w-full  rounded-md font-medium  m-auto mt-9 py-3 text-black'>
                            <span className='md:text-2xl text-xl font-bold   m-auto '>בחר תאריכים פנויים</span>
                            <MultiCalender setField={setNewHall} field={newHall} customKey="dates" />
                        </div>

                        <label id="about">אודות</label>
                        <textarea id="about" name="about" rows="5" cols="50"
                            onChange={(e) => setNewHall({ ...newHall, about: e.target.value })}>
                        </textarea>

                        <TextField name=" טלפון ליצירת קשר" customKey="phone" type="text" setField={setNewHall} field={newHall} />
                        <TextField name="עיר " customKey="city" type="text" setField={setNewHall} field={newHall} />
                        <TextField name="כתובת " customKey="address" type="text" setField={setNewHall} field={newHall} />
                        {/* <TextField name="הכנס קישור לתמונה " customKey="photos" type="file" setField={setNewHall} field={newHall} /> */}
                        <UploadImage setField={setNewHall} field={newHall} />

                        <h1 className='font-bold text-center'>סוג המתחם</h1>
                        <Checkbok name=" אולם אירועים" customKey="hall" type="checkbox" setField={setNewHall} field={newHall} />
                        <Checkbok name="גן אירועים " customKey="eventGarden" type="checkbox" setField={setNewHall} field={newHall} />

                        <h1 className='font-bold text-center'>כשרות</h1>
                        <Checkbok name="כשר למהדרין" customKey="Mehadrin" type="checkbox" setField={setNewHall} field={newHall} />
                        <Checkbok name="כשר " customKey="kosher" type="checkbox" setField={setNewHall} field={newHall} />

                        <h1 className='font-bold text-center'>תפריט</h1>
                        <Checkbok name="בשרי " customKey="fleshy" type="checkbox" setField={setNewHall} field={newHall} />
                        <Checkbok name="חלבי " customKey="dairy" type="checkbox" setField={setNewHall} field={newHall} />
                        <Checkbok name="טבעוני " customKey="vegan" type="checkbox" setField={setNewHall} field={newHall} />

                        <h1 className='font-bold text-center'>יש מעלית?</h1>
                        <Checkbok name="כן " customKey="elevator" type="checkbox" setField={setNewHall} field={newHall} />

                        <h1 className='font-bold text-center'>נגיש לנכים?</h1>
                        <Checkbok name="כן " customKey="accessibility" type="checkbox" setField={setNewHall} field={newHall} />

                        <h1 className='font-bold text-center'>יש חניה?</h1>
                        <Checkbok name="כן " customKey="parking" type="checkbox" setField={setNewHall} field={newHall} />

                    </div>
                    <button onClick={handleSubmit}
                        className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " >
                        צור
                    </button>
                </form>
                <div>

                </div>
            </div>
        </div>
    )
}
