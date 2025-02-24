import React from "react";
import Calendar from '../components/Calendar';
import ContactPage from '../components/ContactPage';
import NonBusiness from '../components/nonbusinessenquires';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    return (
        <div>
            <ContactPage />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Calendar />
                <NonBusiness />
            </div>
        </div>

    )
}

export default Contact;