import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewData from '../../hooks/ReviewData';
import SingleReview from './SingleReview';

const HomeReview = () => {
    const [reviews] = ReviewData()
    const SeeAllBtn = useNavigate()
    return (
        <div>
            <h2 className='mt-20 text-3xl font-bold'>Buyer Reviews</h2>
            <div>
                <div className='grid grid-cols-3'>
                    {
                        reviews.slice(0, 3).map(review => <SingleReview
                            review={review}
                            key={review.id}
                        ></SingleReview>)
                    }
                </div>
                <button className='bg-blue-500  text-white py-2 px-10 text-lg rounded my-3 mb-10' onClick={() => SeeAllBtn('/reviews')}>See All Review</button>

            </div>

        </div>
    );
};

export default HomeReview;