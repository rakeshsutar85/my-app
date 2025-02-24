import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const ContactPage = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div style={styles.contactPage}>
      <div>
        {/* Translated heading */}
        <h2>{t('nonbusiness.nonBusinessEnquiries')}</h2>

        {/* Freelance Opportunities Section */}
        <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', gap: '100px', alignItems: 'center' }}>
          <h3>{t('nonbusiness.freelanceOpportunities')}</h3>
          <button style={styles.button} onClick={() => alert(t('contact.buttonClicked'))}>
            {t('nonbusiness.clickMe')} {/* Translated button text */}
          </button>
        </div>

        {/* Career Opportunities Section */}
        <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', gap: '120px', alignItems: 'center' }}>
          <h3>{t('nonbusiness.careerOpportunities')}</h3>
          <button style={styles.button} onClick={() => alert(t('nonbusiness.buttonClicked'))}>
            {t('nonbusiness.clickMe')} {/* Translated button text */}
          </button>
        </div>

        {/* Vendor Enrollment Section */}
        <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', gap: '130px', alignItems: 'center' }}>
          <h3>{t('nonbusiness.vendorEnrollment')}</h3>
          <button
            style={styles.button}
            onClick={() => (window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdMSARvIjnfPxTXl-uJK6DNe9SqUmtI-R-5SmzZ9GszcgVq7Q/viewform')}
          >
            {t('nonbusiness.clickMe')} {/* Translated button text */}
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  contactPage: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default ContactPage;