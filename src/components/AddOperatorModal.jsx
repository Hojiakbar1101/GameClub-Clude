// src/components/AddOperatorModal.jsx
import React, { useState } from "react";

const AddOperatorModal = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yangi operator:", { name, username, password });
    // ✅ Backendga POST yuboriladi (keyinchalik)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-bold mb-4">Янги Оператор</h3>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="ФИО"
          className="w-full border px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Логин"
          className="w-full border px-3 py-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          className="w-full border px-3 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Қўшиш
        </button>
      </div>
    </form>
  );
};

export default AddOperatorModal;
