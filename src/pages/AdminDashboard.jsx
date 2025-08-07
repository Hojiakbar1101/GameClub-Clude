import React, { useEffect, useState, useRef } from "react";
import "../styles/AdminDashboard.css";
import "boxicons/css/boxicons.min.css";
import bgImage from "../assets/admin_bg.jpg";
import { useNavigate } from "react-router-dom";

import ComputerRooms from "./ComputerRooms";
import OperatorManager from "../components/OperatorManager";
import TariffManager from "../components/TariffManager";
import ComputerManager from "../components/ComputerManager"; // YANGI

const AdminDashboard = () => {
  const [showControls, setShowControls] = useState(true);
  const [showComputerModal, setShowComputerModal] = useState(false);
  const [showOperatorModal, setShowOperatorModal] = useState(false);
  const [showTariffModal, setShowTariffModal] = useState(false);
  const [showAddComputer, setShowAddComputer] = useState(false); // YANGI
  const lastScrollY = useRef(window.scrollY);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowControls(currentScroll < lastScrollY.current);
      lastScrollY.current = currentScroll;
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains("dashboard-wrapper")) {
        navigate("/");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [navigate]);

  return (
    <div
      className="operator-dashboard dashboard-wrapper relative w-screen h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/80 z-0" />

      <div className="relative z-10 w-full h-full px-4 py-6 text-white overflow-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-wide flex items-center justify-center gap-3 text-blue-300">
            <i className="bx bxs-shield bx-burst text-4xl"></i>
            АДМИН ПАНЕЛИ
          </h1>
        </header>

        <section
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-700 ease-in-out px-4 ${
            showControls
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <PanelCard
            icon="bx bx-laptop bx-tada text-cyan-400"
            title="КОМПЬЮТЕРЛАР РЎЙХАТИ"
            button="Бошқариш"
            color="cyan"
            onClick={() => setShowComputerModal(true)}
          />

          <PanelCard
            icon="bx bx-layer-plus bx-flashing text-purple-400"
            title="ТАРИФЛАР"
            button="Бошқариш"
            color="purple"
            onClick={() => setShowTariffModal(true)}
          />

          <PanelCard
            icon="bx bx-user-pin text-red-400"
            title="ОПЕРАТОРЛАРНИ БОШҚАРИШ"
            button="Кўриш"
            color="red"
            onClick={() => setShowOperatorModal(true)}
          />

          <PanelCard
            icon="bx bx-plus-circle text-green-400"
            title="КОМПЬЮТЕР ҚЎШИШ"
            button="Янгисини Қўшиш"
            color="green"
            onClick={() => setShowAddComputer(true)}
          />

          <PanelCard
            icon="bx bx-data text-indigo-400"
            title="СТАТИСТИКА ВА ЖУРНАЛ"
            button="Кўриш"
            color="indigo"
          />
        </section>
      </div>

      {/* 🔹 Modallar */}
      {showComputerModal && <ComputerModal close={() => setShowComputerModal(false)} />}
      {showOperatorModal && <OperatorManager close={() => setShowOperatorModal(false)} />}
      {showTariffModal && <TariffModal close={() => setShowTariffModal(false)} />}
      {showAddComputer && <AddComputerModal close={() => setShowAddComputer(false)} />}
    </div>
  );
};

const PanelCard = ({ icon, title, button, color, onClick }) => {
  const bgColor = {
    cyan: "bg-cyan-500 hover:bg-cyan-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    yellow: "bg-yellow-400 hover:bg-yellow-500",
    teal: "bg-teal-500 hover:bg-teal-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    indigo: "bg-indigo-500 hover:bg-indigo-600",
  }[color];

  const shadowColor = {
    cyan: "hover:shadow-cyan-400/50",
    purple: "hover:shadow-purple-400/50",
    yellow: "hover:shadow-yellow-300/50",
    teal: "hover:shadow-teal-400/50",
    red: "hover:shadow-red-400/50",
    green: "hover:shadow-green-400/50",
    indigo: "hover:shadow-indigo-400/50",
  }[color];

  return (
    <div
      className={`bg-gray-800 bg-opacity-90 p-6 rounded-2xl shadow-lg ${shadowColor} transition-all duration-300 group h-full`}
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
        <i className={`${icon} text-3xl`}></i>
        {title}
      </h3>
      <button
        onClick={onClick}
        className={`${bgColor} group-hover:scale-105 transition-all duration-300 text-white px-4 py-2 rounded-xl`}
      >
        {button}
      </button>
    </div>
  );
};

// 💻 Kompyuterlar Modal
const ComputerModal = ({ close }) => (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
    <div className="bg-gray-900 text-white rounded-2xl shadow-xl w-full max-w-5xl p-6 relative animate-fadeIn scale-105">
      <button
        className="absolute top-3 right-3 text-white text-2xl hover:text-red-400 transition-all"
        onClick={close}
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-6">КОМПЬЮТЕРЛАРНИ БОШҚАРИШ</h2>
      <ComputerRooms />
    </div>
  </div>
);

// ➕ Kompyuter Qo‘shish Modal
const AddComputerModal = ({ close }) => (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
    <div className="bg-gray-900 text-white rounded-2xl shadow-xl w-full max-w-3xl p-6 relative animate-fadeIn">
      <button
        className="absolute top-3 right-3 text-white text-2xl hover:text-red-400 transition-all"
        onClick={close}
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-4">ЯНГИ КОМПЬЮТЕР ҚЎШИШ</h2>
      <ComputerManager onClose={close} />
    </div>
  </div>
);

// 📶 Tarif Modal
const TariffModal = ({ close }) => (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
    <div className="bg-gray-900 text-white rounded-2xl shadow-xl w-full max-w-4xl p-6 relative animate-fadeIn">
      <button
        className="absolute top-3 right-3 text-white text-2xl hover:text-red-400 transition-all"
        onClick={close}
      >
        ✕
      </button>
      <TariffManager close={close} />
    </div>
  </div>
);

export default AdminDashboard;
