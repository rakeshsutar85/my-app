import React from 'react';

const Footer = () => {
  const services = [
    { title: 'Data annotation and enhancement', url: '/' },
    { title: 'Localization - transcription and translation', url: '/about' },
    { title: 'Data Validation', url: '/services' },
    { title: 'Custom data sourcing', url: '/portfolio' },
    { title: 'Content moderation', url: '/portfolio' },
  ];

  const solutions = [
    { title: 'NLP', url: '/' },
    { title: 'ADAS', url: '/about' },
    { title: 'Document AI', url: '/services' },
    { title: 'AI for Voice & Speech Recognition', url: '/services' },
    { title: 'AI in Education', url: '/services' },
    { title: 'Generative AI', url: '/services' },
    { title: 'Conversational AI', url: '/services' },
   
  ];

  const company = [
    { title: 'About', url: '/' },
    { title: 'Contact', url: '/contact' },
    { title: 'Career', url: '/career' },
    { title: 'Jobs', url: '/jobs' },
   
  ];

  const socialMedia = [
    { name: 'Facebook', url: '#', icon: 'fab fa-facebook' },
    { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { name: 'Instagram', url: '#', icon: 'fab fa-instagram' },
    { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin' }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        {/* Company Info */}
        <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>Company Name</h3>
          <p style={styles.companyDescription}>
            Transforming businesses through innovative digital solutions.
          </p>
        </div>

        {/* Services */}
        <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>Services</h3>
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

        <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>Solutions</h3>
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

        <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>Company</h3>
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

        {/* Contact Info */}
        {/* <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>Contact Us</h3>
          <div style={styles.contactInfo}>
            <p>123 Business Street</p>
            <p>New York, NY 10001</p>
            <p>Email: info@techsolutions.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div> */}

        {/* Social Media */}
        {/* <div style={styles.footerSection}>
          <h3 style={styles.sectionTitle}>Follow Us</h3>
          <div style={styles.socialLinks}>
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                style={styles.socialLink}
                aria-label={social.name}
              >
                <i className={social.icon} style={styles.socialIcon}></i>
              </a>
            ))}
          </div>
        </div> */}
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>
          © {new Date().getFullYear()} Tech Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

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
  contactInfo: {
    lineHeight: '1.8',
    color: '#cccccc',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    marginTop: '10px',
  },
  socialLink: {
    color: '#ffffff',
    fontSize: '1.5rem',
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