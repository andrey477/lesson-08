import block from 'bem-cn'
import React from 'react'
import './MainMenu.css'
import {Link} from 'react-router-dom'

interface Props {
}

const b = block('main-menu')

export const MainMenu: React.FC<Props> = () => {
  return (
    <nav className={b()}>
      <div className={b('container')}>
        <Link to="/catalog" className={b('link')}>Каталог</Link>
        <Link to="/ref" className={b('link')}>Справочники</Link>
      </div>
    </nav>
  )
}
