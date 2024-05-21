import React from 'react';
import starIcon from '../../../assets/icons/star-icon.png';
import halfStarIcon from '../../../assets/icons/half-star-icon-3.png';
import profileImage  from '../../../assets/images/essential/profile.jpg';
import nullIcon from '../../../assets/icons/null-icon.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import ReviewCard from '../../reusable/review-cards/ReviewCard';


const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>


            <div>
<div className='mb-16'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide  className='mb-20'>
            <ReviewCard 
            star_1={starIcon} 
            star_2={starIcon} 
            star_3={starIcon}
            star_4={starIcon}
            star_5={halfStarIcon}
            content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde reiciendis quasi praesentium 
            rerum quibusdam a, officia quidem illum sunt perferendis
            incidunt enim facere mollitia repellendus inventore laborum
            debitis nihil recusandae?`}
            profie={profileImage}
            name={"Mark Luna"}
            from={"CEO of ABC tech"}
            />
        </SwiperSlide>

        <SwiperSlide className='mb-20'>
        <ReviewCard 
            star_1={starIcon} 
            star_2={starIcon} 
            star_3={starIcon}
            star_4={starIcon}
            star_5={starIcon}
            content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde reiciendis quasi praesentium 
            rerum quibusdam a, officia quidem illum sunt perferendis
            incidunt enim facere mollitia repellendus inventore laborum
            debitis nihil recusandae?`}
            profie={profileImage}
            name={"Mark Luna"}
            from={"CEO of ABC tech"}
            />
        </SwiperSlide>

        <SwiperSlide className='mb-20'>
        <ReviewCard 
            star_1={starIcon} 
            star_2={starIcon} 
            star_3={starIcon}
            star_4={halfStarIcon}
            star_5={nullIcon}
            content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde reiciendis quasi praesentium 
            rerum quibusdam a, officia quidem illum sunt perferendis
            incidunt enim facere mollitia repellendus inventore laborum
            debitis nihil recusandae?`}
            profie={profileImage}
            name={"Mark Luna"}
            from={"CEO of ABC tech"}
            />
        </SwiperSlide>

        <SwiperSlide className='mb-20'>
        <ReviewCard 
            star_1={starIcon} 
            star_2={starIcon} 
            star_3={starIcon}
            star_4={nullIcon}
            star_5={nullIcon}
            content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde reiciendis quasi praesentium 
            rerum quibusdam a, officia quidem illum sunt perferendis
            incidunt enim facere mollitia repellendus inventore laborum
            debitis nihil recusandae?`}
            profie={profileImage}
            name={"Mark Luna"}
            from={"CEO of ABC tech"}
            />
        </SwiperSlide>

        <SwiperSlide className='mb-20'>
        <ReviewCard 
            star_1={starIcon} 
            star_2={starIcon} 
            star_3={starIcon}
            star_4={halfStarIcon}
            star_5={nullIcon}
            content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde reiciendis quasi praesentium 
            rerum quibusdam a, officia quidem illum sunt perferendis
            incidunt enim facere mollitia repellendus inventore laborum
            debitis nihil recusandae?`}
            profie={profileImage}
            name={"Mark Luna"}
            from={"CEO of ABC tech"}
            />
        </SwiperSlide>

        <SwiperSlide className='mb-20'>
        <ReviewCard 
            star_1={starIcon} 
            star_2={starIcon} 
            star_3={starIcon}
            star_4={starIcon}
            star_5={halfStarIcon}
            content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde reiciendis quasi praesentium 
            rerum quibusdam a, officia quidem illum sunt perferendis
            incidunt enim facere mollitia repellendus inventore laborum
            debitis nihil recusandae?`}
            profie={profileImage}
            name={"Mark Luna"}
            from={"CEO of ABC tech"}
            />
        </SwiperSlide>

        <SwiperSlide className='mb-20'>
        <ReviewCard 
            star_1={starIcon} 
            star_2={starIcon} 
            star_3={starIcon}
            star_4={starIcon}
            star_5={starIcon}
            content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde reiciendis quasi praesentium 
            rerum quibusdam a, officia quidem illum sunt perferendis
            incidunt enim facere mollitia repellendus inventore laborum
            debitis nihil recusandae?`}
            profie={profileImage}
            name={"Mark Luna"}
            from={"CEO of ABC tech"}
            />
        </SwiperSlide>

        <SwiperSlide className='mb-20'>
        <ReviewCard 
            star_1={starIcon} 
            star_2={starIcon} 
            star_3={starIcon}
            star_4={starIcon}
            star_5={halfStarIcon}
            content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde reiciendis quasi praesentium 
            rerum quibusdam a, officia quidem illum sunt perferendis
            incidunt enim facere mollitia repellendus inventore laborum
            debitis nihil recusandae?`}
            profie={profileImage}
            name={"Mark Luna"}
            from={"CEO of ABC tech"}
            />
        </SwiperSlide>

        <SwiperSlide className='mb-20'>
        <ReviewCard 
            star_1={starIcon} 
            star_2={starIcon} 
            star_3={halfStarIcon}
            star_4={nullIcon}
            star_5={nullIcon}
            content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde reiciendis quasi praesentium 
            rerum quibusdam a, officia quidem illum sunt perferendis
            incidunt enim facere mollitia repellendus inventore laborum
            debitis nihil recusandae?`}
            profie={profileImage}
            name={"Mark Luna"}
            from={"CEO of ABC tech"}
            />
        </SwiperSlide>

      </Swiper>
      </div>
            </div>
        </div>
    )
}

export default Review;
