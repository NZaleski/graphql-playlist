import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { AUTHOR_QUERY, BOOK_QUERY, ADD_BOOK_MUTATION } from '../queries/queries'
import { gql } from 'apollo-boost'


const AddBook = () => {
    const { loading, error, data} = useQuery(AUTHOR_QUERY)
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')
    const [addBook] = useMutation(ADD_BOOK_MUTATION)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({authorId, genre, name})
            addBook({
                variables: { 
                    name, 
                    genre, 
                    authorId
                },
                refetchQueries: [{query: BOOK_QUERY}]
            })
    }


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book Name</label>
                <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
            </div>
            <div className="field">
                <label>Genre</label>
                <input type="text" value={genre} onChange={e=> setGenre(e.target.value)}/>
            </div>
            <div className="field">
                <label>Author</label>
                <select value={authorId} onChange={e=> setAuthorId(e.target.value)}>
                    {data.authors.map(author=>(
                    <option key={author.id} value={author.id}>
                        {author.name}
                    </option>
                    ))}
                    
                </select>
                <button>+</button>
            </div>

        </form>
    );
}

export default AddBook
