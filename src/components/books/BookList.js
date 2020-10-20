import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import BookItem from './BookItem'

const BOOKS_QUERY = gql`
  {
    books {
      id
      title
      imageUrl
    }
  }
`;

const BookList = () => {
    const { loading, error, data } = useQuery(BOOKS_QUERY);

    if (loading) return (
      <div className="container container-books text-center">
        <h3>Book List</h3>      
        <p>Loading...</p>
      </div>
    )

    if (error) return (
      <div className="container container-books text-center">
        <h3>Book List</h3>      
        <p>Error :(</p>
      </div>
    )

    return (
        <div className="container container-books text-center">
          <h3>Book List</h3>
          <br/>

          { 
            data.books.length ? (
                data.books.map(book => (
                  <BookItem key={book.id} book={book} />
                ))
            ) : (
                <div className="col-sm-12">
                    <div className="panel panel-info">
                        <div className="panel-body">
                            No books available.
                        </div>
                    </div>
                </div>                    
            )
          }          

        </div>
    
    )    

}

export default BookList