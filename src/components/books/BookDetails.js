import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const BOOK_QUERY = gql`
    query getBookQuery($book_id: Int!) {
        book(id: $book_id) {
            title
            authors {
                firstName
                lastName
            }
            topic {
                name
            }
            imageUrl
        }
    }
`;

const BookDetails = (props) => {
    let { book_id } = props.match.params;
    book_id = parseInt(book_id);

    const { loading, error, data } = useQuery(BOOK_QUERY, { variables: { book_id } });

    if (loading) return (
        <div className="container container-books text-center">
            <div className="row">
                <h3>Book Details</h3>            
                <p>Loading...</p>
            </div>
        </div>
    )
    
    if (error) return (
        <div className="container container-books text-center">
            <div className="row">
                <h3>Book Details</h3>            
                <p>Error... :(</p>
            </div>
        </div>
    )
    
    return (
        <div className="container container-books text-center">
            <div className="row">
                <h3>Book Details</h3>
                <br/>
            </div>
            <form className="book-form">
                <div className="form-group">
                    <input className="form-control" name="title" placeholder="Title" value={data.book.title} type="text" disabled />
                </div>

                <div className="form-group">
                    <input className="form-control" name="author" placeholder="Authors" type="text" disabled />
                </div>

                <div className="form-group">
                    <input className="form-control" name="topic" placeholder="Topic" value={data.book.topic.name} type="text" disabled />
                </div>
                
                <div className="form-group">
                    <input className="form-control" name="imageUrl" placeholder="Image" value={data.book.imageUrl} type="text" disabled />
                </div>

                <div className="form-group">
                    <Link to="/">
                        <button className="btn btn-default pull-center" type="button">Back</button>
                    </Link>
                </div>
            </form>       
        </div>
    )    

}

export default BookDetails