import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import {AUTHOR_QUERY} from '../queries/queries'


function AddBook() {
const { loading, error, data} = useQuery(AUTHOR_QUERY)
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <form id="add-book">
        <div className="field">
            <label>Book Nane</label>
        </div>
        <div className="field">
            <label>Genre</label>
        </div>
        <div className="field">
            <label>Author</label>
            <select>
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
