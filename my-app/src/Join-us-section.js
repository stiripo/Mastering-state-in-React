import { useState } from "react";
import { postToServer, handleResponseStatusError } from "./utils";
import { SUBSCRIBE_URL, UNSUBSCRIBE_URL } from "./constants";

export function JoinUsSection() {

    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [status, setStatus] = useState('not subscribed');
    const [disabled, setDisabled] = useState(false);

    const updateEmailInput = (e) => {
        setSubscribeEmail(e.target.value);
    }

    function subscribe(e) {
        e.preventDefault();
        setDisabled(true);
        postToServer(SUBSCRIBE_URL, JSON.stringify({ email: subscribeEmail }))
            .then(handleResponseStatusError)
            .then((data) => {
                if (!data.error) {
                    setStatus('subscribed');
                }
                setDisabled(false)

            })
            .catch(window.alert)
    }

    function unsubscribe(e) {
        e.preventDefault();
        setDisabled(true);
        postToServer(UNSUBSCRIBE_URL, JSON.stringify({ email: subscribeEmail }))
            .then(() => setStatus('not subscribed'))
            .then(() => setDisabled(false))
    }

    return (
        <div className="section join-us-section">
            <h2 className="h2-title">Join Our Program</h2>
            <p className='subtitle'>Sed do eiusmod tempor incididunt <br />ut labore et dolore magna aliqua.</p>
            <form
                className='form'
                onSubmit={status === 'not subscribed' ? subscribe : unsubscribe}>
                <input
                    type='text'
                    placeholder='Email'
                    value={subscribeEmail}
                    className='email-input'
                    onChange={updateEmailInput}></input>
                <input
                    type='submit'
                    value={status === 'not subscribed' ? 'Subscribe' : 'Unsubscribe'}
                    disabled={disabled}
                    className={disabled ? 'button disabled' : 'button'}></input>
            </form>
        </div>
    )
}