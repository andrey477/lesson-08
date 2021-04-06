import {AppState} from "../../../store/app/types";
import block from "bem-cn";
import * as Yup from "yup";
import {User} from "../../../types/user";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {RootState} from "../../../store/types";
import {appActions} from "../../../store/app/action";
import {useFormik} from "formik";
import React, {MouseEventHandler} from "react";
import {Link} from 'react-router-dom'
import {Input} from "../../Input/Input";
import {InputType} from "../../Input/InputType";
import {Button} from "../../Button/Button";
import './RegistrationForm.css'

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps extends AppState.ActionThunk {
}

interface OwnProps {

}

type Props = OwnProps & StateProps & DispatchProps

const b = block('registration-form')

const schema: Yup.SchemaOf<User.Create.Param> = Yup.object().shape(({
  login: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string().required()
}))

const RegistrationFormPresenter: React.FC<Props> = ({loading, errorText, appRegister}) => {
  const {errors, values, submitForm, handleChange} = useFormik<User.Create.Param>({
    initialValues: {
      email: '',
      login: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appRegister(fields)
    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  return (
    <form className={b()}>
      <h2 className={b('title')}>Регистрация</h2>
      <Input
        name={'login'}
        className={b('field')}
        disable={loading}
        error={errors?.login}
        value={values.login}
        label={'login'}
        onChange={handleChange}
      />
      <Input
        name={'email'}
        className={b('field')}
        disable={loading}
        error={errors?.email}
        value={values.email}
        label={'email'}
        onChange={handleChange}
      />
      <Input
        name={'password'}
        className={b('field')}
        disable={loading}
        error={errors?.password}
        value={values.password}
        label={'password'}
        onChange={handleChange}
        htmlType={InputType.Password}
      />
      <Input
        name={'passwordConfirm'}
        className={b('field')}
        disable={loading}
        error={errors?.passwordConfirm}
        value={values.passwordConfirm}
        label={'passwordConfirm'}
        onChange={handleChange}
        htmlType={InputType.Password}
      />
      {!!errorText && <p className={b('error')}>{errorText}</p>}
      <div className={b('btn-container')}>
        <Link to={'/auth'} className={b('link')}>
          <Button className={b('button')} text={'Войти'} disabled={loading}/>
        </Link>
        <Button className={b('button')} text={'Зарегистрироваться'} onClick={handlerSubmit} disabled={loading}/>
      </div>
    </form>
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({app}) => ({
  loading: app.loading,
  errorText: app.errorText
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {...appActions}

export const RegistrationForm = connect(mapStateToProps, mapDispatchToProps)(RegistrationFormPresenter)
