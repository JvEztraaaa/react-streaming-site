import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.copyright}>
        © 2025 Jan Vincent Estrada. Created for educational purposes.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1a1a2e",
    color: "#b0b0b0",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
  copyright: {
    margin: 0,
    fontSize: "0.9rem",
    fontWeight: "400",
  },
};
