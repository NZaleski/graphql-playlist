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

export {AUTHOR_QUERY, BOOK_QUERY}