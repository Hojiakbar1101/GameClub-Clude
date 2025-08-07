// src/services/auth.js
import axios from "axios";

export const loginUser = async ({ username, password }) => {
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  const res = await axios.post("http://localhost:8000/api/login", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const token = res.data.access_token;
  localStorage.setItem("token", token);

  // Foydalanuvchini aniqlash
  const userRes = await axios.get("http://localhost:8000/api/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    ...userRes.data,
    token,
  };
};
