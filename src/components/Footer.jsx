import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h4>📞 БОҒЛАНИШ</h4>
        <p>Телефон: +998 90 123 45 67</p>
        <p>Email: info@pcmanager.uz</p>
        <p>Манзил: ТОШКЕНТ, ЎЗБЕКИСТОН</p>
      </div>

      <div className="footer-center">
        <p>© 2025 PC MANAGER CLOUD. БАРЧА ҲУҚУҚЛАР ҲИМОЯЛАНГАН.</p>
      </div>

      <div className="footer-right">
        <a href="https://t.me/" target="_blank" rel="noreferrer">
          <FaTelegramPlane />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
