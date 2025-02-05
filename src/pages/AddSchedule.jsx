import { useState } from "react";

const AddSchedule = () => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const isCompleted = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    const scheduleData = { title, day, date, time, isCompleted };

    console.log("Schedule Added:", scheduleData);

    // Reset fields after submission
    setTitle("");
    setDay("");
    setDate("");
    setTime("");

    fetch("http://localhost:4000/add_schedule", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(scheduleData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add Gym Schedule
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Title Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Date Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Day</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Day Select */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Day</label>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Select Day
              </option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>

          {/* Time Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center items-center">
            <button
              type="submit"
              className="btn btn-wide bg-pink-500 text-white w-full hover:bg-pink-600"
            >
              Add Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSchedule;
