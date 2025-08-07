import React, { useState } from "react";
import TariffList from "./TariffList";
import TariffForm from "./TariffForm";

const TariffManager = ({ close }) => {
  const [editingTariff, setEditingTariff] = useState(null);

  const handleEdit = (tariff) => {
    setEditingTariff(tariff);
  };

  const handleClearForm = () => {
    setEditingTariff(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-gray-900 text-white rounded-2xl shadow-xl w-full max-w-4xl p-6 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-2xl hover:text-red-400"
          onClick={close}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">ТАРИФЛАРНИ БОШҚАРИШ</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <TariffForm editingTariff={editingTariff} onClear={handleClearForm} />
          <TariffList onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default TariffManager;
