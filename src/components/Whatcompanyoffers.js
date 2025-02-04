import React from 'react';

const WhatCompanyOffers = () => {
    return (
        <div>
            <div>
                <div style={styles.heading}>WHAT COMPANY OFFERS</div>
            </div>
            <div style={styles.achievementContainer}>
                <div style={styles.achievementItem}>
                    <img src="/whatcomapnyoffer/data validation.jpg" alt="Clients" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>Data validation</h2>
                    <p style={styles.achievementText}>Evaluate your model's initial throughput to obtain an impartial expert opinion on key
                        performance indicators, such as drift, duplication, and ground truth responses, during the
                        early stages</p>
                </div>
                <div style={styles.achievementItem}>
                    <img src="/whatcomapnyoffer/data translation and transcription.png" alt="Projects" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>Data Transcription and Translation</h2>
                    <p style={styles.achievementText}>Enhance transliteration, relevance, and user acceptance with our localization expertise, ensuring your model adapts seamlessly to the functional, linguistic, and cultural requirements of specific markets</p>
                </div>
                <div style={styles.achievementItem}>
                    <img src="/whatcomapnyoffer/data annoatation.png" alt="Customer Satisfaction" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>Data Annotation</h2>
                    <p style={styles.achievementText}>Achieve precise data labeling with ~95% accuracy across various data types, ensuring optimal model performance.</p>
                </div>

            </div>

            <div style={styles.achievementContainer}>
                <div style={styles.achievementItem}>
                    <img src="/whatcomapnyoffer/custom data source.png" alt="Clients" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>Custom data sourcing</h2>
                    <p style={styles.achievementText}>Acquire high-accuracy, tailored data for your specific model needs from global sources, ensuring full compliance with GDPR, SOC 2, and ISO standards.
                    </p>
                </div>
                <div style={styles.achievementItem}>
                    <img src="/whatcomapnyoffer/content moderation.png" alt="Projects" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>Content moderation</h2>
                    <p style={styles.achievementText}>Our moderation solutions leverage AI and human expertise to detect inappropriate, harmful, or non-compliant material while maintaining platform integrity and user engagement.
                    </p>
                </div>
                <div style={styles.achievementItem}>
                    <img src="/whatcomapnyoffer/custom AI model development.png" alt="Customer Satisfaction" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>Custom AI Model Development</h2>
                    <p style={styles.achievementText}>Our expert team specializes in building, training, and optimizing AI models for various applications, ensuring high accuracy, efficiency, and scalability.
                    </p>
                </div>

            </div>
        </div>
    )
}

const styles = {
    heading: {
        backgroundColor: '#007BFF', // Blue background
        color: 'white', // White text
        padding: '0.5rem 1rem', // Padding for spacing
        borderRadius: '25px', // Rounded corners
        textAlign: 'center', // Center the text
        display: 'inline-block', // Fit content width
        margin: '1rem auto', // Center the div horizontally
        fontSize: '1.2rem', // Font size
        fontWeight: 'bold', // Bold text
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
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
        backgroundColor: 'white', // White background for the card
        padding: '1.5rem', // Padding inside the card
        borderRadius: '10px', // Rounded corners for the card
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for the card
        width: '300px',
        height: '325px', // Fixed width for the card
        margin: '0.5rem', // Margin between cards
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
}

export default WhatCompanyOffers;