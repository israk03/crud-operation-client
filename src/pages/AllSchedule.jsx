import { useState } from "react";
import { FaTrash, FaEdit, FaCheck, FaCheckDouble } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllSchedule = () => {
  const loadedSchedules = useLoaderData();
  const [schedules, setSchedules] = useState(loadedSchedules);

  // delete schedule
  const deleteSchedule = (id) => {
    fetch(`http://localhost:4000/delete_schedule/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          const remainingSchedules = schedules.filter(
            (schedule) => schedule._id !== id
          );
          setSchedules(remainingSchedules);
        }
      });
  };

  // update status
  const handleUpdateStatus = (id) => {
    fetch(`http://localhost:4000/update_status/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          const updatedSchedules = schedules.map((schedule) =>
            schedule._id === id ? { ...schedule, isCompleted: true } : schedule
          );
          setSchedules(updatedSchedules);
        }
      });
  };

  return (
    <div className="container mx-auto py-10">
      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-96"
        />
      </div>

      {/* Schedule Table */}
      <div className="overflow-x-auto">
        <table className="table w-full bg-white shadow-md rounded-lg">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-center">
              <th className="px-4 py-2">Seriel</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Day</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          {/* Table Body (Static Data for Design) */}
          <tbody>
            {schedules.length === 0 ? (
              <p className="text-red-500 text-center"> No data available.</p>
            ) : (
              schedules.map((schedule, index) => (
                <tr key={schedule._id} className="border-b text-center">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{schedule.title}</td>
                  <td className="px-4 py-2">{schedule.day}</td>
                  <td className="px-4 py-2">{schedule.time}</td>
                  <td className="px-4 py-2">{schedule.date}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => deleteSchedule(schedule._id)}
                      className="btn btn-xs btn-error text-white"
                    >
                      <FaTrash />
                    </button>
                    <Link to={`/update-schedule/${schedule._id}`}>
                      <button className="btn btn-xs btn-primary text-white">
                        <FaEdit />
                      </button>
                    </Link>

                    <button
                      onClick={() => handleUpdateStatus(schedule._id)}
                      className="btn btn-xs btn-success text-white"
                    >
                      {schedule.isComplete ? <FaCheckDouble /> : <FaCheck />}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSchedule;
