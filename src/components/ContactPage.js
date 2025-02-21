import { button } from 'framer-motion/client';
import React from 'react';


const ContactPage = () => {
  return (
    <div style={styles.contactPage}>
      <div style={styles.contactContent}>
        {/* Left Side: Contact Details */}
        <div style={styles.contactDetails}>
          <h2>Contact Details</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>

        {/* Right Side: Contact Form */}
        <div style={styles.contactForm}>
          <h2>Contact Us</h2>
          <form>
            <div style={styles.formGroup}>
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="email"
                id="email"
                placeholder="Business email"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="text"
                id="company"
                placeholder="Company"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <textarea
                id="message"
                placeholder="Enter your message"
                style={styles.textarea}
              />
            </div>
            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <h2>Non Business Enquiries</h2>
        <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', gap: '100px', alignItems: 'center' }}>
          <h3>Freelance Opportunities</h3>
          <button style={styles.button} onClick={() => alert("Button Clicked!")}>Click Me</button>
        </div>

        <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', gap: '120px', alignItems: 'center' }}>
          <h3>Career Opportunities</h3>
          <button style={styles.button} onClick={() => alert("Button Clicked!")}>Click Me</button>
        </div>

        <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', gap: '130px', alignItems: 'center' }}>
          <h3>Vendor Enrollment</h3>
          <button style={styles.button} onClick={() => (window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdMSARvIjnfPxTXl-uJK6DNe9SqUmtI-R-5SmzZ9GszcgVq7Q/viewform')}>Click Me</button>
        </div>


      </div>
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  contactPage: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  contactContent: {
    display: 'flex',
    gap: '20px',
  },
  contactDetails: {
    flex: 1,
    padding: '20px',
    borderRight: '1px solid #ccc',
  },
  contactForm: {
    flex: 1,
    padding: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'vertical',
    minHeight: '100px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ContactPage;