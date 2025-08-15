import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Card from "./components/Card";

export default function App() {
  const movies = [
    { title: "Stranger Things", image: "/images/stranger-things.webp", description: "Mystery and supernatural events in a small town." },
    { title: "Wednesday", image: "/images/wednesday.webp", description: "Wednesday Addams investigates strange happenings." },
    { title: "Money Heist", image: "/images/money-heist.webp", description: "A criminal mastermind plans the biggest heist ever." },
    { title: "Squid Game", image: "/images/squid-game.webp", description: "Deadly survival game with high stakes." },
  ];


  return (
    <div style={styles.app}>
      <Navbar />
      <HeroBanner />
      <h2 style={styles.sectionTitle}>Popular on MyFlix</h2>
      <div style={styles.cardContainer}>
        {movies.map((movie, index) => (
          <Card
            key={index}
            title={movie.title}
            image={movie.image}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  app: {
    backgroundColor: "#000",
    minHeight: "100vh",
    color: "white",
    width: "100%",
    fontFamily: "Arial, sans-serif",
  },
  sectionTitle: {
    margin: "20px",
    fontSize: "1.5rem",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
