import {GET_BOOKS} from './../actions/types';
import {jsonbooks} from './../books';

//Adding some static data to our reducers state.
const initialState = {
    books: jsonbooks
}

export default function(state=initialState, action) {
    switch(action.type) {
        //CASE FOR WHEN ACTION is GET_BOOKS
        //Spred operator returns what is in state.
        case GET_BOOKS:
            return {
                ...state
            }
        default:
            return state;
    }
}