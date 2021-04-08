import React, {useCallback, useEffect} from "react";
import block from "bem-cn";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {RootState} from "../../store/types";
import {bookActions} from "../../store/book/action";
import {Book} from "../../types/book";
import {BookState} from "../../store/book/types";
import {BookItem} from "../BookItem/BookItem";

interface OwnProps {

}

interface StateProps {
  books: Book.Data[],
  loading: boolean
}

interface DispatchProps extends BookState.ActionThunk {

}

type Props = OwnProps & StateProps & DispatchProps

const b = block('book-list')

const BookListPresenter: React.FC<Props> = ({books, loading, bookGetAll }) => {
  const fetchBooks = useCallback(async () => {
    await bookGetAll()
  }, [])

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className={b()}>
      {books.map(book => (
        <BookItem
          title={book.title}
          description={book.description}
        />
      ))}
    </div>
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({book}) => ({
  books: book.books,
  loading: book.loading
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {...bookActions}

export const BookList = connect(mapStateToProps, mapDispatchToProps)(BookListPresenter)
