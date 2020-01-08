import uuid from 'uuid';
import {GET_BOOKS} from './../actions/types';

//Adding some static data to our reducers state.
const initialState = {
    books: [
        {id: uuid(), name:"book1", genre:"horror", author:"J.K Rowling"},
        {id: uuid(), name:"book2", genre:"sci-fi", author:"Some Author"}
    ]
}

export default function(state=initialState, action) {
    switch(action.type) {
        //CASE FOR WHEN ACTION is GET_NOTES
        //We are using the spread operator to just return what is in our state.
        case GET_BOOKS:
            return {
                ...state
            }
        default:
            return state;
    }
}