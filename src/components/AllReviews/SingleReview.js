import React from 'react';

const SingleReview = ({ review }) => {
    const {  name, rating, CustomerReview } = review;
    return (
        <div >
            <div className='border  m-5 h-72 shadow-xl  rounded-3xl'>
                <div className='m-10'>
                <h1 className='text-xl font-bold m-3'>{name}</h1>
                <p className='text-lg font-thin'>{CustomerReview}</p>
                <p className='font-bold m-2'>Rating: ( {rating} )</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;