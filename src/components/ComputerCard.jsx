// src/components/ComputerCard.jsx
import React from "react";

const ComputerCard = ({ computer }) => {
  const { name, mac, status, timeLeft } = computer;

  return (
    <div
      className={`p-4 rounded-lg border-2 ${
        status === "online" ? "border-green-500" : "border-red-500"
      } bg-[#2a2a3d] shadow-lg hover:shadow-xl transition duration-300`}
    >
      <h4 className="text-lg font-semibold mb-2">{name}</h4>
      <p className="text-sm text-gray-300">MAC: {mac}</p>
      <p
        className={`text-sm font-medium mt-2 ${
          status === "online" ? "text-green-400" : "text-red-400"
        }`}
      >
        Статус: {status === "online" ? "Онлайн" : "Офлайн"}
      </p>

      {status === "online" && timeLeft && (
        <div className="mt-3 flex items-center gap-2 text-amber-400 font-semibold">
          <i className="bx bx-hourglass bx-spin"></i>
          Вақт: {timeLeft}
        </div>
      )}

      <div className="mt-4 flex gap-3">
        <button className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 text-sm">
          Йўқиш
        </button>
        <button className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 text-sm">
          Ўчириш
        </button>
      </div>
    </div>
  );
};

export default ComputerCard;
