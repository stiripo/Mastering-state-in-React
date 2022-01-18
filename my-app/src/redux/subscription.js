import { createAction } from '@reduxjs/toolkit';

export const setSubscription = createAction('SET_STATUS_SUBSCRIBED');
export const cancelSubscription = createAction('CANCEL_SUBSCRIPTION')

export function subscriptionReducer(currentState = false, action) {
    switch (action.type) {
        case 'SET_STATUS_SUBSCRIBED':
            return true;
        case 'CANCEL_SUBSCRIPTION':
            return false;
        default: return currentState;
    }
}