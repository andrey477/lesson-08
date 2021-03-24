import block from 'bem-cn'
import React from 'react'
import './Language.css'

interface Props {
}

const b = block('language')

export const Language: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Language
    </div>
  )
}
