import React from 'react';
import { Avatar } from "flowbite-react";



const ReviewCard = ({content, name, from, profie, star_1, 
                     star_2, star_3, star_4, star_5}) => {
    return (
        <div className='space-y-6 cursor-move review-box shadow-2xl bg-white py-8'>
        <div className='flex gap-2 justify-center items-center'>
            <img src={star_1} alt="review-icon" className='h-5 w-5'/>
            <img src={star_2} alt="review-icon" className='h-5 w-5'/>
            <img src={star_3} alt="review-icon" className='h-5 w-5'/>
            <img src={star_4} alt="review-icon" className='h-5 w-5'/>
            <img src={star_5} alt="review-icon" className='h-5 w-5'/>
            
        </div>
        <div className='mt-7 flex flex-col justify-center items-center'>
            <p className='mb-5 flex justify-center items-center'>{content}</p>
            <Avatar img={profie} alt="avatar of Jese" rounded className='w-10 mb-4' />
            <h5 className='text-lg font-medium'>{name}</h5>
            <p className='text-base'>{from}</p>
        </div>
        </div>
    )
}



export default ReviewCard;
