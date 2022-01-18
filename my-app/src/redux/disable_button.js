import { createAction } from "@reduxjs/toolkit";

export const disable = createAction('DISABLE_BUTTON');
export const enable = createAction('ENABLE_BUTTON');

export function disableReducer(currentState = false, action) {
    switch (action.type) {
        case 'DISABLE_BUTTON':
            return true;
        case 'ENABLE_BUTTON':
            return false;
        default: return currentState
    }
}