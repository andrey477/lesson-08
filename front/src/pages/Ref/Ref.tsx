import React from "react";
import block from "bem-cn";
import {BookList} from "../../components/BookList/BookList";

interface Props {

}

const b = block('ref')

export const Ref: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <BookList />
    </div>
  )
}
