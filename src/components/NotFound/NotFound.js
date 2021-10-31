import React from 'react';
import notfound from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
        </div>
    );
};

export default NotFound;