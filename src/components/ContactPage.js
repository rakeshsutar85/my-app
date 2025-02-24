import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const ContactPage = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div style={styles.contactPage}>
      <div style={styles.contactContent}>
        {/* Left Side: Contact Details */}
        <div style={styles.contactDetails}>
          <h2>{t('contact.contactDetails')}</h2> {/* Translated heading */}
          <p>{t('contact.email')}: example@example.com</p> {/* Translated label */}
          <p>{t('contact.phone')}: +123 456 7890</p> {/* Translated label */}
          <p>{t('contact.address')}: 123 Main St, City, Country</p> {/* Translated label */}
        </div>

        {/* Right Side: Contact Form */}
        <div style={styles.contactForm}>
          <h2>{t('contact.contactUs')}</h2> {/* Translated heading */}
          <form>
            {/* First Name */}
            <div style={styles.formGroup}>
              <input
                type="text"
                id="firstname"
                placeholder={t('contact.firstNamePlaceholder')} // Translated placeholder
                style={styles.input}
              />
            </div>

            {/* Last Name */}
            <div style={styles.formGroup}>
              <input
                type="text"
                id="lastname"
                placeholder={t('contact.lastNamePlaceholder')} // Translated placeholder
                style={styles.input}
              />
            </div>

            {/* Business Email */}
            <div style={styles.formGroup}>
              <input
                type="email"
                id="email"
                placeholder={t('contact.emailPlaceholder')} // Translated placeholder
                style={styles.input}
              />
            </div>

            {/* Company */}
            <div style={styles.formGroup}>
              <input
                type="text"
                id="company"
                placeholder={t('contact.companyPlaceholder')} // Translated placeholder
                style={styles.input}
              />
            </div>

            {/* Message */}
            <div style={styles.formGroup}>
              <textarea
                id="message"
                placeholder={t('contact.messagePlaceholder')} // Translated placeholder
                style={styles.textarea}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" style={styles.submitButton}>
              {t('contact.submitButton')} {/* Translated button text */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  contactPage: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  contactContent: {
    display: 'flex',
    gap: '20px',
  },
  contactDetails: {
    flex: 1,
    padding: '20px',
    borderRight: '1px solid #ccc',
  },
  contactForm: {
    flex: 1,
    padding: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'vertical',
    minHeight: '100px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ContactPage;