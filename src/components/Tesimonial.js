import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Tech Solutions',
    image: 'https://placehold.co/400x400',
    feedback: 'This product has completely transformed the way we do business. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Manager',
    image: 'https://placehold.co/400x400',
    feedback: 'Amazing service and support. The team is always ready to help and deliver beyond expectations.',
  },
  {
    name: 'Alice Johnson',
    role: 'Product Manager',
    image: 'https://placehold.co/400x400',
    feedback: 'The best decision we made was choosing this product. It has exceeded all our expectations.',
  },
  {
    name: 'Bob Brown',
    role: 'CTO, Innovate Inc.',
    image: 'https://placehold.co/400x400',
    feedback: 'Incredible features and excellent customer support. We are very satisfied with the results.',
  },
  {
    name: 'Charlie Davis',
    role: 'Founder, Startup Co.',
    image: 'https://placehold.co/400x400',
    feedback: 'This product has been a game-changer for our company. Highly recommended!',
  },
  {
    name: 'Eva Green',
    role: 'Design Lead',
    image: 'https://placehold.co/400x400',
    feedback: 'The user experience is fantastic, and the support team is always helpful.',
  },
];

const AutoScrollTestimonial = () => {
  const [startIndex, setStartIndex] = useState(0);
  const { t } = useTranslation(); // Initialize the translation hook

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonials every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const visibleTestimonials = [];
  for (let i = 0; i < 3; i++) {
    const index = (startIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <div>
      {/* Heading */}
      <div>
        <div style={styles.heading}>{t('testimonials.heading')}</div>
      </div>

      {/* Testimonials */}
      <div style={styles.container}>
        <div style={styles.testimonialRow}>
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonial}>
              <p style={styles.feedback}>{t(`testimonials.feedback${index + 1}`)}</p>
              <div style={styles.userInfo}>
                <img src={testimonial.image} alt={testimonial.name} style={styles.userImage} />
                <div style={styles.userDetails}>
                  <p style={styles.userName}>{testimonial.name}</p>
                  <p style={styles.userRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles for the AutoScrollTestimonial Component
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
  container: {
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '1000px',
    height: '300px',
    margin: '20px auto',
    textAlign: 'center',
    overflow: 'hidden',
  },
  testimonialRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  testimonial: {
    height: '260px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '30%',
    textAlign: 'center',
  },
  feedback: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '70px',
    fontStyle: 'italic',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    marginRight: '15px',
    objectFit: 'cover',
  },
  userDetails: {
    textAlign: 'left',
  },
  userName: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
    color: '#043873',
  },
  userRole: {
    fontSize: '14px',
    color: '#666',
    margin: '0',
  },
};

export default AutoScrollTestimonial;