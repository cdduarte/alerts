import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function AlertComponent({ alert, onClick }) {
    return (
        <Alert 
            severity={alert.alertType}
            {...(alert.link && { onClick })}
            sx={{ cursor: alert.link ? 'pointer' : 'default', zIndex: 1 }}>
            {alert.alertTitle && <AlertTitle>{alert.alertTitle}</AlertTitle>}
            {alert.text}
        </Alert>
    ); 
}
