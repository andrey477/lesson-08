import React from "react";
import block from "bem-cn";
import './AuthForm.css'

interface Props {

}

const b = block('auth-form')

export const AuthForm: React.FC<Props> = () => {
  return (
    <form className={b()} method="post">
      <div className={b('row')}>
        <label htmlFor="email" className={b('label')}>Email</label>
        <input
          type="email"
          className={b('input')}
          name="email"
          placeholder="Введите ваш email:"
        />
      </div>
      <div className={b('row')}>
        <label htmlFor="password" className={b('label')}>Пароль</label>
        <input
          type="password"
          className={b('input')}
          name="password"
          placeholder="Введите ваш пароль:"
        />
      </div>
      <div className={b('row')}>
        <button className={b('button')}>Войти</button>
      </div>
    </form>
  )
}
