import React, { useState, useRef, useEffect } from "react";
import "../styles/pricing.css";

const plans = [
  { name: "СТАРТ", price: "1 000 ₽ / 1 КУН", devices: "1 ПК ГАЧА" },
  { name: "ЛАЙТ", price: "2 000 ₽ / 30 КУН", devices: "2 ПК ГАЧА" },
  { name: "БАЗОВЫЙ", price: "3 000 ₽ / 30 КУН", devices: "3 ПК ГАЧА" },
  { name: "СТАНДАРТ", price: "4 000 ₽ / 30 КУН", devices: "4 ПК ГАЧА" },
  { name: "ПРО", price: "5 000 ₽ / 30 КУН", devices: "5 ПК ГАЧА" },
  { name: "МАКС", price: "6 000 ₽ / 30 КУН", devices: "6 ПК ГАЧА" },
  { name: "БИЗНЕС", price: "8 000 ₽ / 30 КУН", devices: "8 ПК ГАЧА" },
  { name: "ПРЕМИУМ", price: "10 000 ₽ / 30 КУН", devices: "10 ПК ГАЧА" }
];

const Pricing = () => {
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);



  // 🔄 Auto scroll effect
  useEffect(() => {
    startAutoScroll();

    return () => clearInterval(intervalRef.current); // Cleanup
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
        // Qayta boshiga qaytarish (loop)
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 30); // Asta sekin yuradi
  };

  const pauseScroll = () => clearInterval(intervalRef.current);

  return (
    <section className="pricing">
      <h2 className="pricing-title">ТАРИФЛАР</h2>
      <div
        className="plans-scroll"
        ref={scrollRef}
        onMouseEnter={pauseScroll}
        onMouseLeave={startAutoScroll}
      >
        <div className="plans-wrapper">
          <div className="plans">
            {plans.map((plan, index) => (
              <div
                className={`plan-card ${selected === index ? "active" : ""}`}
                key={index}
                onClick={() => setSelected(index)}
              >
                <h3>
                  <span className="angle">&lt;</span> {plan.name} <span className="angle">&gt;</span>
                </h3>
                <p>{plan.price}</p>
                <p>{plan.devices}</p>
                {selected === index && <div className="badge">ТАНЛАНГАН</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
