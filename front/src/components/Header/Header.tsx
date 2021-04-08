import block from 'bem-cn'
import React from 'react'
import './Header.css'

interface Props {
  btnLogout?: () => React.ReactNode
}

const b = block('header')

export const Header: React.FC<Props> = ({btnLogout = null}) => (
  <header className={b()}>
    <a className={b('title')}
       href={'/'}
    >
      Cat<span className={b('title', {big: true})}>a</span>log
    </a>
    {!!btnLogout && btnLogout()}
  </header>
)
