import React, { useState, useEffect } from 'react';

const images = [
  'image1.jpg', // Replace with actual image URLs
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <div style={{ ...styles.hero, backgroundImage: `url(${images[currentIndex]})` }}>
      {/* Language Selection Dropdown */}
      <div style={styles.languageDropdownContainer}>
        <button style={styles.languageButton} onClick={toggleLanguageDropdown}>
          {selectedLanguage} <span style={styles.arrow}>▼</span>
        </button>
        {isLanguageOpen && (
          <ul style={styles.languageDropdown}>
            {['English', 'Spanish', 'French', 'German', 'Chinese'].map((lang) => (
              <li key={lang} style={styles.languageItem} onClick={() => handleLanguageChange(lang)}>
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Hero Content */}
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
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    color: 'white',
    textAlign: 'left',
    position: 'relative',
    transition: 'background-image 1s ease-in-out',
  },
  heroContent: {
    padding: '10rem',
    borderRadius: '10px',
    textAlign: 'left',
    color: '#043873',
  },
  heroTitle: {
    fontSize: '2.5rem',
    margin: '0 0 1rem 0',
    color: 'white',
  },
  heroText: {
    fontSize: '1.2rem',
    margin: '0 0 2rem 0',
    color: 'white',
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
  languageDropdownContainer: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: 1000,
  },
  languageButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  arrow: {
    marginLeft: '10px',
  },
  languageDropdown: {
    position: 'absolute',
    bottom: '40px',
    left: '0',
    backgroundColor: '#fff',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  },
  languageItem: {
    padding: '10px 20px',
    cursor: 'pointer',
    color: '#333',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.2s',
  },
};

export default Hero;
