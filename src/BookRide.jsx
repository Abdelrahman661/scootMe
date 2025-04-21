import React, { useState } from "react";
import { FaHome, FaHistory } from "react-icons/fa";
import { MdElectricScooter } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const scooters = [
  { id: 1, name: "Scooter A", location: "Faculty Gate", status: "Available" },
  { id: 2, name: "Scooter B", location: "Library Entrance", status: "In Use" },
  { id: 3, name: "Scooter C", location: "Main Quad", status: "Available" },
  { id: 4, name: "Scooter D", location: "Parking Lot", status: "Maintenance" },
];

export default function BookRide() {
  const [query, setQuery] = useState("");

  const filtered = scooters.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.location.toLowerCase().includes(query.toLowerCase())
  );

  const handleBook = (scooter) => {
    alert(`Booking ${scooter.name} at ${scooter.location}`);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-gradient-to-b from-orange-200 to-transparent p-4">
        <h1 className="text-center text-xl font-semibold text-gray-700 flex items-center justify-center">
          <MdElectricScooter className="mr-2 text-orange-500" /> Book a Ride
        </h1>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Search scooters or locations"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-3/4 max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto mt-2 px-4">
        <ul className="space-y-3">
          {filtered.map((s) => (
            <li
              key={s.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MdElectricScooter className="text-2xl text-gray-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">{s.name}</p>
                    <p className="text-sm text-gray-500">{s.location}</p>
                  </div>
                </div>
                <span
                  className={`text-sm font-medium ${
                    s.status === "Available" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {s.status}
                </span>
              </div>
              {s.status === "Available" && (
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => handleBook(s)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition"
                  >
                    Book Now
                  </button>
                </div>
              )}
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="text-center text-gray-500 py-4">
              No scooters match your search.
            </li>
          )}
        </ul>
      </div>

      <nav className="bg-white border-t border-gray-200 p-2 flex justify-around items-center">
        <Link to="/" className="flex flex-col items-center text-gray-500">
          <FaHome className="text-xl" />
          <span className="text-xs">Home</span>
        </Link>

        <Link
          to="/history"
          className="flex flex-col items-center text-gray-500"
        >
          <FaHistory className="text-xl" />
          <span className="text-xs">History</span>
        </Link>
      </nav>
    </div>
  );
}
