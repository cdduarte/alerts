import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AlertComponent from "./AlertComponent";
import { useTheme } from '@mui/material/styles';

export default function AlertManager({ alerts }) {
    const theme = useTheme();

    const wrapperStyles = {
        position: 'static',
        right: 0,
        top: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            width: '25%',
        },
    }

    function onAlertClick(link) {
        return () => {
            const openWindow = window.open(link, '_blank', 'noopener,noreferrer');
            if (openWindow) openWindow.opener = null;
        };
    }

    return (
        <Box sx={wrapperStyles}>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {alerts.map((alert) => (
                    <AlertComponent key={alert.id} alert={alert} onClick={onAlertClick(alert.link)}/>
                ))}
            </Stack>
        </Box>
    );
}

