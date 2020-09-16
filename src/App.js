import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import BookList from './components/books/BookList'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="container">
            <Route exact path="/" component={BookList} />
        </div>
    </BrowserRouter>
  );
}

export default App;
