// import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import "react-multi-date-picker/styles/layouts/mobile.css"
export default function MyCalendar(props) {

    const {selectedDates,setSelectedDates}=props;

    const handleDateChange = async (value) => {
        let data = await value.map(date => date.toString())
        setSelectedDates(data);
    };

   
    return (
        <div className='max-w-[800px] mt-40 w-full mx-auto flex flex-col justify-center text-center'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold p-2'>אירוע מושלם בהישג יד</h1>
            <h2 className='md:text-7xl sm:text-6xl text-4xl font-bold  '>עם טכנולוגיה שהופכת חלומות למציאות</h2>
            <h3 className='md:text-2xl text-xl font-bold mt-4 '>חיפוש אולם לפי תאריך</h3>

            {/* <div className='w-80  rounded-md font-medium  m-auto mt-9 py-3 text-black'>
                <span className='md:text-2xl text-xl font-bold   m-auto '>בחר תאריך</span>
                <MultiCalender />
            </div> */}
            <div >
                <DatePicker className="rmdp-mobile "
                    multiple dateSeparator=" , "
                    minDate={new Date()}
                    maxDate={new Date().setDate(new Date().getDate() + 100)}
                    plugins={[<DatePanel />]}
                    value={selectedDates}
                    onChange={handleDateChange}

                    style={{ width: "50%", boxSizing: "border-box", height: "50px" }}
                    containerStyle={{ width: "100%" }} />
            </div>



        </div>

    );
}




