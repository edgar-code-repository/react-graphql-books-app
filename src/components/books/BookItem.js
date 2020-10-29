import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles.css'

const BookItem = ({ book  }) => {
    return (
        <div className="col-sm-4">
            <div className="panel panel-default">
                <div className="panel-heading" style={{ height:50 }}>{ book.title }</div>
                <div className="panel-body">
                    <Link to={'/bookDetails/' + book.id}>
                        <img className="book-image" src={ book.imageUrl } alt={ book.title } />
                    </Link>
                    <br/><br/>
                    <p>
                        <Link to={'/bookDetails/' + book.id}>
                            <span className="fas fa-paint-brush" style={{fontSize:20, color:"black"}}></span>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={'/bookDetails/' + book.id}>
                            <span className="fas fa-cut" style={{fontSize:20, color:"black"}}></span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookItem