import {GET_BOOKS} from './types';

//Send the action type with it.
export const getBooks = () => {
    return {
        type: GET_BOOKS
    }
}