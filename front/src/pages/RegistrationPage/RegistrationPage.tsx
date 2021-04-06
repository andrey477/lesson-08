import block from "bem-cn";
import React from "react";
import {AuthForm} from "../../components/Forms/AuthForm/AuthForm";
import {RegistrationForm} from "../../components/Forms/RegistrationForm/RegistrationForm";
import './RegistrationPage.css'

interface Props {
}

const b = block('registration-page')

export const RegistrationPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <div className={b('form')}>
        <RegistrationForm />
      </div>
    </div>
  )
}
