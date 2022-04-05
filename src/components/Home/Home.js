import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeReview from '../AllReviews/HomeReview';

const Home = () => {
    const ExploreBtn = useNavigate()
    return (
        <div>
            <div className='grid grid-cols-2 bg-slate-800 '>
                <div className='m-auto'>
                    <h1 className='text-white text-5xl'>CAR CUSTOMER REVIEWS</h1>
                    <p className='text-gray-200  px-24 mt-4'>Blindsided by a new generation of racers, Lightning McQueen is pushed out of the sport he loves. To get back in the game, he'll need the help of young race technician Cruz Ramirez.</p>
                    <button className='py-2 px-10 bg-white mt-5 text-lg rounded' onClick={() => ExploreBtn('/about')}>Visite</button>
                </div>
                <div>
                    <img src="/Images/car.png" alt="" />
                </div>
            </div>
            <HomeReview></HomeReview>
        </div>

    );
};

export default Home;