import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper's core CSS
import 'swiper/css/pagination'; // Swiper pagination styles
import 'swiper/css/navigation'; // Swiper navigation styles
import { Pagination, Navigation } from 'swiper/modules'; // Swiper modules

const WhatCompanyOffers = () => {
    const useCases = [
        {
            title: 'computer vision',
            description:
                'At our organization, we focus on computer vision as a core area of expertise. By leveraging advanced algorithms and machine learning models, we enable machines to interpret and analyze visual data, helping businesses unlock new insights and automate processes',
            image: '/usecases/computer vision.png',
        },
        {
            title: 'NLP',
            description:
                'Our NLP capabilities open new possibilities across various industries, including customer service, healthcare, finance, and more, empowering organizations to automate processes, improve communication, and provide more intuitive, personalized interactions.',
            image: '/usecases/nlp.png',
        },
        {
            title: 'Document AI',
            description:
                'Our solutions enable businesses to efficiently manage and interpret vast volumes of unstructured data, improving accuracy, reducing manual effort, and accelerating decision-making processes. By leveraging Document AI, we help organizations streamline workflows, enhance compliance, and unlock valuable insights from their documents.',
            image: '/usecases/document AI.png',
        },
        {
            title: 'CONVERSATIONAL AI',
            description:
                'Our Conversational AI solutions help businesses deliver personalized, efficient customer support, automate routine tasks, and improve communication across various touchpoints.',
            image: '/usecases/conventional AI.png',
        },
        {
            title: 'Healthcare',
            description:
                'we focus on healthcare solutions powered by advanced technologies like AI, machine learning, and data analytics to improve patient outcomes and streamline medical processes.',
            image: '/usecases/healthcare.png',
        },
        {
            title: 'ADAS',
            description:
                'Our solutions help in providing real-time assistance to drivers through features like lane-keeping assistance, adaptive cruise control, automatic emergency braking, and collision detection. By integrating ADAS, we aim to reduce accidents, improve road safety, and pave the way for autonomous driving innovations in the automotive industry.',
            image: '/usecases/adas.png',
        },
    ];

    return (
        <div>
            <div>
                <div style={styles.heading}>OUR USE CASES EXPERTISE</div>
            </div>
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
        height: '350px',
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