import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import BookList from './components/books/BookList'
import About from './components/About'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="container">
            <Route exact path="/" component={BookList} />
            <Route path="/about" component={About} />
        </div>
    </BrowserRouter>
  );
}

export default App;
