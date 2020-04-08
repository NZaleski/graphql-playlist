import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { BOOK_QUERY } from '../queries/queries'


function BookList() {
const { loading, error, data} = useQuery(BOOK_QUERY)
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div>  
        {console.log(this)}
        <ul id="book-list">
        {data.books.map(book => (
        <li key={book.id} value={book.name}>
          {book.name}
        </li>
        ))}
        </ul>
    </div>
  );
}

export default BookList
