import React from "react";
import { motion } from "framer-motion";
import "../styles/reviews.css";

const reviews = [
  {
    user: "Aliyev Sardor",
    comment: "Game Club'dagi atmosfera juda zo'r! Kompyuterlar zamonaviy, xizmat yuqori darajada!",
  },
  {
    user: "Diyorbek Rahimov",
    comment: "O‘yin tanlovi keng va qulay narxlar. Do‘stlar bilan dam olish uchun ideal joy!",
  },
  {
    user: "Zuhra Karimova",
    comment: "Internet tez va o‘yinlar kechikmasdan ishlaydi. Operatorlar juda do‘stona!",
  },
  {
    user: "Абдуллаев Жасур",
    comment: "Мен Game Club'га биринчи марта келганимдаёқ хизматдан жуда мамнун бўлдим. Ҳар бир мижозга эътибор қаратилади. Асосийси, хавфсизлик ва қулайлик таъминланган.",
  },
  {
    user: "Мирзаева Дилноза",
    comment: "Бу ерда фарзандимни ишонч билан қолдирсам бўлади. Назорат кучли, компьютерлар эса болалар учун мослаштирилган. Жуда хурсандман!",
  },
  {
    user: "Шерзодбек Мансуров",
    comment: "Кечқурун дўстларим билан вақт ўтказиш учун бу жойдан яхшироғи йўқ. Ойинлар лицензияланган, экранлар катта ва қулай, овоз тизими эса худди реал ҳаётдаги каби эшитилади.",
  },
];


const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <h2>Фойдаланувчилар фикрлари</h2>
      <div className="review-cards">
        {reviews.map((rev, index) => (
          <motion.div
            className="review-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h4>{rev.user}</h4>
            <p>{rev.comment}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
