import {Book} from "../../types/book";
import {Action as ActionRedux} from 'redux'
import {BookAction} from "./BookAction";
import {Thunk} from "../../types/base";

export declare namespace BookState {
  interface State {
    readonly books: Book.Data[],
    readonly loading: boolean,
    readonly errors: string
  }

  namespace Action {
    type FetchBooks = ActionRedux<BookAction.FetchBooks> & {payload?: undefined}
    type FetchBooksSuccess = ActionRedux<BookAction.FetchBooksSuccess> & {payload: Book.Data[]}
    type FetchBooksError = ActionRedux<BookAction.FetchBooksError> & {payload: string}

    type All = FetchBooks | FetchBooksSuccess | FetchBooksError
  }

  interface ActionThunk {
    bookGetAll: Thunk
  }
}
