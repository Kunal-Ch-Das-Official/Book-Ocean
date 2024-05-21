import React, { useEffect, useState } from 'react';
import BookCards from '../../reusable/book-cards/BookCards';

const OtherBooks = (props) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
     fetch("http://localhost:5000/all-books")
     .then(res => res.json())
     .then(data => setBooks(data.slice(0, 10)))
     .catch((err) => {
        console.log(err);
     })
    }, []);
    return (
        <>
           <BookCards books={books} headline="Other Books"/>
        </>
    )
}

export default OtherBooks;
