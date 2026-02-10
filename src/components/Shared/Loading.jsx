import React from 'react';
import loading from '../../assets/images/loading.gif'

const Loading = () => {
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen '>
                <img className='img-fluid' src={loading} alt="website loading" />
            </div>
        </div>
    );
};

export default Loading;