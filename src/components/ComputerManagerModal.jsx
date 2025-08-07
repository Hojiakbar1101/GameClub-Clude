import React, { useState } from "react";
import "../styles/ComputerManagerModal.css";

const ComputerManagerModal = ({ onClose }) => {
  const [computers, setComputers] = useState([]);
  const [name, setName] = useState("");
  const [zone, setZone] = useState("zal1");

  const handleAdd = () => {
    if (!name.trim()) return;
    setComputers([...computers, { name, zone }]);
    setName("");
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Компьютерларни бошқариш</h2>

        <div className="form">
          <input
            type="text"
            placeholder="Компьютер номи"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={zone} onChange={(e) => setZone(e.target.value)}>
            <option value="zal1">Zal 1</option>
            <option value="zal2">Zal 2</option>
            <option value="zal3">Zal 3</option>
          </select>
          <button onClick={handleAdd}>Қўшиш</button>
        </div>

        <ul className="list">
          {computers.map((comp, i) => (
            <li key={i}>
              <span>{comp.name}</span> - <strong>{comp.zone}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComputerManagerModal;
