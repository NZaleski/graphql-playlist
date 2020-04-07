import React from 'react';
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

function BookList() {
const { loading, error, data} = useQuery(getBooksQuery)
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
