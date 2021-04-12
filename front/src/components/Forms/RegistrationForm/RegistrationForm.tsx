import {AppState} from "../../../store/app/types";
import block from "bem-cn";
import * as Yup from "yup";
import {User} from "../../../types/user";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {RootState} from "../../../store/types";
import {appActions} from "../../../store/app/action";
import {useFormik} from "formik";
import React, {MouseEventHandler, useState} from "react";
import {Link} from 'react-router-dom'
import {Input} from "../../Input/Input";
import {InputType} from "../../Input/InputType";
import {Button} from "../../Button/Button";
import './RegistrationForm.css'
import {apiUserCreate} from "../../../api/user";
import {browserHistory} from "../../../browserHistory";
import {Spinner} from "../../Spinner/Spinner";

interface Props {

}

const b = block('registration-form')

const schema: Yup.SchemaOf<User.Create.Param> = Yup.object().shape(({
  login: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string().required()
}))

export const RegistrationForm: React.FC<Props> = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {errors, values, submitForm, handleChange} = useFormik<User.Create.Param>({
    initialValues: {
      email: '',
      login: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      try {
        setLoading(true)
        await apiUserCreate(fields)
        browserHistory.push('/auth')
      }
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }
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
        error={errors?.login}
        value={values.login}
        label={'login'}
        onChange={handleChange}
      />
      <Input
        name={'email'}
        className={b('field')}
        error={errors?.email}
        value={values.email}
        label={'email'}
        onChange={handleChange}
      />
      <Input
        name={'password'}
        className={b('field')}
        error={errors?.password}
        value={values.password}
        label={'password'}
        onChange={handleChange}
        htmlType={InputType.Password}
      />
      <Input
        name={'passwordConfirm'}
        className={b('field')}
        error={errors?.passwordConfirm}
        value={values.passwordConfirm}
        label={'passwordConfirm'}
        onChange={handleChange}
        htmlType={InputType.Password}
      />
      <div className={b('btn-container')}>
        <Link to={'/auth'} className={b('link')}>
          <Button className={b('button')}>
            Войти
          </Button>
        </Link>
        <Button className={b('button')} onClick={handlerSubmit}>
          {!!loading && <Spinner/>}
          <span>Зарегистрироваться</span>
        </Button>
      </div>
    </form>
  )
}
