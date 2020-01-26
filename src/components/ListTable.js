import React, {useEffect} from 'react';
import '../App.css';
import MaterialTable from 'material-table';
import {getBooks} from './../actions/bookActions';
import {useSelector,useDispatch} from 'react-redux';
import {jsonbooks} from './../books';

function ListTable() {



  const bookR = useSelector(state => state.bookR)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks())
  },[])


  return (
    <div>
        <h1 style={{color:"charcoal", fontSize:"2em", textAlign:"center"}}>Serify</h1>
        <MaterialTable
        columns={[
                { title: 'Name', field: 'title' },
                { title: 'Genre', field: 'categories' },
                { title: 'Author', field: 'authors' }
            ]}
        data={bookR.books}
        title="Demo Table"
        options={{
            search:true
        }}
        />
    </div>
  );
}

export default ListTable;
