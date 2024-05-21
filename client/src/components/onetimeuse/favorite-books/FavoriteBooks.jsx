import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import favBookBg from '../../../assets/images/essential/favoritebook.jpg';
import { Link } from 'react-router-dom';

const FavoriteBooks = () => {
    // When user richout to this section the section will visable 
    const myRef = useRef();
    const [isVisable, setIsvisable] = useState();

    useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{
     const entry = entries[0];
     setIsvisable(entry.isIntersecting);
    })
    observer.observe(myRef.current);
    }, []);


    return (
        <>   
        <div ref={myRef}>
        {  
        isVisable 
            ?
            <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2'>
             <img src={favBookBg} alt="Favorite Book Overview" className='rounded md:w-10/12' />
            </div>
  
            <div className='md:w-1/2 space-y-6'>
              <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite 
              <span className='text-blue-700'> Book Here </span>
              </h2>
              <p className='mb-10 textlg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Esse, necessitatibus molestias autem eligendi voluptate, pariatur veniam accusantium harum officia 
               earum quo, reprehenderit porro numquam facilis laborum maiores dolorum? Laborum, provident.</p>
              <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                  <div>
                      <h3 className='text-3xl font-bold'>
                      <CountUp start={0} end={1200} duration={2.75}></CountUp>+</h3>
                      <p className='text-base font-semibold'>Book Listing</p>
                  </div>
  
                  <div>
                      <h3 className='text-3xl font-bold'>
                      <CountUp start={0} end={2500} duration={2.75}></CountUp>+
                      </h3>
                      <p className='text-base font-semibold'>Register Users</p>
                  </div>
  
                  <div>
                      <h3 className='text-3xl font-bold'>
                      <CountUp start={0} end={500} duration={2.75}></CountUp>+
                      </h3>
                      <p className='text-base font-semibold'>PDF Downloads</p>
                  </div>
              </div>
              <Link to='/shop' className='mt-8 block'>
                <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded
                hover:bg-black transition-all duration-300'>
                    Explore More
                </button>
              </Link>
            </div>
            </div>
            : 
            <div>
                No Content
            </div>

        }
        </div>
        </>

    )
}

export default FavoriteBooks;
