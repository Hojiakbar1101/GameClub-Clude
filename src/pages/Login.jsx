// Login.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/auth";
import "../styles/Login.css";

function Login() {
  const { setUser } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [exitAnim, setExitAnim] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const user = await loginUser(formData);
    setUser(user);

    // Rolga qarab sahifani o‘zgartirish
    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else if (user.role === "operator") {
      navigate("/operator/dashboard");
    } else {
      navigate("/user/home");
    }
  } catch (err) {
    setError("Кириш муваффақиятсиз. Маълумотларни қайта текширинг.");
  }
};


  const handleClose = () => {
    setExitAnim(true);
    setTimeout(() => navigate("/"), 1200);
  };

  return (
    <div className={`login-container ${exitAnim ? "fade-out" : ""}`}>
      <img src="/images/gameclub-bg.jpg" alt="bg" className="background-img" />

      <motion.div
        className="login-box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className="close-btn" onClick={handleClose}>
          ✖
        </button>

        <h2 className="login-title">GAME CLUB</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Фойдаланувчи номи"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Парол"
            onChange={handleChange}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn">КИРИШ</button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;