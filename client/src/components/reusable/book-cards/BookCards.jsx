import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../../../assets/icons/shopping-cart.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



const BookCards = ({books, headline}) => {
    return (
        <div className='my-16 px-4 lg:px-24'> 
          <h2 className='text-5xl text-center font-bold text-black my-16'>{headline}</h2>
          {/* Cards  */}
          <div className='mt-12'>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {
            books.map(book => <SwiperSlide key={book._id}>
               <Link to={`/book/${book._id}`}>
                <div className='relative'>
                    <img src={book.imageUrl} alt="Books" />
                    <div className='absolute top-3 right-2 bg-blue-600 hover:bg-black p-2 rounded'>
                    <img src={shoppingCartIcon} alt="Buy" height={20} width={20}/>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-lg my-1'>{book.bookTitle}</h3>
                    <p className='font-semibold text-base mt-0'>{book.authorName}</p>
                </div>
                <div>
                    <p className='mb-16 font-bold text-base'>$
                    <span className='text-green-600 font-bold text-base mx-1'>10.00</span></p>
                </div>
                </Link>
             </SwiperSlide>)
        }
      </Swiper>
      </div>
        </div>
    )
}

export default BookCards;
