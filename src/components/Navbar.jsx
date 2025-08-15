import React from "react";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <h1 style={styles.logo}>StreamVerse</h1>
        <ul style={styles.menu}>
          <li style={styles.menuItem}>Home</li>
          <li style={styles.menuItem}>Movies</li>
          <li style={styles.menuItem}>TV Shows</li>
          <li style={styles.menuItem}>My List</li>
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
    padding: "4px 100px",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    fontSize: "1.4rem",
    fontWeight: "800",
    color: "#ffffff",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "24px",
    margin: 0,
    padding: 0,
  },
  menuItem: {
    cursor: "pointer",
    padding: "4px 12px",
    borderRadius: "16px",
    transition: "all 0.3s ease",
    fontSize: "0.85rem",
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
