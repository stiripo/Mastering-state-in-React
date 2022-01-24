import { COMMUNITY_URL } from '../constants';
import { uploadProfiles } from './actions';

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
            .catch(console.log)
    }
}