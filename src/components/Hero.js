import React from 'react';

const Hero = () => {
  return (
    <div style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Welcome to Our Platform</h1>
        <p style={styles.heroText}>Your one-stop solution for all data-related services.</p>
        <button style={styles.heroButton}>Get Started</button>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    backgroundImage: 'url(heroimage.jpg)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    color: 'white',
    textAlign: 'center',
    
  },
  heroContent: {
    
    padding: '10rem',
    borderRadius: '10px',
    textAlign: 'center',
    color:'#043873',
  },
  heroTitle: {
    fontSize: '2.5rem',
    margin: '0 0 1rem 0',
  },
  heroText: {
    fontSize: '1.2rem',
    margin: '0 0 2rem 0',
  },
  heroButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Hero;