import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div className='bg-purple-500 p-3 m-2 rounded-lg text-center text-white font-bold hover:bg-purple-700 transition duration-300'>
            <button>{children}</button>
        </div>
    );
};

export default PrimaryButton;