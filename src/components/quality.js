import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const Quality = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div>
      {/* Heading */}
      <div>
        <h1 style={styles.heading}>{t('quality.heading')}</h1>
      </div>

      {/* Subheading */}
      <div style={styles.subheading}>
        {t('quality.subheading')}
      </div>

      {/* Comparison Section */}
      <div style={styles.container}>
        <div style={styles.item}>
          <img src="https://placehold.co/400x400" alt={t('quality.companyImageAlt')} style={styles.image} />
          <div style={{ fontSize: '1.2rem' }}>{t('quality.companyName')}</div>
        </div>
        <div style={{ fontSize: '2rem' }}>V/S</div>
        <div style={styles.item}>
          <img src="https://placehold.co/400x400" alt={t('quality.othersImageAlt')} style={styles.image} />
          <div style={{ fontSize: '1.2rem' }}>{t('quality.others')}</div>
        </div>
      </div>

      {/* Quality Metrics */}
      <div style={styles.bigRectangle}>
        <div style={styles.qualityContainer}>
          <div style={styles.leftRectangle}>98%</div>
          <div style={{ color: 'black' }}>{t('quality.dataSecurity')}</div>
          <div style={styles.rightRectangle}>60%</div>
        </div>
      </div>
      <div style={styles.bigRectangle}>
        <div style={styles.qualityContainer}>
          <div style={styles.leftRectangle}>95%</div>
          <div style={{ color: 'black' }}>{t('quality.comprehensiveAI')}</div>
          <div style={styles.rightRectangle}>60%</div>
        </div>
      </div>
      <div style={styles.bigRectangle}>
        <div style={styles.qualityContainer}>
          <div style={styles.leftRectangle}>97%</div>
          <div style={{ color: 'black' }}>{t('quality.worldwideSourcing')}</div>
          <div style={styles.rightRectangle}>60%</div>
        </div>
      </div>
      <div style={styles.bigRectangle}>
        <div style={styles.qualityContainer}>
          <div style={styles.leftRectangle}>96%</div>
          <div style={{ color: 'black' }}>{t('quality.superiorQuality')}</div>
          <div style={styles.rightRectangle}>60%</div>
        </div>
      </div>
      <div style={styles.bigRectangle}>
        <div style={styles.qualityContainer}>
          <div style={styles.leftRectangle}>95%</div>
          <div style={{ color: 'black' }}>{t('quality.respectedAuthority')}</div>
          <div style={styles.rightRectangle}>60%</div>
        </div>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  heading: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    textAlign: 'center',
    display: 'inline-block',
    margin: '1rem auto',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  subheading: {
    padding: '1rem 5rem',
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '2rem',
    margin: '2rem 0',
    borderRadius: '10px',
  },
  qualityContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '10px',
    gap: '20px',
  },
  image: {
    width: '80px',
    height: '80px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
  bigRectangle: {
    color: 'white',
    borderRadius: '25px',
    textAlign: 'center',
    display: 'inline-block',
    margin: '1rem auto',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  leftRectangle: {
    width: '400px',
    backgroundColor: '#c30010',
    color: 'white',
    borderRadius: '25px',
    textAlign: 'center',
    display: 'inline-block',
    margin: '1rem auto',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  rightRectangle: {
    width: '300px',
    backgroundColor: '#101dcb',
    color: 'white',
    borderRadius: '25px',
    textAlign: 'center',
    display: 'inline-block',
    margin: '1rem auto',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Quality;