import React from "react";

export default function HeroBanner() {
  return (
    <div style={styles.heroContainer}>
      <div style={styles.heroBackground}>
        <img 
          src="/images/hero-banner.webp" 
          alt="Demon Slayer" 
          style={styles.heroImage} 
        />
        <div style={styles.heroOverlay}></div>
      </div>
      
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Demon Slayer</h1>
        <p style={styles.heroDescription}>
          A young boy named Tanjiro becomes a demon slayer after his family is attacked and his sister is turned into a demon.
        </p>
        <div style={styles.heroButtons}>
          <button style={styles.playButton}>
            <span style={styles.playIcon}>▶</span>
            Play
          </button>
          <button style={styles.moreInfoButton}>
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroContainer: {
    position: "relative",
    height: "80vh",
    width: "100%",
    overflow: "hidden",
    marginBottom: "40px",
  },
  heroBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
  },
  heroContent: {
    position: "absolute",
    bottom: "20%",
    left: "4%",
    maxWidth: "600px",
    zIndex: 2,
  },
  heroTitle: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    margin: "0 0 20px 0",
    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
  },
  heroDescription: {
    fontSize: "1.2rem",
    margin: "0 0 30px 0",
    lineHeight: "1.5",
    textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
    maxWidth: "500px",
  },
  heroButtons: {
    display: "flex",
    gap: "15px",
  },
  playButton: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "white",
    color: "black",
    border: "none",
    padding: "12px 30px",
    borderRadius: "5px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  playIcon: {
    fontSize: "1.2rem",
  },
  moreInfoButton: {
    backgroundColor: "rgba(109, 109, 110, 0.7)",
    color: "white",
    border: "none",
    padding: "12px 30px",
    borderRadius: "5px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
