import React from "react";
import "../styles/games.css";

// Ўйинлар ҳақидаги маълумотлар + локал расм номлари
const games = [
  {
    name: "Counter-Strike: Global Offensive",
    genre: "Шутер",
    players: "5v5",
    image: "counter.jpg"
  },
  {
    name: "Dota 2",
    genre: "МОБА",
    players: "5v5",
    image: "Dota2.jpg"
  },
  {
    name: "PUBG",
    genre: "Батл Роял",
    players: "Соло/Дуо/Сквад",
    image: "pubg.jpg"
  },
  {
    name: "FIFA 24",
    genre: "Спорт",
    players: "1v1",
    image: "FIFA24.jpg"
  },
  {
    name: "GTA V",
    genre: "Очиқ дунё",
    players: "Якка/Онлайн",
    image: "gtaV.jpg"
  },
  {
    name: "Call of Duty: Warzone",
    genre: "Шутер",
    players: "Соло/Сквад",
    image: "callofwebp.webp"
  },
  {
    name: "Valorant",
    genre: "Шутер",
    players: "5v5",
    image: "valorant.jpg"
  },
  {
    name: "Fortnite",
    genre: "Батл Роял",
    players: "Соло/Сквад",
    image: "fortnite.jpg"
  }
];

const Games = () => {
  const getImage = (filename) => {
    try {
      return require(`../assets/${filename}`);
    } catch (err) {
      return require("../assets/counter.jpg"); // захира расм
    }
  };

  return (
    <section className="games-section">
      <h2>Мавжуд ўйинлар</h2>
      <div className="games-list">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <img
              src={getImage(game.image)}
              alt={game.name}
              className="game-image"
            />
            <div className="game-info">
              <h3>{game.name}</h3>
              <p><strong>Жанри:</strong> {game.genre}</p>
              <p><strong>Ўйинчилар сони:</strong> {game.players}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
