import React, { useState } from "react";
import ComputerManager from "../components/ComputerManager"; // shu faylni yozilgan bo‘lishi kerak

const dummyRooms = [
  {
    id: 1,
    name: "1-хона",
    computers: [
      {
        id: 1,
        name: "PC-1",
        mac: "00:1A:2B:3C:4D:5E",
        online: true,
        timeRemaining: "00:45",
      },
      {
        id: 2,
        name: "PC-2",
        mac: "00:1A:2B:3C:4D:5F",
        online: false,
        timeRemaining: null,
      },
    ],
  },
  {
    id: 2,
    name: "2-хона",
    computers: [
      {
        id: 3,
        name: "PC-3",
        mac: "00:1A:2B:3C:4D:60",
        online: true,
        timeRemaining: "01:20",
      },
    ],
  },
];

const ComputerRooms = () => {
  const [rooms, setRooms] = useState(dummyRooms);
  const [showManager, setShowManager] = useState(false);

  const handleDelete = (roomId, computerId) => {
    const confirm = window.confirm("Ушбу компютерни ўчиришни хохлайсизми?");
    if (!confirm) return;

    const updatedRooms = rooms.map((room) => {
      if (room.id === roomId) {
        return {
          ...room,
          computers: room.computers.filter((comp) => comp.id !== computerId),
        };
      }
      return room;
    });
    setRooms(updatedRooms);
  };

  const handleSetTime = (roomId, computerId) => {
    const minutes = prompt("Вақтни (дақиқа) киритинг:");
    if (!minutes || isNaN(minutes)) return;

    const updatedRooms = rooms.map((room) => {
      if (room.id === roomId) {
        return {
          ...room,
          computers: room.computers.map((comp) => {
            if (comp.id === computerId) {
              return {
                ...comp,
                online: true,
                timeRemaining: `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(
                  minutes % 60
                ).padStart(2, "0")}`,
              };
            }
            return comp;
          }),
        };
      }
      return room;
    });

    setRooms(updatedRooms);
  };

  return (
    <div className="space-y-8">
      <div className="text-right">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm"
          onClick={() => setShowManager(true)}
        >
          + Компьютер қўшиш
        </button>
      </div>

      {showManager && (
        <div className="bg-gray-800 p-4 rounded-xl mt-4">
          <ComputerManager onClose={() => setShowManager(false)} />
        </div>
      )}

      {rooms.map((room) => (
        <div key={room.id} className="bg-gray-800 p-5 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-blue-300">{room.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {room.computers.map((comp) => (
              <div
                key={comp.id}
                className="bg-gray-700 rounded-xl p-4 flex flex-col justify-between shadow-md"
              >
                <div className="mb-2">
                  <h4 className="font-semibold text-lg">{comp.name}</h4>
                  <p className="text-sm text-gray-300">MAC: {comp.mac}</p>
                  <p
                    className={`text-sm font-semibold mt-1 ${
                      comp.online ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {comp.online ? "Online" : "Offline"}
                  </p>
                  {comp.online && (
                    <p className="text-yellow-400 text-sm">
                      Вақт: {comp.timeRemaining}
                    </p>
                  )}
                </div>
                <div className="flex justify-between gap-2 mt-2">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm"
                    onClick={() => handleSetTime(room.id, comp.id)}
                  >
                    Вақт Белгилаш
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
                    onClick={() => handleDelete(room.id, comp.id)}
                  >
                    Ўчириш
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComputerRooms;
