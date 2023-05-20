import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div>
                <h1> 404 Not Found Message </h1>
                <Link to="/" id="backToHomeButton">Go Back</Link>
            </div>
        </>
    );
}

export default NotFound;