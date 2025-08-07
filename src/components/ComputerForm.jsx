// components/ComputerForm.jsx
import React, { useState } from 'react';

const ComputerForm = () => {
  const [name, setName] = useState('');
  const [msc, setMsc] = useState('');
  const [zone, setZone] = useState('zal1');

  const handleSubmit = (e) => {
    e.preventDefault();
    // APIga POST yuboriladi (backend ulanganida)
    console.log({ name, msc, zone });

    // Tozalash
    setName('');
    setMsc('');
    setZone('zal1');
  };

  return (
    <form className="computer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kompyuter nomi"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="MSC kodi"
        value={msc}
        onChange={(e) => setMsc(e.target.value)}
        required
      />
      <select value={zone} onChange={(e) => setZone(e.target.value)}>
        <option value="zal1">Zal 1</option>
        <option value="zal2">Zal 2</option>
      </select>
      <button type="submit">Qo‘shish</button>
    </form>
  );
};

export default ComputerForm;
