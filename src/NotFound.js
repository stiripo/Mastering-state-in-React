import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="not-found-block">
            <h2 className="not-found-title">Page Not found</h2>
            <p className="not-found-text">Looks like you've followed a broken link or entered a URL that doesn't exist on this site</p>
            <Link to='/' className="link-to-home">&#10229; Back to our site</Link>
        </div>
    )
}