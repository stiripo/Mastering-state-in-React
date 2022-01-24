export function subscriptionReducer(currentState = false, action) {
    switch (action.type) {
        case 'SET_STATUS_SUBSCRIBED':
            return true;
        case 'CANCEL_SUBSCRIPTION':
            return false;
        default: return currentState;
    }
}