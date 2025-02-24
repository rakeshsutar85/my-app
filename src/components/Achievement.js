import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook

const Achievement = () => {
    const { t } = useTranslation(); // Initialize the translation hook

    return (
        <div>
            {/* Heading */}
            <div style={styles.heading}>
                {t('achievement.heading')} {/* Translated heading */}
            </div>

            {/* Subheading */}
            <div>
                {t('achievement.subheading')} {/* Translated subheading */}
            </div>

            {/* Description */}
            <div style={styles.subheading}>
                {t('achievement.description')} {/* Translated description */}
            </div>

            {/* Achievement Items */}
            <div style={styles.achievementContainer}>
                {/* Images Annotated */}
                <div style={styles.achievementItem}>
                    <img src="/achivement/images annoatation.jpg" alt="Clients" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>5M+</h2>
                    <p style={styles.achievementText}>{t('achievement.imagesAnnotated')}</p> {/* Translated text */}
                </div>

                {/* Projects Done */}
                <div style={styles.achievementItem}>
                    <img src="/achivement/projects done.png" alt="Projects" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>500+</h2>
                    <p style={styles.achievementText}>{t('achievement.projectsDone')}</p> {/* Translated text */}
                </div>

                {/* Language Experience */}
                <div style={styles.achievementItem}>
                    <img src="/achivement/language exprience.png" alt="Customer Satisfaction" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>200+</h2>
                    <p style={styles.achievementText}>{t('achievement.languageExperience')}</p> {/* Translated text */}
                </div>

                {/* Conversational AI Data Sourced */}
                <div style={styles.achievementItem}>
                    <img src="/achivement/ai data sourced.jpg" alt="Years of Experience" style={styles.achievementImage} />
                    <h2 style={styles.achievementNumber}>10+</h2>
                    <p style={styles.achievementText}>{t('achievement.conversationalAIData')}</p> {/* Translated text */}
                </div>
            </div>
        </div>
    );
};

// Styles for the component
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
        textAlign: 'center', // Center the text
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