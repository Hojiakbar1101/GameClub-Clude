// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Token bo‘lsa, userni yuklaymiz
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get("http://localhost:8000/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser({ ...res.data, token }))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
