import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import AlertManager from '../Alerts/AlertManager';
import AlertsExample from '../Alerts/AlertsExample';
import { useAlertReducer } from '../Alerts/alert-reducer';

function App() {
    const [alertState, dispatchAlert] = useAlertReducer();
    return (
      <Container maxWidth="md">
        {alertState.alerts.length > 0 && <AlertManager alerts={alertState.alerts} />}
        <AlertsExample activeAlert={alertState.activeAlert} dispatchAlert={dispatchAlert} />
      </Container>
    );
}

export default App;
