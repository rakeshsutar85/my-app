import React from 'react';

const Achievement = () => {
    return (
        <div>
            <div style={styles.heading}>
                ACHIVEMENTS
            </div>
            <div>
                Our KPIs Achieved So Far
            </div>
            <div style={styles.subheading}>
                Across a wide range of projects spanning different data types, industries, and geographies
                worldwide, we have made significant strides in delivering value across the AI value chain.
                Our diverse experience enables us to tackle unique challenges and optimize solutions
                tailored to various sectors.
            </div>

            <div style={styles.achievementContainer}>
                <div style={styles.achievementItem}>
                    <img src="/achivement/images annoatation.jpg" alt="Clients" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>5M+</h2>
                    <p style={styles.achievementText}>Images annotated</p>
                </div>
                <div style={styles.achievementItem}>
                    <img src="/achivement/projects done.png" alt="Projects" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>500+</h2>
                    <p style={styles.achievementText}>Projects Done</p>
                </div>
                <div style={styles.achievementItem}>
                    <img src="/achivement/language exprience.png" alt="Customer Satisfaction" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>200+</h2>
                    <p style={styles.achievementText}>Language Experience</p>
                </div>
                <div style={styles.achievementItem}>
                    <img src="/achivement/ai data sourced.jpg" alt="Years of Experience" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>10+</h2>
                    <p style={styles.achievementText}>Conversational Al data sourced</p>
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
    subheading: {
        padding: '1rem 5rem', // Padding for spacing
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
        color: '#007BFF',
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