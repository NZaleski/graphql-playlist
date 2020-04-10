import { gql } from 'apollo-boost'

const AUTHOR_QUERY = gql`
     {
        authors {
            name
            id
        }
    }
`

const BOOK_QUERY = gql`
    {
        books {
            name
            id
        }
    }
`

const ADD_BOOK_MUTATION = gql`
    mutation addBook ($name: String!, $genre: String!, $authorId: ID!) {
        addBook (name: $name, genre: $genre, authorId: $authorId) {
            name
            genre
        }
    }
`

export { AUTHOR_QUERY, BOOK_QUERY, ADD_BOOK_MUTATION }