import React from 'react'

import '../../styles.css'

const BookItem = ({ book  }) => {
    return (
        <div className="col-sm-4">
            <div className="panel panel-default">
                <div className="panel-heading" style={{ height:50 }}>{ book.title }</div>
                <div className="panel-body">
                    <img className="book-image" src={ book.imageUrl } alt={ book.title } />
                    <br/><br/>
                    <p className="book-add-icon">
                        <i className="fa fa-pencil"></i>
                        &nbsp;
                        <i className="fa fa-remove"></i>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookItem