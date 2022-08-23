import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function AlertExample({
    activeAlert,
    onSubmitAlert,
    onFormFieldChange
}) {
    const onChange = (e) => onFormFieldChange(e.target.name, e.target.value);

    const onSubmit = (e) => {
        onSubmitAlert();
        e.preventDefault();
    }

    return (
        <Paper elevation={3} sx={{ marginTop: '25px'}}>
            <Box paddingY={'20px'} paddingX={'30px'}>
                <Typography variant="h4" component="h1" textAlign="center">
                    Alert Example
                </Typography>
                <form>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item xs={12}>
                            <TextField onChange={onChange} value={activeAlert.alertTitle} variant="outlined" id="alert-title" label="Alert Title" name='alertTitle' placeholder="Enter title" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={onChange} value={activeAlert.text} variant="outlined" multiline rows={4} id="alert-text" name='text' label="Alert Text" placeholder="Enter text" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={onChange} value={activeAlert.link} variant="outlined" id="alert-link" label="Alert Link" name='link' placeholder="Enter link" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={onChange} value={activeAlert.id} variant="outlined" id="alert-id" label="Alert ID" name='id' placeholder="Enter unique ID" fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField onChange={onChange} variant="outlined" type="number" id="alert-time-limit" label="Alert Time Limit - Seconds" name='timeLimit' placeholder='Enter seconds' defaultValue={10} fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="alert-type">Alert Type</InputLabel>
                                <Select
                                    labelId="alert-type"
                                    id="alert-alert-type"
                                    label="Alert Type"
                                    name='alertType'
                                    onChange={onChange}
                                    value={activeAlert.alertType}>
                                    <MenuItem value={'error'}>Error</MenuItem>
                                    <MenuItem value={'warning'}>Warning</MenuItem>
                                    <MenuItem value={'info'}>Info</MenuItem>
                                    <MenuItem value={'success'}>Success</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button onClick={onSubmit} fullWidth variant="contained">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Paper>
    );
}