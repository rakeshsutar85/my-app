import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const Footer = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  // Define services, solutions, and company links using translation keys
  const services = [
    { title: t('footer.services.dataAnnotation'), url: '/' },
    { title: t('footer.services.localization'), url: '/about' },
    { title: t('footer.services.dataValidation'), url: '/services' },
    { title: t('footer.services.customDataSourcing'), url: '/portfolio' },
    { title: t('footer.services.contentModeration'), url: '/portfolio' },
  ];

  const solutions = [
    { title: t('footer.solutions.nlp'), url: '/' },
    { title: t('footer.solutions.adas'), url: '/about' },
    { title: t('footer.solutions.documentAI'), url: '/services' },
    { title: t('footer.solutions.voiceSpeechRecognition'), url: '/services' },
    { title: t('footer.solutions.aiEducation'), url: '/services' },
    { title: t('footer.solutions.generativeAI'), url: '/services' },
    { title: t('footer.solutions.conversationalAI'), url: '/services' },
  ];

  const company = [
    { title: t('footer.company.about'), url: '/' },
    { title: t('footer.company.contact'), url: '/contact' },
    { title: t('footer.company.career'), url: '/career' },
    { title: t('footer.company.jobs'), url: '/jobs' },
  ];

  const socialMedia = [
    { name: 'Facebook', url: '#', icon: 'fab fa-facebook' },
    { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { name: 'Instagram', url: '#', icon: 'fab fa-instagram' },
    { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin' },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        {/* Company Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>{t('footer.companyName')}</h3>
          <p style={styles.companyDescription}>
            {t('footer.companyDescription')}
          </p>
        </div>

        {/* Services Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>{t('footer.services.title')}</h3>
          <ul style={styles.linkList}>
            {services.map((link, index) => (
              <li key={index} style={styles.listItem}>
                <a href={link.url} style={styles.link}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>{t('footer.solutions.title')}</h3>
          <ul style={styles.linkList}>
            {solutions.map((link, index) => (
              <li key={index} style={styles.listItem}>
                <a href={link.url} style={styles.link}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links Section */}
        <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>{t('footer.company.title')}</h3>
          <ul style={styles.linkList}>
            {company.map((link, index) => (
              <li key={index} style={styles.listItem}>
                <a href={link.url} style={styles.link}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={styles.copyright}>
        <p>
          © {new Date().getFullYear()} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

// Styles for the component
const styles = {
  footer: {
    backgroundColor: '#043873',
    color: '#ffffff',
    padding: '40px 20px 0',
    marginTop: 'auto',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '30px',
  },
  footerSection: {
    flex: '1 1 250px',
    minWidth: '250px',
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: '1.2rem',
    paddingBottom: '10px',
  },
  companyDescription: {
    lineHeight: '1.6',
    color: '#ffffff',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#007BFF',
    },
  },
  copyright: {
    backgroundColor: '#043873',
    padding: '1px',
    textAlign: 'center',
    borderTop: '1px solid #444444',
    marginTop: '40px',
  },
};

export default Footer;