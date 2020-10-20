import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import BookList from './components/books/BookList'
import About from './components/About'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
          <Navbar />
          <div className="container">
              <Route exact path="/" component={BookList} />
              <Route path="/about" component={About} />
          </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
