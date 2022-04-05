import React from 'react';
import ReviewData from '../../hooks/ReviewData';
import SingleReview from './SingleReview';

const CustomerAllReview = () => {
    const [reviews] = ReviewData()
    return (
        <div >
            <h3 className='mt-10 text-3xl font-bold'>Buyer Reviews</h3>
            

            <div className='grid grid-cols-3'>
            {
                reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
            }
            </div>

        </div>
    );
};

export default CustomerAllReview;