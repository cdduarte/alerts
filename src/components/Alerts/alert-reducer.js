import React from 'react';

/**
 * Handle Input
 */
export const HANDLE_ALERT_INPUT = 'alert/HANDLE_ALERT_INPUT';
export function handleAlertInput(e) {
    return {
        type: HANDLE_ALERT_INPUT,
        field: e.target.name,
        payload: e.target.value
    }
}

/**
 * addAlert action adds an alert to the alerts array in state.
 */
export const ADD_ALERT = 'alert/ADD_ALERT';
export function addAlert(alert) {
    return {
        type: ADD_ALERT,
        payload: alert
    };
}
 
/**
 * deleteAlert action accepts an alert id used to filter out the alert
 * from the array of alerts in state.
 */
export const DELETE_ALERT = 'alert/DELETE_ALERT';
export function deleteAlert(alertId) {
    return {
        type: DELETE_ALERT,
        payload: alertId
    };
}

/**
 * resetActiveAlert resets the active alert in the reducer state
 */
export const RESET_ACTIVE_ALERT = 'alert/RESET_ACTIVE_ALERT';
export function resetActiveAlert() {
    return { type: RESET_ACTIVE_ALERT };
}

export const defaultAlertState = {
    activeAlert: {
        alertTitle: '',
        alertType: '',
        id: '',
        link: '',
        text: '',
        timeLimit: 10,
    },
    alerts: [],
};

/**
 * Alert reducer
 */
export function alertReducer(state, action) {
    switch(action.type) {
        case ADD_ALERT:
            return {
                ...state,
                alerts: [...state.alerts, action.payload]
            };
        case DELETE_ALERT:
            return {
                ...state,
                alerts: state.alerts.filter(alert => alert.id !== action.payload)
            };
        case HANDLE_ALERT_INPUT:
            return {
                ...state,
                activeAlert: {
                    ...state.activeAlert,
                    [action.field]: action.payload
                }
            }
        case RESET_ACTIVE_ALERT:
            return {
                ...state,
                activeAlert: defaultAlertState.activeAlert
            }
        default:
            return state;
    }
}

/**
 * useAlertReducer hook
 */
export function useAlertReducer() {
    return React.useReducer(alertReducer, defaultAlertState);
}