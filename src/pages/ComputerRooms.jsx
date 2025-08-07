// src/pages/ComputerRooms.jsx
import React, { useState } from "react";
import AddComputerModal from "../components/AddComputerModal";
import ComputerCard from "../components/ComputerCard";

const initialRooms = [
  {
    name: "V2 - xona",
    computers: [
      { id: 1, name: "PC-01", mac: "AA:BB:CC:DD:EE:01", status: "online", timeLeft: "00:45" },
      { id: 2, name: "PC-02", mac: "AA:BB:CC:DD:EE:02", status: "offline", timeLeft: null },
    ],
  },
];

const ComputerRooms = () => {
  const [rooms, setRooms] = useState(initialRooms);
  const [modalOpen, setModalOpen] = useState(false);

  const addComputer = (roomName, newComputer) => {
    setRooms(prev =>
      prev.map(room =>
        room.name === roomName
          ? { ...room, computers: [...room.computers, newComputer] }
          : room
      )
    );
  };

  return (
    <div className="p-6 text-white min-h-screen bg-gradient-to-br from-[#1e1e2f] to-[#151521]">
      <h1 className="text-3xl font-bold mb-6">💻 Комьютерлар рўйхати</h1>

      {rooms.map((room, idx) => (
        <div key={idx} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">{room.name}</h2>
            <button
              onClick={() => setModalOpen(room.name)}
              className="bg-emerald-500 px-4 py-2 rounded-xl hover:bg-emerald-600 transition"
            >
              + Қўшиш
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {room.computers.map(comp => (
              <ComputerCard key={comp.id} computer={comp} />
            ))}
          </div>

          {modalOpen === room.name && (
            <AddComputerModal
              roomName={room.name}
              onClose={() => setModalOpen(false)}
              onAdd={comp => {
                addComputer(room.name, comp);
                setModalOpen(false);
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ComputerRooms;
