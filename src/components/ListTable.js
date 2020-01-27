import React, {useEffect, useState} from 'react';
import '../App.scss';
import {getBooks} from './../actions/bookActions';
import {useSelector,useDispatch} from 'react-redux';
import Book from './Book'
import SearchIcon from '@material-ui/icons/Search';

function ListTable() {

  const bookR = useSelector(state => state.bookR)

  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFilter(e.target.value);
  }
    /* TODO:
    -Implement handlesort.
    -Implement sort based on select choice.
    -Use compare method for pagecount sort.
    -Implement compare method for date sort.
    */
  const handleSort = (e) => {

  }

  //TODO:
  //Use this
  const compare = ( a, b ) => {
    if ( a.pageCount < b.pageCount ){
      return -1;
    }
    if ( a.pageCount > b.pageCount ){
      return 1;
    }
    return 0;
  }

  //FIXME:
  //Throwing a warning about useEffect hook missing dispatch dependancy.
  useEffect(() => {
    dispatch(getBooks())
  },[])


  const books = bookR.books.filter((book) => book.title.toLowerCase().includes(filter.toLowerCase())).map((book)=>
    <Book key={book.isbn} book={book}/>
  );

  return (
    <div>
        <div className="search-bar">
          <SearchIcon/>
          <input type="text" value={filter}
          onChange={handleChange}
          placeholder="Search.."/>
        </div>
        <select onChange={handleSort}>
          <option value="length">Length</option>
          <option value="date">Date</option>
        </select>
        <h1 style={{color:"charcoal", fontSize:"2em", textAlign:"center"}}>Serify</h1>
        
        <br/>

        <div className="books-container">
          {books}
        </div>
    </div>
  );
}

export default ListTable;
