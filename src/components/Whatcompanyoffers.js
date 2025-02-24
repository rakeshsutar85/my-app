import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const WhatCompanyOffers = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  const offerings = [
    {
      image: '/whatcomapnyoffer/data validation.jpg',
      title: t('whatCompanyOffers.dataValidation.title'),
      description: t('whatCompanyOffers.dataValidation.description'),
    },
    {
      image: '/whatcomapnyoffer/data translation and transcription.png',
      title: t('whatCompanyOffers.dataTranslation.title'),
      description: t('whatCompanyOffers.dataTranslation.description'),
    },
    {
      image: '/whatcomapnyoffer/data annoatation.png',
      title: t('whatCompanyOffers.dataAnnotation.title'),
      description: t('whatCompanyOffers.dataAnnotation.description'),
    },
    {
      image: '/whatcomapnyoffer/custom data source.png',
      title: t('whatCompanyOffers.customDataSourcing.title'),
      description: t('whatCompanyOffers.customDataSourcing.description'),
    },
    {
      image: '/whatcomapnyoffer/content moderation.png',
      title: t('whatCompanyOffers.contentModeration.title'),
      description: t('whatCompanyOffers.contentModeration.description'),
    },
    {
      image: '/whatcomapnyoffer/custom AI model development.png',
      title: t('whatCompanyOffers.customAIModelDevelopment.title'),
      description: t('whatCompanyOffers.customAIModelDevelopment.description'),
    },
  ];

  return (
    <div>
      {/* Heading */}
      <div>
        <div style={styles.heading}>{t('whatCompanyOffers.heading')}</div>
      </div>

      {/* First Row of Offerings */}
      <div style={styles.achievementContainer}>
        {offerings.slice(0, 3).map((item, index) => (
          <div key={index} style={styles.achievementItem}>
            <img src={item.image} alt={item.title} style={styles.achievementImage} />
            <h2 style={styles.achievementNumber}>{item.title}</h2>
            <p style={styles.achievementText}>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Second Row of Offerings */}
      <div style={styles.achievementContainer}>
        {offerings.slice(3, 6).map((item, index) => (
          <div key={index} style={styles.achievementItem}>
            <img src={item.image} alt={item.title} style={styles.achievementImage} />
            <h2 style={styles.achievementNumber}>{item.title}</h2>
            <p style={styles.achievementText}>{item.description}</p>
          </div>
        ))}
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
  },
  achievementItem: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    height: '350px',
    margin: '0.5rem',
  },
  achievementNumber: {
    color: '#000000',
  },
  achievementText: {
    fontSize: '1rem',
    color: '#333',
    margin: '0',
  },
  achievementImage: {
    maxWidth: '130px',
    height: '130px',
  },
};

export default WhatCompanyOffers;