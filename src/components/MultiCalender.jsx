import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import "react-multi-date-picker/styles/layouts/mobile.css"

export default function MultiCalender(props) {
    const { setField, field, customKey } = props;
    const [selectedDates, setSelectedDates] = useState([]);
    console.log(selectedDates);

    const handleDateChange = async (value) => {
        let data = await value.map(date => date.toString())
        setSelectedDates(data);
        setField({ ...field, [customKey]: data })
    };

    return (
        <div className='flex '>
            <DatePicker className="rmdp-mobile "
                multiple dateSeparator=" , "
                minDate={new Date()}
                maxDate={new Date().setDate(new Date().getDate() + 100)}
                plugins={[<DatePanel />]}
                value={selectedDates}
                onChange={handleDateChange}

                style={{
                    width: "100%",
                    boxSizing: "border-box",
                    height: "50px"
                }}
                containerStyle={{
                    width: "100%"
                }}
            />
        </div>
    );
}
