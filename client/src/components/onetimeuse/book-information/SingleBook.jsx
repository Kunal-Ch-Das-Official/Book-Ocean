import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const { bookTitle, authorName, imageUrl, category, bookDescription, bookPDFURL} = useLoaderData()
    return (
        <div className='mt-28 px-4 lg:px-24 flex w-full flex-col md:flex-row justify-around items-center gap-12 py-20'>
            {/* Left side content  */}
            <div className='flex justify-center w-50'>
            <img src={imageUrl} alt="Book-Image" className='h-96' />
            </div>
            {/* Right side content  */}
           <div className='md:w-1/2 space-y-2 h-full'>
           <h2 className='text-2xl font-bold'>{bookTitle}</h2>
           <h5 className='text-xl font-bold'>{authorName}</h5>
           <div className='text-lg font-medium'>{category}</div>
           <p className='text-base font-medium'>{bookDescription}</p>
           <p className='text-lg font-bold'>Price : <span className='text-green-700'>$ 10.00</span></p>
           <div className='pt-10'>
           <a href={bookPDFURL}  className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 '>Purchase</a>
           </div>
           </div>
           
        </div>
    )
}

export default SingleBook
