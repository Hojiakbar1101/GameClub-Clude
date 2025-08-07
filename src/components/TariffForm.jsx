import React, { useEffect, useState } from "react";

const TariffForm = ({ editingTariff, onClear }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    if (editingTariff) {
      setName(editingTariff.name || "");
      setPrice(editingTariff.price || "");
      setDuration(editingTariff.duration || "");
    } else {
      clearForm();
    }
  }, [editingTariff]);

  const clearForm = () => {
    setName("");
    setPrice("");
    setDuration("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tariffData = {
      name,
      price: Number(price),
      duration: Number(duration),
    };

    if (editingTariff) {
      console.log("Yangilash:", { id: editingTariff.id, ...tariffData });
      // PUT so‘rovini backendga yuborish kerak
    } else {
      console.log("Yangi tarif:", tariffData);
      // POST so‘rovini backendga yuborish kerak
    }

    clearForm();
    onClear(); // formani tahrirdan chiqarish
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-4 rounded-xl flex flex-col gap-4"
    >
      <h3 className="text-lg font-semibold">
        {editingTariff ? "Тарифни таҳрирлаш" : "Янги тариф қўшиш"}
      </h3>

      <div>
        <label className="block mb-1 text-sm">Номи</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Масалан: 1 соат"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm">Нархи (сўм)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Масалан: 6000"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-sm">Давомийлиги (дақиқа)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Масалан: 60"
          required
        />
      </div>

      <div className="flex justify-between mt-2">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingTariff ? "Сақлаш" : "Қўшиш"}
        </button>

        {editingTariff && (
          <button
            type="button"
            onClick={() => {
              clearForm();
              onClear();
            }}
            className="text-red-400 hover:text-red-500"
          >
            Бекор қилиш
          </button>
        )}
      </div>
    </form>
  );
};

export default TariffForm;
