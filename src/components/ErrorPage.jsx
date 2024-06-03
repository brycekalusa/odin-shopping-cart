import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>
            404 not found
            <Link to="/">Home</Link>
        </div>
    )
}