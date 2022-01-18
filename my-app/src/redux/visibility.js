import { createAction } from '@reduxjs/toolkit';

export const toggleVisibility = createAction('VISIBILITY_BUTTON_CLICKED');

export function visibilityReducer(currentState = 'open', action) {
    switch (action.type) {
        case 'VISIBILITY_BUTTON_CLICKED':
            return currentState === 'open' ? 'hidden' : 'open';
        default: return currentState
    }
}