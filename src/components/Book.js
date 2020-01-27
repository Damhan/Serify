import React from 'react';
import '../App.scss';

function Book(props) {



  return (
    <div className="book-container">
        <div>
            <img src={props.book.thumbnailUrl} alt="Book cover"/>
        </div>
        <div className="book-footer text-left">
            <h3 className="book-title">{props.book.title}</h3>
            <i className="book-authors">{props.book.authors.join(", ")}</i>
        </div>
    </div>
  );
}

export default Book;
