import React from 'react';
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <div className='text-center my-52'>
            <p className='text-error'>Error</p>
            <h1 className='text-5xl font-bold'>404</h1>
            <Link className='underline' to="/">Back to Home</Link>
        </div>
    );
};

export default NotFound;