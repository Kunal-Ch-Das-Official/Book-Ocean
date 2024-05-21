import React, { useEffect, useState } from 'react';
import BookCards from '../../reusable/book-cards/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
     fetch("http://localhost:5000/all-books")
     .then(res => res.json())
     .then(data => setBooks(data.slice(10, 20)))
     .catch((err) => {
        console.log(err);
     })
    }, []);
    return (
        <>
           <BookCards books={books} headline="Best Selling Book"/>
        </>
    )
}

export default BestSellerBooks;
