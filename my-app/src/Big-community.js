import { useState, useEffect } from "react";
import { ALL_FEEDBACK } from "./constants";


export function BigCommunity() {

    const [visibility, setVisibility] = useState('open');

    function toggleVisibility() {
        visibility === 'open' ? setVisibility('hidden') : setVisibility('open');
        return visibility;
    }

    return (
        <>
            <input
                type='button'
                className="visibility-button"
                value={visibility === 'open' ? 'Hide section' : 'Show section'}
                onClick={toggleVisibility}
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
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/community')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className="people-profile-area">
            {data.map((person, index) =>
                <div key={person.lastName} className="person-profile">
                    <img src={person.avatar} height='150' width='150' alt='' />
                    <p className="person-feedback">{ALL_FEEDBACK[index]}</p>
                    <p className="person-name">{`${person.firstName} ${person.lastName}`}</p>
                    <p className="person-position">{person.position}</p>
                </div>)}
        </div>
    )
}



