import React, { useState, useEffect } from 'react'
import BookCard from '../components/BookCard';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-books').then(res => res.json()).then(data => setBooks(data.slice(0,8)))
    },[])

  return (
    <div>
      <BookCard books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks