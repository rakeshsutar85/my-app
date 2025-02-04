import React from 'react';

const Achievement = () => {
    return (
        <div>

            <div style={styles.heading}>
                WE HELP YOU SCALE AND GROW - HOW ?
            </div>


            <div style={styles.achievementContainer}>
                <div style={styles.achievementItem}>
                    <h2 style={styles.achievementNumber}>60%</h2>
                    <p style={styles.achievementText}>Audio Annotation</p>
                    <img src="/scaleandgrow/audio annotation.png" alt="Clients" style={styles.achievementImage} />
                    <p style={styles.achievementText}>Sell Faster</p>
                </div>
                <div style={styles.achievementItem}>
                    <h2 style={styles.achievementNumber}>60%</h2>
                    <p style={styles.achievementText}>Audio Transcription</p>
                    <img src="/scaleandgrow/audio transcription.png" alt="Projects" style={styles.achievementImage} />
                    <p style={styles.achievementText}>Sell Faster</p>
                </div>
                <div style={styles.achievementItem}>
                    <h2 style={styles.achievementNumber}>60%</h2>
                    <p style={styles.achievementText}>Data Collection</p>
                    <img src="/scaleandgrow/data collection.png" alt="Customer Satisfaction" style={styles.achievementImage} />
                    <p style={styles.achievementText}>Sell Faster</p>
                </div>
                <div style={styles.achievementItem}>
                    <h2 style={styles.achievementNumber}>60%</h2>
                    <p style={styles.achievementText}>Data Transcription</p>
                    <img src="/scaleandgrow/data transcription.png" alt="Years of Experience" style={styles.achievementImage} />
                    <p style={styles.achievementText}>Sell Faster</p>
                </div>
            </div>
        </div>
    );
};

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