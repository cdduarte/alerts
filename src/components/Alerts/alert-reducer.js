import React from 'react';
import { v4 as uuidv4 } from 'uuid';

/**
 * handleAlertInput action accept the name and value of the alert input form field
 * and adds the data to the activeAlert in state.
 */
export const HANDLE_ALERT_INPUT = 'alert/HANDLE_ALERT_INPUT';
export function handleAlertInput(name, value) {
    return {
        type: HANDLE_ALERT_INPUT,
        field: name,
        payload: value
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
    const [alertState, alertDispatch] = React.useReducer(alertReducer, defaultAlertState);

    const { activeAlert } = alertState;

    return {
        alertState,
        alertDispatch,
        dispatchAddAlert: () => {
            if (!activeAlert.id) activeAlert.id = uuidv4();
    
            alertDispatch(addAlert(activeAlert));
            alertDispatch(resetActiveAlert());
            const timerId = setTimeout(() => {
                alertDispatch(deleteAlert(activeAlert.id));
                clearTimeout(timerId);
            }, activeAlert.timeLimit * 1000);
        },
        dispatchDeleteAlert: (alertId) => alertDispatch(deleteAlert(alertId)),
        dispatchHandleAlertInput: (name, value) => alertDispatch(handleAlertInput(name, value)),
        dispatchResetActiveAlert: () => alertDispatch(resetActiveAlert()),
    }
}