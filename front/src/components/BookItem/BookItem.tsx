import React, {Fragment} from "react";
import block from "bem-cn";
import {Book} from "../../types/book";
import './BookItem.css'

interface Props {
  title: string,
  description: string,
  year: number
}

const b = block('book-item')

export const BookItem: React.FC<Props> = ({title, description, year}) => {
  return (
    <div className={b()}>
      <h2 className={b('title')}>{title}</h2>
      <p className={b('desc')}>{description}</p>
      <span className={b('year')}>{year}</span>
    </div>
  )
}
