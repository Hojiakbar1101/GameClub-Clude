import React from "react";

const dummyTariffs = [
  { id: 1, name: "1 соат", price: 6000, duration: 60 },
  { id: 2, name: "2 соат", price: 10000, duration: 120 },
];

const TariffList = ({ onEdit }) => {
  const handleDelete = (id) => {
    const confirm = window.confirm("Ўчиришни хохлайсизми?");
    if (confirm) {
      console.log("Deleting tariff with ID:", id);
      // DELETE so‘rov yuborish
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl max-h-[400px] overflow-auto">
      <h3 className="text-lg font-semibold mb-4">Мавжуд тарифлар</h3>
      <ul className="space-y-3">
        {dummyTariffs.map((tariff) => (
          <li
            key={tariff.id}
            className="flex justify-between items-center bg-gray-700 p-3 rounded"
          >
            <div>
              <p className="font-semibold">{tariff.name}</p>
              <p className="text-sm text-gray-300">
                {tariff.price} сўм / {tariff.duration} дақ.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="text-yellow-400 hover:text-yellow-500"
                onClick={() => onEdit(tariff)}
              >
                <i className="bx bx-edit-alt text-xl"></i>
              </button>
              <button
                className="text-red-400 hover:text-red-500"
                onClick={() => handleDelete(tariff.id)}
              >
                <i className="bx bx-trash text-xl"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TariffList;
