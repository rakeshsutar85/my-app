import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

function CalendarComponent() {
    const [date, setDate] = useState(new Date());

    return (
        <div style={{ textAlign: "center", marginLeft: "20px" }}>
            <h2>Book Your Appointment</h2>
            <div style={{ marginLeft: "500px" }}>
                <Calendar onChange={setDate} value={date} />
                {/* <p>Selected Date: {date.toDateString()}</p> */}
            </div>
        </div>
    );
}

export default CalendarComponent;
