import React from 'react';
import { Link } from 'react-router-dom';
import awardBooks from '../../../assets/images/essential/awardbooks.png';

const PromoBanner = () => {
    return (
        <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>
                2023 National Book Awards For Fiction Shortlist</h2>
                <Link to='/shop' className='mt-8 block'>
                <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded
                hover:bg-black transition-all duration-300'>
                    Get Promo Code
                </button>
              </Link>
            </div>
            <div>
                <img src={awardBooks} alt="Some-Book-Graphics" className='w-96'/>
            </div>
        </div>
        </div>
    )
}

export default PromoBanner;
