import React from 'react';

const Quality = () => {
    return (
        <div>
            <div>
                <h1 style={styles.heading}>QUALITY IS MOST IMPORTANT</h1>
            </div>
            <div style={styles.subheading}>
                HOW ARE WE BEST
            </div>

            <div style={styles.container}>
                <div style={styles.item}>
                    <img src="https://placehold.co/400x400" alt="Projects" style={styles.image} />
                    <div style={{ fontSize: '1.2rem' }}> COMPANY NAME </div>
                </div>
                <div style={{ fontSize: '2rem' }}>
                    V/S
                </div>

                <div style={styles.item}>
                    <img src="https://placehold.co/400x400" alt="Projects" style={styles.image} />
                    <div style={{ fontSize: '1.2rem' }}> OTHERS </div>
                </div>
            </div>


            <div style={styles.bigRectangle}>
                <div style={styles.qualityContainer}>
                    <div style={styles.leftRectangle}>
                        100%
                    </div>
                    <div style={{ color: 'black' }}>
                        Data Security and Legal Compliance
                    </div>
                    <div style={styles.rightRectangle}>
                        60%
                    </div>
                </div>
            </div>
            <div style={styles.bigRectangle}>
                <div style={styles.qualityContainer}>
                    <div style={styles.leftRectangle}>
                        100%
                    </div>
                    <div style={{ color: 'black' }}>
                        Comprehensive AI Data Solutions
                    </div>
                    <div style={styles.rightRectangle}>
                        60%
                    </div>
                </div>
            </div>
            <div style={styles.bigRectangle}>
                <div style={styles.qualityContainer}>
                    <div style={styles.leftRectangle}>
                        100%
                    </div>
                    <div style={{ color: 'black' }}>
                        Worldwide Sourcing Capabilities
                    </div>
                    <div style={styles.rightRectangle}>
                        60%
                    </div>
                </div>
            </div>
            <div style={styles.bigRectangle}>
                <div style={styles.qualityContainer}>
                    <div style={styles.leftRectangle}>
                        100%
                    </div>
                    <div style={{ color: 'black' }}>
                        Superior Quality & Fast TA
                    </div>
                    <div style={styles.rightRectangle}>
                        60%
                    </div>
                </div>
            </div>
            <div style={styles.bigRectangle}>
                <div style={styles.qualityContainer}>
                    <div style={styles.leftRectangle}>
                        100%
                    </div>
                    <div style={{ color: 'black' }}>
                        A Respected Authority in AI
                    </div>
                    <div style={styles.rightRectangle}>
                        60%
                    </div>
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
        fontSize: '1.5rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '2rem',
        margin: '2rem 0',
        borderRadius: '10px',
    },
    qualityContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '10px',
        gap: '20px',
    },
    image: {
        width: '80px',
        height: '80px'
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
    },
    bigRectangle: {
        color: 'white', // White text
        borderRadius: '25px', // Rounded corners
        textAlign: 'center', // Center the text
        display: 'inline-block', // Fit content width
        margin: '1rem auto', // Center the div horizontally
        fontSize: '1.2rem', // Font size
        fontWeight: 'bold', // Bold text
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    },
    leftRectangle: {
        width: '400px',
        backgroundColor: '#c30010', // Blue background
        color: 'white', // White text
        borderRadius: '25px', // Rounded corners
        textAlign: 'center', // Center the text
        display: 'inline-block', // Fit content width
        margin: '1rem auto', // Center the div horizontally
        fontSize: '1.2rem', // Font size
        fontWeight: 'bold', // Bold text
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    },
    rightRectangle: {
        width: '300px',
        backgroundColor: '#101dcb', // Blue background
        color: 'white', // White text
        borderRadius: '25px', // Rounded corners
        textAlign: 'center', // Center the text
        display: 'inline-block', // Fit content width
        margin: '1rem auto', // Center the div horizontally
        fontSize: '1.2rem', // Font size
        fontWeight: 'bold', // Bold text
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    },
}

export default Quality;