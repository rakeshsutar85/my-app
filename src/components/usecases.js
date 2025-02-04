import React from 'react';

const WhatCompanyOffers = () => {
    return (
        <div>
            <div>
                <div style={styles.heading}>OUR USE CASES EXPERTISE</div>
            </div>
            <div style={styles.achievementContainer}>
                <div style={styles.achievementItem}>
                    <img src="https://placehold.co/400x400" alt="Clients" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>Conventioal AI</h2>
                    <p style={styles.achievementText}>Data validation is the process of checking the accuracy, consistency, and completeness of data before it's used. It's a type of data cleansing.</p>
                </div>
                <div style={styles.achievementItem}>
                    <img src="https://placehold.co/400x400" alt="Projects" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>Conventioal AI</h2>
                    <p style={styles.achievementText}>Data translation can be defined as the process of converting volumes of data from one syntax to another and performing value lookups or substitutions from the data during the process</p>
                </div>
                <div style={styles.achievementItem}>
                    <img src="https://placehold.co/400x400" alt="Customer Satisfaction" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>Conventioal AI</h2>
                    <p style={styles.achievementText}>Data annotation is the process of labeling data to help machine learning models understand it. It is a key part of machine learning and artificial intelligence.</p>
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
        height: '300px', // Fixed width for the card
        margin: '0.5rem', // Margin between cards
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
}

export default WhatCompanyOffers;