import React from "react";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>MyFlix</h1>
      <ul style={styles.menu}>
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>My List</li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#141414",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "red",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    cursor: "pointer",
  },
};
