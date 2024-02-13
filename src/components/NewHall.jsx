import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TextField from './TextField'
import Checkbok from './Checkbok.buttom'
import MultiCalender from './MultiCalender'
export default function NewHall() {
    const parsData = JSON.parse(sessionStorage.getItem('ownerDetails'))
    const nav = useNavigate()
    // const [image, setImage] = useState([])
    const [newHall, setNewHall] = useState({
        userId: parsData._id,
        hallName: "",
        amount: "",
        description: "",
        dates: [],
        about: "",
        phone: "",
        city: "",
        address: "",
        photos: [],
        hall: false,
        eventGarden: false,
        Mehadrin: false,
        kosher: false,
        elevator: false,
        accessibility: false,
        parking: false
    })
    console.log(newHall.photos);
    // console.log(image);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:4000/hall', { newHall });
            console.log("🚀 ~ handleSubmit ~ data", data.dates)
            nav('/ownerHall')
        }
        catch (err) {

        }
    };
    
    // const handleFileChange = async (e) => {
    //     const file = e.target.files[0]; // Get the first selected file
      
    //     if (!file) {
    //       return; // Handle no file selected case
    //     }
      
    //     const blob = file.slice(0, file.size);
    //     const buffer = Buffer.from(blob);
    //     const binaryData = buffer.toString('binary');
      
    //     console.log(binaryData);
    //   };
      

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
                        <TextField name="הכנס קישור לתמונה " customKey="photos" type="file" setField={setNewHall} field={newHall} />

                        {/* <input name="הכנס קישור לתמונה " customKey="photos" type="file" onChange={handleFileChange} /> */}

                        <h1 className='font-bold text-center'>סוג המתחם</h1>
                        <Checkbok name=" אולם אירועים" customKey="hall" type="checkbox" setField={setNewHall} field={newHall} />
                        <Checkbok name="גן אירועים " customKey="eventGarden" type="checkbox" setField={setNewHall} field={newHall} />

                        <h1 className='font-bold text-center'>כשרות</h1>
                        <Checkbok name="כשר למהדרין" customKey="Mehadrin" type="checkbox" setField={setNewHall} field={newHall} />
                        <Checkbok name="כשר " customKey="kosher" type="checkbox" setField={setNewHall} field={newHall} />

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
