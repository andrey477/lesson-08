import React, {useCallback, useEffect} from "react";
import block from "bem-cn";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {RootState} from "../../store/types";
import {Book} from "../../types/book";
import {BookItem} from "../BookItem/BookItem";
import './BookList.css'

interface Props {
  books: Book.Data[],
  loading: boolean
}

const b = block('book-list')

export const BookList: React.FC<Props> = ({books, loading}) => {


  return (
    <div className={b()}>
      {books.map(book => (
        <BookItem
          title={book.title}
          description={book.description}
          year={book.year}
        />
      ))}
    </div>
  )
}
