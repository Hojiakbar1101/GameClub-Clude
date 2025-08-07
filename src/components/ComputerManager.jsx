// 📁 components/ComputerManager.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ComputerManager.css";

const ComputerManager = () => {
  const [computers, setComputers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({ name: "", mac: "", room: "" });

  useEffect(() => {
    fetchComputers();
  }, []);

  const fetchComputers = async () => {
    try {
      const res = await axios.get("/api/computers");
      setComputers(res.data);
      const uniqueRooms = [...new Set(res.data.map((c) => c.room))];
      setRooms(uniqueRooms);
    } catch (err) {
      console.error("Error fetching computers:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/computers", form);
      setForm({ name: "", mac: "", room: "" });
      fetchComputers();
    } catch (err) {
      console.error("Error adding computer:", err);
    }
  };

  const handleDelete = async (mac) => {
    if (!window.confirm("Компьютерни ўчиришга ишончингиз комилми?")) return;
    try {
      await axios.delete(`/api/computers/${mac}`);
      fetchComputers();
    } catch (err) {
      console.error("Error deleting computer:", err);
    }
  };

  return (
    <div className="computer-manager text-white">
      <h2 className="text-2xl font-bold mb-4">🖥 Компьютерларни бошқариш</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 rounded-xl mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Комpyтeр номи"
          value={form.name}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="mac"
          placeholder="MAC манзили"
          value={form.mac}
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="room"
          placeholder="Хона номи"
          value={form.room}
          onChange={handleChange}
          required
          className="input"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2 col-span-full"
        >
          ➕ Компьютер қўшиш
        </button>
      </form>

      {rooms.map((room) => (
        <div key={room} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">🏠 {room}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {computers
              .filter((c) => c.room === room)
              .map((c) => (
                <div
                  key={c.mac}
                  className={`bg-gray-900 p-4 rounded-xl shadow-md flex flex-col gap-2 border-l-4 ${
                    c.status === "online"
                      ? "border-green-400"
                      : "border-red-400"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <strong>{c.name}</strong>
                    <span
                      className={`text-sm ${
                        c.status === "online"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {c.status === "online" ? "🟢 Online" : "🔴 Offline"}
                    </span>
                  </div>
                  <div className="text-sm text-gray-300">MAC: {c.mac}</div>
                  <div className="text-sm text-gray-400">🕒 {c.activeTime || "-"}</div>
                  <div className="flex gap-2 mt-2">
                    <button className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">
                      ⏱ Вақт қўшиш
                    </button>
                    <button
                      onClick={() => handleDelete(c.mac)}
                      className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                    >
                      🗑 Ўчириш
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

export default ComputerManager;
