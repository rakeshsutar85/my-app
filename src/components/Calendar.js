import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import { useTranslation } from "react-i18next"; // Import the translation hook

function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const { t, i18n } = useTranslation(); // Initialize the translation hook

  // Set the calendar locale based on the current language
  const calendarLocale = i18n.language;

  return (
    <div style={{ textAlign: "center", marginLeft: "200px" }}>
      {/* Translated heading */}
      <h2>{t('calendar.bookAppointment')}</h2>

      {/* Calendar */}
      <div style={{ marginBottom: "20px" }}>
        <Calendar
          onChange={setDate}
          value={date}
          locale={calendarLocale} // Set the calendar locale dynamically
        />
        {/* Translated selected date (optional) */}
        {/* <p>{t('calendar.selectedDate')}: {date.toLocaleDateString(calendarLocale)}</p> */}
      </div>
    </div>
  );
}

export default CalendarComponent;