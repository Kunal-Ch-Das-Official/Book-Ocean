import React from 'react';
import BannerAnimation from '../../onetimeuse/banner-animation/BannerAnimation';

const Banner = () => {
    return (
        <div>
            <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
                <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                    {/* Left Content  */}
                    <div className='md:w-1/2 space-y-8 h-full'>
                        <h2 className='text-4xl font-bold leading-snug text-black'>
                            Buy And Sell Your Books
                            <span className='text-blue-700'> For The Best Prices</span></h2>
                        <p className='md:w-4/5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex pariatur animi quas eligendi temporibus labore autem dolorum totam quaerat, neque magni voluptatum placeat cumque deleniti. Soluta debitis voluptas placeat deleniti.</p>
                        <div>
                            <input type="text" name='search' id='search' placeholder='Search Your Favorite Book' className='py-2 px-4 rounded-s-sm text-md outline-none' />
                            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                        </div>
                    </div>
                    {/* Right Content  */}
                    <div><BannerAnimation/></div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
