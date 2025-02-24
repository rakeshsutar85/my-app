import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const Achievement = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div>
      {/* Heading */}
      <div style={styles.heading}>
        {t('scaleandgrow.heading')} {/* Translated heading */}
      </div>

      {/* Achievement Items */}
      <div style={styles.achievementContainer}>
        {/* Audio Annotation */}
        <div style={styles.achievementItem}>
          <h2 style={styles.achievementNumber}>60%</h2>
          <p style={styles.achievementText}>{t('scaleandgrow.audioAnnotation')}</p>
          <img
            src="/scaleandgrow/audio annotation.png"
            alt={t('scaleandgrow.audioAnnotationAlt')} // Translated alt text
            style={styles.achievementImage}
          />
          <p style={styles.achievementText}>{t('scaleandgrow.sellFaster')}</p>
        </div>

        {/* Audio Transcription */}
        <div style={styles.achievementItem}>
          <h2 style={styles.achievementNumber}>60%</h2>
          <p style={styles.achievementText}>{t('scaleandgrow.audioTranscription')}</p>
          <img
            src="/scaleandgrow/audio transcription.png"
            alt={t('scaleandgrow.audioTranscriptionAlt')} // Translated alt text
            style={styles.achievementImage}
          />
          <p style={styles.achievementText}>{t('scaleandgrow.sellFaster')}</p>
        </div>

        {/* Data Collection */}
        <div style={styles.achievementItem}>
          <h2 style={styles.achievementNumber}>60%</h2>
          <p style={styles.achievementText}>{t('scaleandgrow.dataCollection')}</p>
          <img
            src="/scaleandgrow/data collection.png"
            alt={t('scaleandgrow.dataCollectionAlt')} // Translated alt text
            style={styles.achievementImage}
          />
          <p style={styles.achievementText}>{t('scaleandgrow.sellFaster')}</p>
        </div>

        {/* Data Transcription */}
        <div style={styles.achievementItem}>
          <h2 style={styles.achievementNumber}>60%</h2>
          <p style={styles.achievementText}>{t('scaleandgrow.dataTranscription')}</p>
          <img
            src="/scaleandgrow/data transcription.png"
            alt={t('scaleandgrow.dataTranscriptionAlt')} // Translated alt text
            style={styles.achievementImage}
          />
          <p style={styles.achievementText}>{t('scaleandgrow.sellFaster')}</p>
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
  achievementContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '2rem',
    margin: '2rem 0',
    borderRadius: '10px',
  },
  achievementItem: {
    textAlign: 'center',
  },
  achievementNumber: {
    fontSize: '2.5rem',
    color: '#000000',
    margin: '0 0 0.5rem 0',
  },
  achievementText: {
    fontSize: '1.2rem',
    color: '#333',
    margin: '0',
  },
  achievementImage: {
    maxWidth: '100px',
    height: '100px',
  },
};

export default Achievement;