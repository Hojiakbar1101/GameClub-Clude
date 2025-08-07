// src/components/OperatorList.jsx
import React from "react";

const operators = [
  { id: 1, name: "Ali", username: "ali123" },
  { id: 2, name: "Hasan", username: "hasan456" },
];

const OperatorList = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <ul className="space-y-3">
        {operators.map((op) => (
          <li
            key={op.id}
            className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded"
          >
            <div>
              <p className="text-white font-semibold">{op.name}</p>
              <p className="text-gray-300 text-sm">{op.username}</p>
            </div>
            <button className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
              Ўчириш
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OperatorList;
