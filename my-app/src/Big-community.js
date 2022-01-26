import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { ALL_FEEDBACK } from "./constants";
import { toggleVisibility } from '../src/redux/actions';
import { fetchThunk } from "./redux/community";
import { Card } from "./Card";

export function BigCommunity() {
    const dispatch = useDispatch();
    const visibility = useSelector(state => state.communitySectionVisibility);
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
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
            </Route>
            <Route path={`${path}/:personId`}>
                <Card />
            </Route>
        </Switch>
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
                <div key={person.id} className="person-profile">
                    <img src={person.avatar} height='150' width='150' alt="person's face" />
                    <p className="person-feedback">{ALL_FEEDBACK[index]}</p>
                    <p className="person-name">
                        <Link to={`/community/${person.id}`}>{`${person.firstName} ${person.lastName}`}</Link>
                    </p>
                    <p className="person-position">{person.position}</p>
                </div>)}
        </div>
    )
}



