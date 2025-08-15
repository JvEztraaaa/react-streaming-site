import React from "react";

export default function Card({ title, image, description }) {
  return (
    <div style={styles.card} className="movie-card">
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#1a1a2e",
    borderRadius: "12px",
    overflow: "hidden",
    width: "200px",
    margin: "10px",
    color: "white",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255,255,255,0.1)",
    cursor: "pointer",
    transform: "scale(1)",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  title: {
    fontSize: "1.1rem",
    margin: "10px 0 5px",
    fontWeight: "600",
    color: "#e0e0e0",
  },
  description: {
    fontSize: "0.9rem",
    color: "#b0b0b0",
    padding: "0 10px 10px",
    lineHeight: "1.4",
  },
};
