import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/LoginModal.css";
const LoginModal = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("operator");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username, role);
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/operator");
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Kirish</h2>
        <input
          type="text"
          placeholder="Foydalanuvchi nomi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="operator">Operator</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleLogin}>Kirish</button>
        <button className="close" onClick={onClose}>Yopish</button>
      </div>
    </div>
  );
};

export default LoginModal;
