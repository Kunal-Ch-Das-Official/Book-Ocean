import React from 'react';
import Banner from '../../components/reusable/banner/Banner';
import BestSellerBooks from '../../components/onetimeuse/best-seller-books/BestSellerBooks';
import FavoriteBooks from '../../components/onetimeuse/favorite-books/FavoriteBooks';
import PromoBanner from '../../components/onetimeuse/promo-banner/PromoBanner';
import OtherBooks from '../../components/onetimeuse/other-books/OtherBooks';
import Review from '../../components/onetimeuse/review-section/Review';

const Home = () => {
    return (
        
        <>
        <Banner/>
        <BestSellerBooks />
        <FavoriteBooks />
        <PromoBanner />
        <OtherBooks />
        <Review /> 
        </>
    )
}

export default Home;
