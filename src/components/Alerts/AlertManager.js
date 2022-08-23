import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AlertComponent from "./AlertComponent";
import { useTheme } from '@mui/material/styles';

export default function AlertManager({ alerts }) {
    const theme = useTheme();

    return (
        <Box sx={{
            position: 'static',
            [theme.breakpoints.up('md')]: {
                position: 'absolute',
            },
            top: 0,
            right: 0}}>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {alerts.map((alert) => (
                    <AlertComponent key={alert.id} alert={alert}/>
                ))}
            </Stack>
        </Box>
    );
}

