import React, { useState } from 'react';

const Hero = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // State for dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // State for selected language

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false); // Close dropdown after selection
  };

  return (
    <div style={styles.hero}>
      {/* Language Selection Dropdown */}
      <div style={styles.languageDropdownContainer}>
        <button style={styles.languageButton} onClick={toggleLanguageDropdown}>
          {selectedLanguage} <span style={styles.arrow}>▼</span>
        </button>
        {isLanguageOpen && (
          <ul style={styles.languageDropdown}>
            <li style={styles.languageItem} onClick={() => handleLanguageChange('English')}>English</li>
            <li style={styles.languageItem} onClick={() => handleLanguageChange('Spanish')}>Spanish</li>
            <li style={styles.languageItem} onClick={() => handleLanguageChange('French')}>French</li>
            <li style={styles.languageItem} onClick={() => handleLanguageChange('German')}>German</li>
            <li style={styles.languageItem} onClick={() => handleLanguageChange('Chinese')}>Chinese</li>
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

// Styles for the component
const styles = {
  hero: {
    backgroundImage: 'url(heroimage.jpg)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right',
    color: 'white',
    textAlign: 'center',
    position: 'relative', // Required for absolute positioning of the dropdown
  },
  heroContent: {
    padding: '10rem',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#043873',
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
  languageDropdownContainer: {
    position: 'fixed', // Fixed position to make it overflow across the site
    bottom: '20px',
    left: '20px',
    zIndex: 1000, // Ensure it stays on top of other elements
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
    bottom: '40px', // Position above the button
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
  languageItemHover: {
    backgroundColor: '#f0f0f0',
  },
};

export default Hero;