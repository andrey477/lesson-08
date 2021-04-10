import React from "react";
import block from "bem-cn";
import {BookList} from "../../components/BookList/BookList";
import {useBooksGetAll} from "../../hooks/useBooksGetAll";

interface Props {

}

const b = block('ref')

export const Ref: React.FC<Props> = () => {
  const {data, loading} = useBooksGetAll()

  return (
    <div className={b()}>
      <BookList
        books={data}
        loading={loading}
      />
    </div>
  )
}
