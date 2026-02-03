import React from 'react';
const PrimaryButton = ({ children }) => {
    return (
        <div className='bg-primary rounded-lg px-7 md:px-7 py-2 md:py-4 text-center w-auto text-white font-semibold'>
            {children}
        </div>
    );
};

export default PrimaryButton;