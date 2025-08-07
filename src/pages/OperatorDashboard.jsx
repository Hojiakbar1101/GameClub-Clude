import React, { useEffect, useState, useRef } from "react";
import "../styles/OperatorDashboard.css";
import "boxicons/css/boxicons.min.css";
import bgImage from "../assets/L_height.webp"; // o'zing mos rasmni assets ichiga joylashtir

const OperatorDashboard = () => {
  const [showControls, setShowControls] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowControls(currentScroll < lastScrollY.current);
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="operator-dashboard relative w-screen h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Ustidagi qora pardasi */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Kontent */}
      <div className="relative z-10 w-full h-full px-4 py-6 text-white overflow-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-wide flex items-center justify-center gap-3">
            <i className="bx bx-cog bx-spin text-blue-400 text-4xl"></i>
            ОПЕРАТОР ПАНЕЛИ
          </h1>
        </header>

        <section
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-700 ease-in-out px-4 ${
            showControls
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          {/* Kompyuterlar */}
          <PanelCard
            icon="bx bx-laptop-alt bx-flip-vertical bx-beat text-green-400"
            title="КОМПЬЮТЕРЛАР РЎЙХАТИ"
            button="Кўриш"
            color="green"
          />

          {/* Tariflar */}
          <PanelCard
            icon="bx bx-bar-chart text-purple-400"
            title="ТАРИФЛАРНИ БОШҚАРИШ"
            button="Қўшиш / Ўзгартириш"
            color="purple"
          />

          {/* Vaqt belgilash */}
          <PanelCard
            icon="bx bx-timer bx-rotate-90 text-yellow-400"
            title="ВАҚТ БЕЛГИЛАШ"
            button="Вақт қўшиш"
            color="yellow"
          />
        </section>
      </div>
    </div>
  );
};

const PanelCard = ({ icon, title, button, color }) => {
  const bgColor = {
    green: "bg-green-500 hover:bg-green-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
  }[color];

  const shadowColor = {
    green: "hover:shadow-green-500/50",
    purple: "hover:shadow-purple-500/50",
    yellow: "hover:shadow-yellow-500/50",
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
        className={`${bgColor} group-hover:scale-105 transition-all duration-300 text-white px-4 py-2 rounded-xl`}
      >
        {button}
      </button>
    </div>
  );
};

export default OperatorDashboard;
