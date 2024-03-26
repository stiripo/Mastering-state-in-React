import { useParams, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ALL_FEEDBACK } from "./constants";
import { cardFetchThunk } from "./redux/card";
import { COMMUNITY_URL } from "./constants";
import { removeCard } from "./redux/actions";

export function Card() {
    const dispatch = useDispatch();
    const { personId } = useParams();

    useEffect(() => {
        dispatch(cardFetchThunk(`${COMMUNITY_URL}/${personId}`));
        return function cleanup() {
            dispatch(removeCard());
        }
    }, []);

    const profile = useSelector(state => state.profileCard);

    if (profile.id) {
        return (
            <div className="person-profile card">
                <img src={profile.avatar} height='150' width='150' alt="person's face" />
                <p className="person-feedback">{ALL_FEEDBACK[0]}</p>
                <p className="person-name">{`${profile.firstName} ${profile.lastName}`}
                </p>
                <p className="person-position">{profile.position}</p>
            </div>
        );
    } else if (profile.not_found) {
        return (
            <Redirect to='/not-found' />
        )
    }

    return (
        <div>
            <div>LOADING...</div>
        </div>
    );
}
