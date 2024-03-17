import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import "react-multi-date-picker/styles/layouts/mobile.css"
import Cookies from 'js-cookie';
import axios from 'axios'

export default function UserCalender({ emptiDate }) {
    //מחזיק את בחירת התאריכים
    const [selectedDates, setSelectedDates] = useState(emptiDate);

    const handleDateChange = async (value) => {
        let data = await value.map(date => date.toString())
        setSelectedDates(data);
      
    };
    const edit = () => {
        console.log(selectedDates);
        axios.post('http://localhost:4000/user/update', selectedDates,
      { headers: { authorization: Cookies.get("token") } })
      .then((response) =>{
        console.log(response);
      })
    }

    return (
        <div className='md:text-2xl sm:text-1xl text-1xl font-bold pt-10 text-center my-3'>
            <DatePicker
                multiple
                plugins={[<DatePanel />]}
                value={selectedDates}
                onChange={handleDateChange}
                onClose={edit}


                style={{
                    width: "100%",
                    boxSizing: "border-box",
                    height: "50px"
                }}
                containerStyle={{
                    width: "50%"
                }}
            />
        </div>
    );
}
