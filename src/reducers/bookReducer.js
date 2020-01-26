import {GET_BOOKS} from './../actions/types';
import {jsonbooks} from './../books';

//Adding some static data to our reducers state.
const initialState = {
    books: jsonbooks
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