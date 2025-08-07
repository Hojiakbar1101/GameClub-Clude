// src/components/AddComputerModal.jsx
import React, { useState } from "react";

const AddComputerModal = ({ roomName, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [mac, setMac] = useState("");

  const handleSubmit = () => {
    if (!name || !mac) return alert("Маълумотлар тўлиқ эмас");

    onAdd({
      id: Date.now(),
      name,
      mac,
      status: "offline",
      timeLeft: null,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#222] p-6 rounded-lg w-[90%] max-w-md shadow-xl border border-gray-600">
        <h3 className="text-xl font-bold text-white mb-4">🆕 Янги компьютер қўшиш — {roomName}</h3>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Комьютер номи (PC-01)"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 rounded bg-[#333] text-white placeholder-gray-400 border border-gray-700"
          />
          <input
            type="text"
            placeholder="MAC манзили (AA:BB:CC:DD:EE:FF)"
            value={mac}
            onChange={e => setMac(e.target.value)}
            className="w-full p-2 rounded bg-[#333] text-white placeholder-gray-400 border border-gray-700"
          />
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
          >
            Бекор қилиш
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-emerald-500 text-black font-bold rounded hover:bg-emerald-600"
          >
            Қўшиш
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComputerModal;
