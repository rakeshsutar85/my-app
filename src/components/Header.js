import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isADASOpen, setIsADASOpen] = useState(false);

  const { t } = useTranslation(); // Hook for translation

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
              <a href="/about" style={styles.navLink}>{t('header.services')}</a>
              {isServicesOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/about/team" style={styles.navLink}>{t('header.servicesDataAnnotation')}</a></li>
                  <li style={styles.dropdownItem}><a href="/about/mission" style={styles.navLink}>{t('header.servicesLocalization')}</a></li>
                  <li style={styles.dropdownItem}><a href="/about/history" style={styles.navLink}>{t('header.servicesDataValidation')}</a></li>
                  <li style={styles.dropdownItem}><a href="/about/history" style={styles.navLink}>{t('header.servicesCustomData')}</a></li>
                  <li style={styles.dropdownItem}><a href="/about/history" style={styles.navLink}>{t('header.servicesContentModeration')}</a></li>
                </ul>
              )}
            </li>

            {/* Solutions Dropdown */}
            <li
              style={styles.navItem}
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <a href="/solutions" style={styles.navLink}>{t('header.solutions')}</a>
              {isSolutionsOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/solutions/ai" style={styles.navLink}>{t('header.solutionsNLP')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/automation" style={styles.navLink}>{t('header.solutionsADAS')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/analytics" style={styles.navLink}>{t('header.solutionsDocumentAI')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.solutionsVoiceSpeech')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.solutionsAIEducation')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.solutionsGenerativeAI')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.solutionsConversationalAI')}</a></li>
                </ul>
              )}
            </li>

            {/* Capabilities Dropdown */}
            <li
              style={styles.navItem}
              onMouseEnter={() => setIsCapabilitiesOpen(true)}
              onMouseLeave={() => setIsCapabilitiesOpen(false)}
            >
              <a href="/solutions" style={styles.navLink}>{t('header.capabilities')}</a>
              {isCapabilitiesOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/solutions/ai" style={styles.navLink}>{t('header.capabilitiesCustomAI')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/automation" style={styles.navLink}>{t('header.capabilitiesAIModel')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/analytics" style={styles.navLink}>{t('header.capabilitiesLLMOptimization')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.capabilitiesLicensedData')}</a></li>
                </ul>
              )}
            </li>

            {/* ADAS Dropdown */}
            <li
              style={styles.navItem}
              onMouseEnter={() => setIsADASOpen(true)}
              onMouseLeave={() => setIsADASOpen(false)}
            >
              <a href="/solutions" style={styles.navLink}>{t('header.adas')}</a>
              {isADASOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/solutions/ai" style={styles.navLink}>{t('header.adasAITraining')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/automation" style={styles.navLink}>{t('header.adasAudioAnnotation')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/analytics" style={styles.navLink}>{t('header.adasAudioTranscription')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.adasComputerVision')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.adasDataCollection')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.adasNumberPlate')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.adasConversationalAI')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.adasDataAnnotation')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.adasDataTranscription')}</a></li>
                </ul>
              )}
            </li>

            {/* Company Dropdown */}
            <li
              style={styles.navItem}
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <a href="/solutions" style={styles.navLink}>{t('header.company')}</a>
              {isCompanyOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}><a href="/solutions/ai" style={styles.navLink}>{t('header.companyAbout')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/automation" style={styles.navLink}>{t('header.companyContact')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/analytics" style={styles.navLink}>{t('header.companyCareer')}</a></li>
                  <li style={styles.dropdownItem}><a href="/solutions/cloud" style={styles.navLink}>{t('header.companyJobs')}</a></li>
                </ul>
              )}
            </li>

            {/* Contact Us Button */}
            <li style={styles.navItem}>
              <Link to="/contact" style={styles.button}>{t('header.contactUs')}</Link>
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
    position: 'relative',
    zIndex: 100,
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
    zIndex: 200,
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