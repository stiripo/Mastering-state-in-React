export function inputReducer(currentState = '', action) {
    switch (action.type) {
        case 'EMAIL_INPUT_CHANGED':
            return action.payload;
        default: return currentState
    }
}