import React, {Fragment} from "react";
import block from "bem-cn";
import {Book} from "../../types/book";

interface Props {
  title: string,
  description: string
}

const b = block('book-item')

export const BookItem: React.FC<Props> = ({title, description}) => {
  return (
    <div className={b()}>
      <h2 className={b('title')}>{title}</h2>
      <p className={b('desc')}>{description}</p>
    </div>
  )
}
