import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentForm from "../components/AppointmentForm";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Load appointments from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("appointments");
    if (stored) setAppointments(JSON.parse(stored));
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowForm(true);
  };

  const handleFormSubmit = (newAppt) => {
    setAppointments([...appointments, newAppt]);
    setShowForm(false);
  };

  const getAppointmentsForDay = (date) => {
    return appointments.filter(
      (appt) => new Date(appt.date).toDateString() === new Date(date).toDateString()
    );
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">📅 Appointment Calendar</h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Calendar */}
        <Calendar
          onClickDay={handleDateClick}
          className="bg-white rounded-md shadow-md p-4"
        />

        {/* Appointments for selected date */}
        <div className="flex-1">
          {selectedDate && (
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold mb-2">
                Appointments for {new Date(selectedDate).toDateString()}
              </h3>
              <ul className="space-y-1">
                {getAppointmentsForDay(selectedDate).map((appt, idx) => (
                  <li key={idx} className="border-b pb-1 text-sm">
                     {appt.patient} with {appt.doctor} at {appt.time}
                  </li>
                ))}
                {getAppointmentsForDay(selectedDate).length === 0 && (
                  <p className="text-sm text-gray-500">No appointments</p>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Appointment Form Modal */}
      {showForm && (
        <AppointmentForm
          date={selectedDate}
          onSubmit={handleFormSubmit}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default CalendarPage;
