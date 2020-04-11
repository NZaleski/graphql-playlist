import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { BOOK_DETAILS_QUERY } from '../queries/queries'


const BookDetails = (props) => {
    const { loading, error, data} = useQuery(BOOK_DETAILS_QUERY, {
        variables: {id: props.id},
        skip: props.id === ""
    })
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (data) {
        return (
            <div id="book-details"> 
                <h2>{data.book.name}</h2>
                <p>{data.book.genre}</p>
                <p>{data.book.author.name}</p>
                <p>All books by this author</p>
                <ul className="other-books">
                    {
                    data.book.author.books.map(book=>{
                        return <li key={book.id}>{book.name}</li>
                    })
                    }
                </ul>
            </div>
        );
    } else {
        return <div>No book selected</div>
    }
}

export default BookDetails
