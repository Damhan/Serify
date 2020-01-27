import React, {useEffect} from 'react';
import '../App.scss';
import {getBooks} from './../actions/bookActions';
import {useSelector,useDispatch} from 'react-redux';
import Book from './Book'

function ListTable() {

  const bookR = useSelector(state => state.bookR)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks())
  },[])


  const books = bookR.books.map((book) =>
    <Book key={book.isbn} book={book}/>
  );

  return (
    <div>
        <h1 style={{color:"charcoal", fontSize:"2em", textAlign:"center"}}>Serify</h1>
        <div className="books-container">
          {books}
        </div>
    </div>
  );
}

export default ListTable;
