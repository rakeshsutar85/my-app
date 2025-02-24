import React from 'react';
import { useTranslation } from 'react-i18next';

const FavoriteAppsSection = () => {
    const { t } = useTranslation();
    return (
        <div style={styles.container}>
            {/* First div (2 parts) */}
            <div style={styles.leftSection}>
                <div style={styles.containerCircle}>
                    <div style={styles.circle}>
                        <img src="/scaleandgrow/audio annotation.png" alt={t('favoriteApps.audioAnnotationAlt')} style={styles.icon1} />
                        <img src="/scaleandgrow/audio transcription.png" alt={t('favoriteApps.audioTranscriptionAlt')} style={styles.icon4} />
                        <img src="/scaleandgrow/data transcription.png" alt={t('favoriteApps.dataTranscriptionAlt')} style={styles.icon5} />
                        <img src="/whatcomapnyoffer/data validation.jpg" alt={t('favoriteApps.dataValidationAlt')} style={styles.icon6} />
                        <img src="/whatcomapnyoffer/data translation and transcription.png" alt={t('favoriteApps.dataTranslationAlt')} style={styles.icon7} />
                    </div>
                    <div style={{ ...styles.circle, left: '80px' }}>
                        <img src="/whatcomapnyoffer/data annoatation.png" alt={t('favoriteApps.customDataSourceAlt')} style={styles.icon2} />
                    </div>
                    <div style={{ ...styles.circle, bottom: '80px', left: '40px' }}>
                        <img src="/whatcomapnyoffer/custom data source.png" style={styles.icon3} />
                    </div>
                </div>
            </div>

            {/* Second div (3 parts) */}
            <div style={styles.rightSection}>
                <h2 style={styles.heading}>{t('favoriteApps.heading')}</h2>
                <p style={styles.description}>{t('favoriteApps.description')}</p>
                <button style={styles.button}>{t('favoriteApps.readMoreButton')}</button>
            </div>
        </div>
    );
};

// Styles for the component
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 20px',
        backgroundColor: '#043873',
        borderRadius: '10px',
        width: '95%',
        height: '450px',
        margin: '0 auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    leftSection: {
        flex: 2, // Takes 2 parts of the container
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightSection: {
        flex: 3, // Takes 3 parts of the container
        textAlign: '',
        paddingLeft: '40px', // Add some spacing between the sections
    },
    containerCircle: {
        position: 'relative',
        width: '150px',
        height: '150px',
    },
    circle: {
        width: '170px',
        height: '170px',
        borderRadius: '50%',
        border: '2px dashed #4F9CF9',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon1: {
        width: '50px',
        height: '50px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        position: 'absolute',
        top: '-10px',
        left: '72%',
        transform: 'translateX(-50%)',
        fontSize: '24px',
        color: '#4F9CF9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    icon6: {
        width: '35px',
        height: '35px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        position: 'absolute',
        top: '-10px',
        left: '28%',
        transform: 'translateX(-50%)',
        fontSize: '24px',
        color: '#4F9CF9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    icon7: {
        width: '35px',
        height: '35px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        position: 'absolute',
        top: '-10px',
        left: '122%',
        transform: 'translateX(-50%)',
        fontSize: '24px',
        color: '#4F9CF9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    icon4: {
        width: '35px',
        height: '35px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        position: 'absolute',
        top: '60px',
        left: '-2%',
        transform: 'translateX(-50%)',
        fontSize: '24px',
        color: '#4F9CF9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    icon5: {
        width: '35px',
        height: '35px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        position: 'absolute',
        top: '140px',
        left: '72%',
        transform: 'translateX(-50%)',
        fontSize: '24px',
        color: '#4F9CF9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    icon2: {
        position: 'absolute',
        top: '50%',
        right: '-25px',
        transform: 'translateY(-50%)',
        fontSize: '24px',
        color: '#4F9CF9',
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    icon3: {
        position: 'absolute',
        bottom: '150px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '24px',
        color: '#4F9CF9',
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '44px',
        color: '#fff',
        marginBottom: '10px',
    },
    description: {
        fontSize: '18px',
        color: '#fff',
        lineHeight: '1.6',
        marginBottom: '30px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default FavoriteAppsSection;