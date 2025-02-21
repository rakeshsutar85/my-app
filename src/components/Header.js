import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isADASOpen, setIsADASOpen] = useState(false);

  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.title}><a href="/" style={styles.navLink}>Logo</a></h1>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            {/* Services Dropdown */}
            <li
              style={styles.navItem}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href="/about" style={styles.navLink}>Services</a>
              {isServicesOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/about/team" style={styles.navLink}>Data annotation and enhancement</a></li>
                  <li style={styles.dropdownItem}><a href="/about/mission" style={styles.navLink}>Localization - transcription and translation</a></li>
                  <li style={styles.dropdownItem}><a href="/about/history" style={styles.navLink}>Data Validation</a></li>
                  <li style={styles.dropdownItem}><a href="/about/history" style={styles.navLink}>Custom data sourcing</a></li>
                  <li style={styles.dropdownItem}><a href="/about/history" style={styles.navLink}>Content moderation</a></li>
                </ul>
              )}
            </li>

            {/* Solutions Dropdown */}
            <li
              style={styles.navItem}
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <a href="/solutions" style={styles.navLink}>Solutions</a>
              {isSolutionsOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/solutions/ai" style={styles.navLink}>NLP</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/automation" style={styles.navLink}>ADAS</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/analytics" style={styles.navLink}>Document AI</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>AI for Voice & Speech Recognition</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>AI in Education</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>Generative AI</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>Conversational AI</a></li>
                </ul>
              )}
            </li>

            {/* Capabilities Dropdown */}
            <li
              style={styles.navItem}
              onMouseEnter={() => setIsCapabilitiesOpen(true)}
              onMouseLeave={() => setIsCapabilitiesOpen(false)}
            >
              <a href="/solutions" style={styles.navLink}>Capabilities</a>
              {isCapabilitiesOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/solutions/ai" style={styles.navLink}>Custom AI Model Development</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/automation" style={styles.navLink}>AI Model Assurance</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/analytics" style={styles.navLink}>Enhanced AI & LLM Optimization</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>Licensed Data Solutions</a></li>
                </ul>
              )}
            </li>

            {/* ADAS Dropdown */}
            <li
              style={styles.navItem}
              onMouseEnter={() => setIsADASOpen(true)}
              onMouseLeave={() => setIsADASOpen(false)}
            >
              <a href="/solutions" style={styles.navLink}>ADAS</a>
              {isADASOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/solutions/ai" style={styles.navLink}>AI Training Data</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/automation" style={styles.navLink}>Audio Annotation</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/analytics" style={styles.navLink}>Audio Transcription</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>Computer Vision</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>Data Collection</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>Automatic Number Plate Recognition</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>Conversational AI</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>Data Annotation</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>Data Transcription</a></li>
                </ul>
              )}
            </li>

            {/* Company Dropdown */}
            <li
              style={styles.navItem}
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <a href="/solutions" style={styles.navLink}>Company</a>
              {isCompanyOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/solutions/ai" style={styles.navLink}>About</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/automation" style={styles.navLink}>Contact</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/analytics" style={styles.navLink}>Career</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>Jobs</a></li>
                </ul>
              )}
            </li>

            {/* Contact Us Button */}
            <li style={styles.navItem}>
              <Link to="/contact" style={styles.button}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

// Styles for the component
const styles = {
  header: {
    backgroundColor: '#043873',
    padding: '1rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative', // Ensure the header is a positioning context
    zIndex: 100, // Ensure the header stays above other content
  },
  title: {
    margin: '0',
  },
  nav: {
    display: 'flex',
  },
  navList: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    marginLeft: '2rem',
    position: 'relative',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#634c53',
    listStyle: 'none',
    margin: '0',
    padding: '0.5rem 0',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 200, // Ensure dropdowns are above other content
  },
  dropdownItem: {
    padding: '0.5rem 1rem',
    whiteSpace: 'nowrap',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none',
  },
};

export default Header;