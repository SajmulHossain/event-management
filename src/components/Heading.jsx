import React from 'react';

const Heading = ({heading, paragraph}) => {
    return (
        <div className='flex items-center flex-col mb-8'>
            <h3 className='font-cursive mb-2 font-bold text-2xl'>{heading}</h3>
            {
                paragraph && <p className='italic text-gray-600'>{paragraph}</p>
            }
        </div>
    );
};

export default Heading;