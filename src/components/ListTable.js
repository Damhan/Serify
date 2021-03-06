import React, {useEffect, useState} from 'react';
import '../App.scss';
import {getBooks} from './../actions/bookActions';
import {useSelector,useDispatch} from 'react-redux';
import Book from './Book'
import SearchIcon from '@material-ui/icons/Search';

function ListTable() {

  /* compareLength(Length1, Length2)
    comparitor for sorting books by length.
  */
  const compareLength = ( a, b ) => {
    if ( a.pageCount < b.pageCount ){
      return -1;
    }
    if ( a.pageCount > b.pageCount ){
      return 1; 
    }
    return 0;
  }

  /* compareDate(Date1, Date2)
    comparitor for sorting books by date.
  */
  const compareDate = ( a, b ) => {
    const first = a.publishedDate.$date;
    const second = b.publishedDate.$date;
    if (new Date(first) < new Date(second)){
      return -1;
    }
    if (new Date(first) > new Date(second)){
      return 1; 
    }
    return 0;
  }

  const bookR = useSelector(state => state.bookR)

  const[sortLength, setSortLength] = useState(true);

  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  //Handler for sorting by length or date, default is length.
  //Sorts by date when sort length is set to false.
  const handleSort = (e) => {
    if(e.target.value.includes("length")) {
      setSortLength(true)
    }
    else {
      setSortLength(false)
    }
  }


  useEffect(() => {
    dispatch(getBooks())
  },[])

  //-Filter acording to search bar.
  //-Check sort type, then sort list.
  //-Map through list.
  const books = bookR.books.filter((book) => book.title.toLowerCase().includes(filter.toLowerCase())).sort(sortLength ? compareLength : compareDate).map((book)=>
    <Book key={book.isbn} book={book}/>
  );

  return (
    <div>
      <div className="list-functions">
        <select className="sort-select" onChange={handleSort}>
          <option value="length">Length</option>
          <option value="date">Date</option>
        </select>
        <div className="search-bar">
          <SearchIcon/>
          <input type="text" value={filter}
          onChange={handleFilter}
          placeholder="Search.."/>
        </div>
      </div>

        <div className="books-container">
          {books}
        </div>
    </div>
  );
}

export default ListTable;
