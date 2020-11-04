import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const BOOK_QUERY = gql`
    query getBookQuery($book_id: Int!) {
        book(id: $book_id) {
            title
            authors {
                id
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
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2">
                                <label htmlFor="title">Title:</label>
                            </div>
                            <div className="col-md-10">
                                <input className="form-control" name="title" placeholder="Title" value={data.book.title} type="text" disabled />
                            </div>
                        </div>
                        <div className="row">&nbsp;</div>

                        <div className="row">
                            <div className="col-md-2">
                                <label htmlFor="authors">Authors:</label>
                            </div>
                            <div className="col-md-10">
                            <select name="authors" multiple className="form-control">
                            { data.book.authors.map((author) => {
                                return <option value={author.id} key={author.id}>{author.firstName + " " + author.lastName}</option>
                            })}                                
                            </select>
                            </div>                            
                        </div>
                        <div className="row">&nbsp;</div>

                        <div className="row">
                            <div className="col-md-2">
                                <label htmlFor="topic">Topic:</label>
                            </div>
                            <div className="col-md-10">
                                <input className="form-control" name="topic" placeholder="Topic" value={data.book.topic.name} type="text" disabled />
                            </div>
                        </div>
                        <div className="row">&nbsp;</div>
                        
                        <div className="row">
                            <div className="col-md-2">
                                <label htmlFor="imageUrl">Image URL:</label>
                            </div>
                            <div className="col-md-10">
                                <input className="form-control" name="imageUrl" placeholder="Image" value={data.book.imageUrl} type="text" disabled />
                            </div>
                        </div>
                        <div className="row">&nbsp;</div>

                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <img className="book-details" src={data.book.imageUrl} />
                        </div>
                    </div>
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