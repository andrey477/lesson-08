import block from 'bem-cn'
import React from 'react'
import './AuthPage.css'

interface Props {
}

const b = block('auth-page')

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <form action="/" className={b('form')}>
        <div className={b('container')}>
          <h1>Авторизация</h1>
          <input type='email' name='login' placeholder='Email' required className={b('email')}/>
          <input type='password' name='password' placeholder='Пароль' required className={b('password')}/>
          <button type='submit' className={b('btn')}>Отправить</button>
        </div>
      </form>
    </div>
  )
}
