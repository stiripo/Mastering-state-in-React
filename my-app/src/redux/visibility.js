export function visibilityReducer(currentState = 'open', action) {
    switch (action.type) {
        case 'TOGGLE_COMMUNITY_VISIBILITY':
            return currentState === 'open' ? 'hidden' : 'open';
        default: return currentState
    }
}