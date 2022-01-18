import { createAction } from '@reduxjs/toolkit';
import { COMMUNITY_URL } from '../constants';

export const uploadProfiles = createAction('PROFILES_LOADED');

export function profilesReducer(currentState = [], action) {
    switch (action.type) {
        case 'PROFILES_LOADED':
            return action.payload;
        default: return currentState
    }
}

export function fetchThunk() {
    return (dispatch, getState) => {
        return fetch(COMMUNITY_URL)
            .then((response) => response.json())
            .then((data) => dispatch(uploadProfiles(data)))
            .catch((error) => console.log(error))
    }
}