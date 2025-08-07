// components/AdminPanel.jsx
import React from 'react';
import ComputerForm from './ComputerForm';
import ComputerList from './ComputerList';
import '../styles/admin.css';

const AdminPanel = ({ onBack }) => {
  return (
    <div className="admin-container">
      <button className="back-btn" onClick={onBack}>← Ortga</button>
      <h2 className="admin-title">Kompyuterlarni boshqarish</h2>
      
      <ComputerForm />
      <ComputerList />
    </div>
  );
};

export default AdminPanel;
