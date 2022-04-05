import React from 'react';

const SingleReview = ({ review }) => {
    const { img, name, rating, CustomerReview } = review;
    return (
        <div>
            <div className='border border-gray-400 m-5 h-72  rounded-3xl'>
                <div className='m-10'>
                <img className='mx-auto rounded-3xl w-14 drop-shadow-lg' src={img} alt="" />
                <h1 className='text-xl font-bold m-3'>{name}</h1>
                <p className='text-lg font-thin'>{CustomerReview}</p>
                <p className='font-bold m-2'>Rating: ( {rating} )</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;