import React, {MouseEventHandler} from "react";
import block from "bem-cn";
import {Button} from "../Button/Button";
import {browserHistory} from "../../browserHistory";
import './PageItem.css'

interface Props {
  title: string,
  editPath?: string
}

const b = block('page-item')

export const PageItem: React.FC<Props> = ({title, editPath}) => {

  const handlerClick: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    if (editPath)
      browserHistory.push(editPath)
  }

  return (
    <div className={b()}>
      <h1 className={b('title')}>{title}</h1>
      {!!editPath && (
        <Button
          className={b('button')}
          onClick={handlerClick}
        >
          Редактировать
        </Button>
      )}
    </div>
  )
}
