import React from "react";
import block from "bem-cn";
import {BookList} from "../../components/BookList/BookList";
import {useBooksGetAll} from "../../hooks/useBooksGetAll";
import {Spinner} from "../../components/Spinner/Spinner";
import './Ref.css'

interface Props {

}

const b = block('ref')

export const Ref: React.FC<Props> = () => {
  const {data, loading} = useBooksGetAll()

  if (loading) {
    return (
      <div className={b('spinner-container')}>
        <Spinner/>
      </div>
    )
  }


  return (
    <div className={b()}>
      <BookList
        books={data}
        loading={loading}
      />
    </div>
  )
}
