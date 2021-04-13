import React, {MouseEventHandler} from "react";
import block from "bem-cn";
import {Button} from "../Button/Button";
import {Link} from 'react-router-dom'
import {browserHistory} from "../../browserHistory";
import './Card.css'

interface Props {
  title: string,
  path: string
}

const b = block('card')

export const Card: React.FC<Props> = ({title, path}) => {
    const handlerClick: MouseEventHandler<HTMLButtonElement> = event => {
      event.preventDefault()
      browserHistory.push(path)
    }

    return (
      <div className={b()}>
        <Link to={path} className={b('link')}>
          {title}
        </Link>
      </div>
    )
}


