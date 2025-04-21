import React, { useState } from "react";
import { FaHome, FaHistory } from "react-icons/fa";
import { MdElectricScooter } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const historyData = [
  {
    id: 1,
    name: "Scooter 1",
    detail: "From Barson Gate to Faculty of Engineering",
    date: "2 hours ago",
  },
  {
    id: 2,
    name: "Scooter 3",
    detail: "From Toshka Gate to Faculty of Engineering",
    date: "7 Feb",
  },
  {
    id: 3,
    name: "Scooter 5",
    detail: "From Toshka Gate to Barson Gate",
    date: "25 Jan",
  },
  {
    id: 4,
    name: "Scooter 3",
    detail: "From Toshka Gate to Barson Gate",
    date: "22 Jan",
  },
  {
    id: 5,
    name: "Scooter 2",
    detail: "From Galaa Gate to Barson Gate",
    date: "25 Feb",
  },
  { id: 6, name: "Scooter 3", detail: "Toshka Gate", date: "15 Jan" },
];

function History() {
  const [query, setQuery] = useState("");

  const filtered = historyData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-b from-orange-200 to-transparent p-4">
        <h1 className="text-center text-xl font-semibold text-gray-700 flex items-center justify-center">
          <FaHistory className="mr-2" /> History
        </h1>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Search for a Specific Scooter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-3/4 max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-auto mt-2 px-4">
        <ul className="space-y-2">
          {filtered.map((item) => (
            <li
              key={item.id}
              className="bg-white flex items-center justify-between p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <MdElectricScooter className="text-2xl text-gray-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">{item.date}</span>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="text-center text-gray-500 py-4">
              No results found.
            </li>
          )}
        </ul>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 p-2 flex justify-around items-center">
        <button className="flex flex-col items-center text-gray-500">
          <Link to="/" className="text-sm text-orange-500">
            <FaHome className="text-xl" />
          </Link>

          <span className="text-xs">Home</span>
        </button>
        <button className="bg-orange-400 p-4 rounded-full shadow-lg text-white -mt-6">
          <Link to="/book-ride" className="text-sm text-orange-100">
            <FiPlus className="text-2xl" />
          </Link>
        </button>
        <button className="flex flex-col items-center text-orange-500">
          <FaHistory className="text-xl" />
          <span className="text-xs">History</span>
        </button>
      </nav>
    </div>
  );
}

export default History;
