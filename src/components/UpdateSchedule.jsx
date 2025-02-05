import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateSchedule = () => {
  const singleSchedule = useLoaderData();
  console.log(singleSchedule);
  const [title, setTitle] = useState(singleSchedule?.title);
  const [day, setDay] = useState(singleSchedule?.day);
  const [date, setDate] = useState(singleSchedule?.date);
  const [time, setTime] = useState(singleSchedule?.time);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSchedule = { title, day, date, time };
    console.log("Updated Schedule:", updatedSchedule);

    // Reset fields after submission (Optional)
    setTitle("");
    setDay("Sunday");
    setDate("");
    setTime("");

    // Update Schedule
    fetch(`http://localhost:4000/update_schedule/${singleSchedule._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSchedule),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Updated Schedule:", result);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Gym Schedule
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
              placeholder="Enter Title"
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
              Update Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSchedule;
