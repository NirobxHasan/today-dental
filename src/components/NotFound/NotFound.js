import React from 'react';
import img from '../../images/404.png';
const NotFound = () => {
    return (
        <div>
            <img
                className="img-fluid"
                src={img}
                style={{ width: '100%' }}
                alt=""
            />
        </div>
    );
};

export default NotFound;
