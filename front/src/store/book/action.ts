import {BookState} from "./types";
import {BookAction} from "./BookAction";
import {Book} from "../../types/book";
import {apiBookGetAll} from "../../api/book";

const FetchBooks = (): BookState.Action.FetchBooks => ({
  type: BookAction.FetchBooks
})

const FetchBooksSuccess = (payload: Book.Data[]): BookState.Action.FetchBooksSuccess => ({
  type: BookAction.FetchBooksSuccess,
  payload
})

const FetchBooksError = (payload: string): BookState.Action.FetchBooksError => ({
  type: BookAction.FetchBooksError,
  payload
})

export const bookActions: BookState.ActionThunk = {
  bookGetAll: () => async (dispatch) => {
    dispatch(FetchBooks())
    try {
      const data = await apiBookGetAll()
      dispatch(FetchBooksSuccess(data))
    }
    catch (err) {
      dispatch(FetchBooksError('Ошибка'))
    }
  }
}
