import { postToServer, handleResponseStatusError } from "./utils";
import { SUBSCRIBE_URL, UNSUBSCRIBE_URL } from "./constants";
import { useSelector, useDispatch } from 'react-redux';
import { cancelSubscription, setSubscription } from "./redux/subscription";
import { updateInput } from "./redux/email_input";
import { disable, enable } from "./redux/disable_button";

export function JoinUsSection() {

    const dispatch = useDispatch();
    const subscribed = useSelector(state => state.statusSubscribed);
    const inputEmail = useSelector(state => state.subscribeEmail);
    const disabled = useSelector(state => state.disabled);

    function subscribe(e) {
        e.preventDefault();
        dispatch(disable());
        postToServer(SUBSCRIBE_URL, JSON.stringify({ email: inputEmail }))
            .then(handleResponseStatusError)
            .then((data) => {
                if (!data.error) {
                    dispatch(setSubscription());
                }
                dispatch(enable())

            })
            .catch(window.alert)
    }

    function unsubscribe(e) {
        e.preventDefault();
        dispatch(disable());
        postToServer(UNSUBSCRIBE_URL, JSON.stringify({ email: inputEmail }))
            .then(() => dispatch(cancelSubscription()))
            .then(() => dispatch(enable()))
    }

    return (
        <div className="section join-us-section">
            <h2 className="h2-title">Join Our Program</h2>
            <p className='subtitle'>Sed do eiusmod tempor incididunt <br />ut labore et dolore magna aliqua.</p>
            <form
                className='form'
                onSubmit={subscribed === false ? subscribe : unsubscribe}>
                <input
                    type='text'
                    placeholder='Email'
                    value={inputEmail}
                    className='email-input'
                    onChange={ (e) => dispatch(updateInput(e.target.value)) }></input>
                <input
                    type='submit'
                    value={subscribed ? 'Unsubscribe' : 'Subscribe'}
                    disabled={disabled}
                    className={disabled ? 'button disabled' : 'button'}></input>
            </form>
        </div>
    )
}