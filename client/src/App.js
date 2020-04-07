import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import BookList from './components/BookList'

const client = new ApolloClient({
  uri: 'http://localhost.com/4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="Main">
        <h1>Nic's Reading List</h1>
        <BookList></BookList>
      </div>
    </ApolloProvider>
  );
}

export default App;
