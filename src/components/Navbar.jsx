import React from "react";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent} className="navContent">
        <h1 style={styles.logo} className="logo">StreamVerse</h1>
        <ul style={styles.menu} className="menu">
          <li style={styles.menuItem} className="menuItem">Home</li>
          <li style={styles.menuItem} className="menuItem">Movies</li>
          <li style={styles.menuItem} className="menuItem">TV Shows</li>
          <li style={styles.menuItem} className="menuItem">My List</li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#141414",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 50px",
    width: "100%",
    maxWidth: "1700px",
    margin: "0 auto",
  },
  logo: {
    fontSize: "2rem",
    fontWeight: "1500",
    color: "#4ecdc4",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    letterSpacing: "2px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    fontFamily: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif",
    textTransform: "uppercase",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "32px",
    margin: 0,
    padding: 0,
  },
  menuItem: {
    cursor: "pointer",
    padding: "6px 14px",
    borderRadius: "20px",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
    fontWeight: "500",
    position: "relative",
    overflow: "hidden",
    ":hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    },
  },
};
