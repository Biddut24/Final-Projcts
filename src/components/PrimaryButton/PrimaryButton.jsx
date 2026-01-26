import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div className='bg-primary rounded-lg p-5 text-center w-auto'>
            {children}
        </div>
    );
};

export default PrimaryButton;