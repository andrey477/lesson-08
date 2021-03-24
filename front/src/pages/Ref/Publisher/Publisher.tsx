import block from 'bem-cn'
import React from 'react'
import './Publisher.css'

interface Props {
}

const b = block('publisher')

export const Publisher: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Publisher
    </div>
  )
}
