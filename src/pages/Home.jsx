import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Games from "../components/Games";
import Pricing from "../components/Pricing";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="home-container">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/gameoperator.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional black overlay for readability */}
      <div className="overlay"></div>

      {/* Real content on top */}
      <div className="content">
        <Navbar />

        <section id="about" >
          <About />
        </section>

        <section id="games">
          <Games />
        </section>

        <section id="pricing" >
          <Pricing />
        </section>

        <section>
          <Reviews />
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Home;
