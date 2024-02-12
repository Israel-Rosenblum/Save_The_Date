import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import "react-multi-date-picker/styles/layouts/mobile.css"
export default function MultiCalender(props) {
    const { setField, field, customKey } = props;
    const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange = async (value) => {
        let data = await value.map(date => date.toString())
        setSelectedDates(data);
        setField({ ...field, [customKey]: data })
    };

    return (
        <div >
            <DatePicker className="rmdp-mobile"
             multiple dateSeparator=" , "
                dayPickerProps={{
                    minDate: new Date()
                }}
                plugins={[
                    <DatePanel />
                ]}
                value={selectedDates}
                onChange={handleDateChange}
            />
        </div>
    );
}