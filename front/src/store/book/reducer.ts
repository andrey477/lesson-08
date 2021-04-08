import {BookState} from "./types";
import {Reducer} from "redux";
import {BookAction} from "./BookAction";

const initState: BookState.State = {
  books: [],
  loading: false,
  errors: ''
}

export const bookReducer: Reducer<BookState.State, BookState.Action.All> = (state = initState, action) => {
  switch (action.type) {
    case BookAction.FetchBooks:
      return {
        ...state,
        loading: true
      }
    case BookAction.FetchBooksSuccess:
      return {
        ...state,
        books: action.payload,
        loading: false
      }
    case BookAction.FetchBooksError:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    default:
      return state
  }
}
