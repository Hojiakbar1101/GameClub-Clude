import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        PC Manager Cloud
      </div>

      <nav className="navbar-links">
        <button onClick={() => scrollToSection("about")}>Бош саҳифа</button>
        <button onClick={() => scrollToSection("games")}>Ўйинлар</button>
        <button onClick={() => scrollToSection("pricing")}>Тарифлар</button>
        <button onClick={() => scrollToSection("reviews")}>Рейтинг</button>
      </nav>

      <div className="navbar-actions">
        <button className="login-btn" onClick={() => navigate("/login")}>Кириш</button>
      </div>
    </header>
  );
};

export default Navbar;
