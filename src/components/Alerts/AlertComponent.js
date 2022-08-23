import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function AlertComponent({ alert }) {
    return (
        <Alert 
            severity={alert.alertType}
            {...(alert.link && { onClick: () => { window.location = alert.link }})}
            sx={{ cursor: alert.link ? 'pointer' : 'default' }}>
            {alert.alertTitle && <AlertTitle>{alert.alertTitle}</AlertTitle>}
            {alert.text}
        </Alert>
    ); 
}
