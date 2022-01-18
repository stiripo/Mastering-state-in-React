import { useEffect } from "react";
import { ALL_FEEDBACK } from "./constants";
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisibility } from '../src/redux/visibility';
import { fetchThunk } from "./redux/community";

export function BigCommunity() {

    const dispatch = useDispatch();
    const visibility = useSelector(state => state.communitySectionVisibility);

    return (
        <>
            <input
                type='button'
                className="visibility-button"
                value={visibility === 'open' ? 'Hide section' : 'Show section'}
                onClick={() => { dispatch(toggleVisibility()) }}
            >
            </input>
            <div className="section">
                <h2 className="h2-title">Big Community <br /> of People Like You</h2>
                <div className={visibility}>
                    <p className="subtitle">We’re proud of our products, and we’re really excited <br /> when we get feedback from our users.</p>
                    <PeopleProfiles />
                </div>
            </div>
        </>
    )
}

function PeopleProfiles() {
    const dispatch = useDispatch();
    const profiles = useSelector(state => state.profiles);

    useEffect(() => {
        dispatch(fetchThunk());
    }, []);

    return (
        <div className="people-profile-area">
            {profiles.map((person, index) =>
                <div key={person.lastName} className="person-profile">
                    <img src={person.avatar} height='150' width='150' alt='' />
                    <p className="person-feedback">{ALL_FEEDBACK[index]}</p>
                    <p className="person-name">{`${person.firstName} ${person.lastName}`}</p>
                    <p className="person-position">{person.position}</p>
                </div>)}
        </div>
    )
}



