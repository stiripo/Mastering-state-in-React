import { loadCard } from "./actions";

export function cardReducer(currentState = {}, action) {
    switch (action.type) {
        case 'CARD_LOADED':
            return action.payload;
        default: return currentState;
    }
}
export function cardFetchThunk(my_url) {
    return (dispatch, getState) => {
        let data;
        return fetch(my_url)
            .then((response) => {
                if (!response.ok) {
                    data = { not_found: true }
                } else {
                    data = response.json();
                }
                console.log(data);
                return data;
            })
            .then((data) => dispatch(loadCard(data)))
            .catch(console.log)
    }
}