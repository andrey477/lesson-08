import React, {MouseEventHandler} from "react";
import block from "bem-cn";
import './AuthForm.css'
import {AppState} from "../../../store/app/types";
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import {Auth} from "../../../types/auth";
import {useFormik} from "formik";
import {Input} from "../../Input/Input";
import {Button} from "../../Button/Button";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {RootState} from "../../../store/types";
import {appActions} from "../../../store/app/action";
import {InputType} from "../../Input/InputType";
import '../Forms.css'
import {Spinner} from "../../Spinner/Spinner";

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps extends AppState.ActionThunk {
}

interface OwnProps {

}

type Props = OwnProps & StateProps & DispatchProps

const b = block('auth-form')

const schema: Yup.SchemaOf<Auth.Login.Params> = Yup.object().shape(({
  login: Yup.string().required(),
  password: Yup.string().required()
}))

const AuthFormPresenter: React.FC<Props> = ({loading, errorText, appLogin}) => {
  const {errors, values, submitForm, handleChange} = useFormik<Auth.Login.Params>({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appLogin(fields)
    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  return (
    <form className={b({})}>
      <h2 className={b('title')}>Авторизация</h2>
      <Input
        name={'login'}
        className={b('field')}
        label={'Имя'}
        value={values.login}
        onChange={handleChange}
        error={errors?.login}
        disable={loading}
      />
      <Input
        name={'password'}
        className={b('field')}
        label={'password'}
        value={values.password}
        onChange={handleChange}
        error={errors?.password}
        disable={loading}
        htmlType={InputType.Password}
      />
      {!!errorText && <p className={b('error')}>{errorText}</p>}
      <div className={b('btn-container')}>
        <Link to={'/registration'} className={b('link')}>
          <Button className={b('button')} disabled={loading}>
            Регистрация
          </Button>
        </Link>
        <Button className={b('button')}  onClick={handlerSubmit} disabled={loading}>
          {!!loading && <Spinner/>}
          <span>Войти</span>
        </Button>
      </div>
    </form>
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({app}) => ({
  loading: app.loading,
  errorText: app.errorText
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {...appActions}

export const AuthForm = connect(mapStateToProps, mapDispatchToProps)(AuthFormPresenter)
