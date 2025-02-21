import React from 'react';
import { FaSlack, FaTrello, FaGoogle } from 'react-icons/fa'; // Example icons from FontAwesome

const FavoriteAppsSection = () => {
    return (
        <div style={styles.container}>
            <div style={styles.containerCircle}>
                <div style={styles.circle}>
                    <img src="/scaleandgrow/audio annotation.png" alt="Clients" style={styles.icon1} />
                    <img src="/scaleandgrow/audio transcription.png" alt="Projects" style={styles.icon4} />
                    <img src="/scaleandgrow/data transcription.png" alt="Years of Experience" style={styles.icon5} />
                    <img src="/whatcomapnyoffer/data validation.jpg" alt="Clients" style={styles.icon6} />
                    <img src="/whatcomapnyoffer/data translation and transcription.png" alt="Projects" style={styles.icon7} />
                </div>
                <div style={{ ...styles.circle, left: '80px' }}>
                <img src="/whatcomapnyoffer/data annoatation.png" alt="Customer Satisfaction" style={styles.icon2} />
                </div>
                <div style={{ ...styles.circle, bottom: '80px', left: '40px' }}>
                <img src="/whatcomapnyoffer/custom data source.png" style={styles.icon3} />
                </div>
            </div>
            <div>
                <h2 style={styles.heading}>WORK WITH OUR TECHNOLOGIES</h2>

                <p style={styles.description}>
                    We specialize in Artificial Intelligence (AI), Machine Learning (ML), <br /> Natural Language
                    Processing (NLP), Computer Vision, Document AI, Conversational AI, <br />Healthcare
                    technologies, and ADAS (Advanced Driver-Assistance Systems).<br /> Our team is dedicated to
                    pushing the boundaries of what technology can achieve,<br /> creating solutions that streamline
                    operations,<br /> enhance user experiences, and drive business growth. Whether <br />you're looking to
                    improve efficiency, <br />increase safety, or unlock new insights, we are <br />here to collaborate and
                    help you leverage the latest technological <br />advancements to achieve your goals.
                </p>
                <button style={styles.button}>Read more</button>
            </div>
        </div>
    );
};

// Styles for the component
const styles = {
    containerCircle: {
        position: 'relative',
        width: '150px',
        height: '150px',
        left: '100px',
        top: '50px',
    },
    circle: {
        width: '170px',
        height: '170px',
        borderRadius: '50%',
        border: '2px dashed #4F9CF9',
        position: 'absolute',  // This makes the circles overlap
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon1: {
        width: '50px', // Equal width and height
        height: '50px', // Fixed typo
        backgroundColor: '#fff',
        borderRadius: '50%', // Make it circular
        position: 'absolute',
        top: '-10px', // Adjust position to center on the border
        left: '72%',
        transform: 'translateX(-50%)', // Center horizontally
        fontSize: '24px',
        color: '#4F9CF9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    },
    icon6: {
        width: '35px', // Equal width and height
        height: '35px', // Fixed typo
        backgroundColor: '#fff',
        borderRadius: '50%', // Make it circular
        position: 'absolute',
        top: '-10px', // Adjust position to center on the border
        left: '28%',
        transform: 'translateX(-50%)', // Center horizontally
        fontSize: '24px',
        color: '#4F9CF9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    },
    icon7: {
        width: '35px', // Equal width and height
        height: '35px', // Fixed typo
        backgroundColor: '#fff',
        borderRadius: '50%', // Make it circular
        position: 'absolute',
        top: '-10px', // Adjust position to center on the border
        left: '122%',
        transform: 'translateX(-50%)', // Center horizontally
        fontSize: '24px',
        color: '#4F9CF9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    },
    icon4: {
        width: '35px', // Equal width and height
        height: '35px', // Fixed typo
        backgroundColor: '#fff',
        borderRadius: '50%', // Make it circular
        position: 'absolute',
        top: '60px', // Adjust position to center on the border
        left: '-2%',
        transform: 'translateX(-50%)', // Center horizontally
        fontSize: '24px',
        color: '#4F9CF9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    },
    icon5: {
        width: '35px', // Equal width and height
        height: '35px', // Fixed typo
        backgroundColor: '#fff',
        borderRadius: '50%', // Make it circular
        position: 'absolute',
        top: '140px', // Adjust position to center on the border
        left: '72%',
        transform: 'translateX(-50%)', // Center horizontally
        fontSize: '24px',
        color: '#4F9CF9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    },
    icon2: {
        position: 'absolute',
        top: '50%',
        right: '-25px', // Adjust position to center on the border
        transform: 'translateY(-50%)',
        fontSize: '24px',
        color: '#4F9CF9',
        backgroundColor: '#fff',
        borderRadius: '50%', // Make it circular
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    },
    icon3: {
        position: 'absolute',
        bottom: '150px', // Adjust position to center on the border
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '24px',
        color: '#4F9CF9',
        backgroundColor: '#fff',
        borderRadius: '50%', // Make it circular
        width: '35px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    },
    container: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '40px 20px',
        backgroundColor: '#043873',
        borderRadius: '10px',
        width: '95%', // Set width to 98%
        height: '400px',
        margin: '0 auto', // Center the container
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
       
    },
    heading: {
        fontSize: '44px',
        color: '#fff', // Adjusted for better contrast with the background
        marginBottom: '10px',
    },
    description: {
        fontSize: '18px',
        color: '#fff', // Adjusted for better contrast with the background
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