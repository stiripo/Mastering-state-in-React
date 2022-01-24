export function disableReducer(currentState = false, action) {
    switch (action.type) {
        case 'DISABLE_BUTTON':
            return true;
        case 'ENABLE_BUTTON':
            return false;
        default: return currentState
    }
}