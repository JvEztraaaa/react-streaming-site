import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function App() {
  const movies = [
    { title: "Stranger Things", image: "/images/stranger-things.webp", description: "Mystery and supernatural events in a small town." },
    { title: "Wednesday", image: "/images/wednesday.webp", description: "Wednesday Addams investigates strange happenings." },
    { title: "Money Heist", image: "/images/money-heist.webp", description: "A criminal mastermind plans the biggest heist ever." },
    { title: "Squid Game", image: "/images/squid-game.webp", description: "Deadly survival game with high stakes." },
    { title: "Superman", image: "/images/superman.webp", description: "The Man of Steel protects Earth from powerful threats." },
    { title: "Jurassic World", image: "/images/jurassic-world.webp", description: "Dinosaurs roam free in a high-tech theme park gone wrong." },
    { title: "How to Train Your Dragon", image: "/images/httyd.webp", description: "A young Viking befriends a dragon and changes his village forever." },
    { title: "Fantastic Four", image: "/images/fantastic-4.webp", description: "Four astronauts gain superpowers after cosmic radiation exposure." },
  ];

  const anime = [
    { title: "Naruto", image: "/images/naruto.webp", description: "A young ninja seeks to become the strongest in his village." },
    { title: "Your Name", image: "/images/your-name.webp", description: "Two strangers mysteriously swap bodies in this romantic anime." },
    { title: "Dragon Ball", image: "/images/dragon-ball.webp", description: "Goku's epic journey to become the strongest fighter in the universe." },
    { title: "Demon Slayer", image: "/images/demon-slayer.webp", description: "Tanjiro joins the Demon Slayer Corps to save his sister." },
    { title: "Blue Box", image: "/images/blue-box.webp", description: "A high school student's journey through love and basketball." },
    { title: "Cyberpunk", image: "/images/cyberpunk.webp", description: "A futuristic world where technology and humanity collide." },
    { title: "Dress Up Darling", image: "/images/dress-up-darling.webp", description: "A cosplay enthusiast helps a shy girl discover her passion." },
    { title: "Kaiju", image: "/images/kaiju.webp", description: "Giant monsters wreak havoc in this thrilling anime adventure." },
  ];

  return (
    <div style={styles.app}>
      <Navbar />
      <HeroBanner />
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle} className="sectionTitle">Popular on StreamVerse</h2>
        <div style={styles.cardContainer} className="cardContainer">
          {movies.map((movie, index) => (
            <Card
              key={index}
              title={movie.title}
              image={movie.image}
              description={movie.description}
            />
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle} className="sectionTitle">Anime</h2>
        <div style={styles.cardContainer} className="cardContainer">
          {anime.map((animeItem, index) => (
            <Card
              key={`anime-${index}`}
              title={animeItem.title}
              image={animeItem.image}
              description={animeItem.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  app: {
    backgroundColor: "#0a0a0a",
    minHeight: "100vh",
    color: "white",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    overflowX: "hidden",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    margin: "20px",
    fontSize: "1.5rem",
    color: "#e0e0e0",
    fontWeight: "600",
    textAlign: "center",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    gap: "10px",
  },
};
