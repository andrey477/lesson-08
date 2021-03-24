import block from 'bem-cn'
import React from 'react'
import './Genre.css'

interface Props {
}

const b = block('genre')

export const Genre: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Genre
    </div>
  )
}
