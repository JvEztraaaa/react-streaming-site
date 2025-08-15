import React from "react";

export default function Card({ title, image, description }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#141414",
    borderRadius: "10px",
    overflow: "hidden",
    width: "200px",
    margin: "10px",
    color: "white",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
  title: {
    fontSize: "1.1rem",
    margin: "10px 0 5px",
  },
  description: {
    fontSize: "0.9rem",
    color: "#aaa",
    padding: "0 10px 10px",
  },
};
