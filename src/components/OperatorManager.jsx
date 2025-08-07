// src/components/OperatorManager.jsx
import React, { useState } from "react";
import OperatorList from "./OperatorList";
import AddOperatorModal from "./AddOperatorModal";

const OperatorManager = ({ close }) => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-gray-900 text-white rounded-2xl shadow-xl w-full max-w-3xl p-6 relative">
        <button
          className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
          onClick={close}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Операторларни Бошқариш
        </h2>

        <OperatorList />

        <div className="mt-6 text-right">
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl"
            onClick={() => setShowAddModal(true)}
          >
            + Оператор қўшиш
          </button>
        </div>

        {showAddModal && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <div className="bg-white text-black rounded-lg p-6 max-w-sm w-full relative">
              <button
                className="absolute top-2 right-3 text-xl text-red-500"
                onClick={() => setShowAddModal(false)}
              >
                ✕
              </button>
              <AddOperatorModal />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OperatorManager;
