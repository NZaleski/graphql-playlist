import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { BOOK_QUERY } from '../queries/queries'
import BookDetails from './BookDetails'


const BookList = () => {
  const { loading, error, data} = useQuery(BOOK_QUERY)
  const [bookId, setBookId] = useState('')
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
      <div>  
          <ul id="book-list">
          {data.books.map(book => (
          <li key={book.id} value={book.name} onClick={()=> {
              setBookId(book.id)
              console.log(bookId)
          }}>
            {book.name}
          </li>
          ))}
          </ul>
          <BookDetails id={bookId}></BookDetails>
      </div>
    );
  }

export default BookList
