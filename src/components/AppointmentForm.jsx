import { useState } from "react";

const patients = ["Sarfaraz", "Sara", "John"];
const doctors = ["Dr. Abhi", "Dr. Bhusan", "Dr. John"];

const AppointmentForm = ({ date, onSubmit, onClose }) => {
  const [patient, setPatient] = useState(patients[0]);
  const [doctor, setDoctor] = useState(doctors[0]);
  const [time, setTime] = useState("09:00");

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      date: date.toISOString(),
      patient,
      doctor,
      time,
    };

    onSubmit(appointment);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          New Appointment – {date.toDateString()}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Patient</label>
            <select
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
              className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
            >
              {patients.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Doctor</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
            >
              {doctors.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
              required
            />
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
