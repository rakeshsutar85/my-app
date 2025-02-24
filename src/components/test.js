import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper's core CSS
import 'swiper/css/pagination'; // Swiper pagination styles
import 'swiper/css/navigation'; // Swiper navigation styles
import { Pagination, Navigation } from 'swiper/modules'; // Swiper modules
import { useTranslation } from 'react-i18next'; // Import the translation hook

const WhatCompanyOffers = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  const useCases = [
    {
      title: t('usecases.computerVision.title'),
      description: t('usecases.computerVision.description'),
      image: '/usecases/computer vision.png',
    },
    {
      title: t('usecases.nlp.title'),
      description: t('usecases.nlp.description'),
      image: '/usecases/nlp.png',
    },
    {
      title: t('usecases.documentAI.title'),
      description: t('usecases.documentAI.description'),
      image: '/usecases/document AI.png',
    },
    {
      title: t('usecases.conversationalAI.title'),
      description: t('usecases.conversationalAI.description'),
      image: '/usecases/conventional AI.png',
    },
    {
      title: t('usecases.healthcare.title'),
      description: t('usecases.healthcare.description'),
      image: '/usecases/healthcare.png',
    },
    {
      title: t('usecases.adas.title'),
      description: t('usecases.adas.description'),
      image: '/usecases/adas.png',
    },
  ];

  return (
    <div>
      {/* Heading */}
      <div>
        <div style={styles.heading}>{t('usecases.heading')}</div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1} // Number of slides visible at once
        spaceBetween={20} // Space between slides
        pagination={{ clickable: true }} // Add pagination dots
        navigation={true} // Add navigation arrows
        breakpoints={{
          640: {
            slidesPerView: 1, // On smaller screens, show 1 slide
          },
          768: {
            slidesPerView: 2, // On medium screens, show 2 slides
          },
          1024: {
            slidesPerView: 3, // On larger screens, show 3 slides
          },
        }}
        modules={[Pagination, Navigation]} // Add Swiper modules
        style={styles.swiperContainer}
      >
        {useCases.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={styles.achievementItem}>
              <img src={item.image} alt={item.title} style={styles.achievementImage} />
              <h2 style={styles.achievementNumber}>{item.title}</h2>
              <p style={styles.achievementText}>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
  swiperContainer: {
    padding: '2rem 0',
  },
  achievementItem: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    height: '400px',
    margin: '0 auto',
  },
  achievementNumber: {
    color: '#000000',
    textAlign: 'left',
    fontSize: '1.2rem',
  },
  achievementText: {
    fontSize: '1rem',
    color: '#333',
    margin: '0',
  },
  achievementImage: {
    width: '150px',
    height: '130px',
  },
};

export default WhatCompanyOffers;