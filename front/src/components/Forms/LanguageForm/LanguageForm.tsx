import React, {MouseEventHandler, useState} from "react";
import block from "bem-cn";
import {Language} from "../../../types/language";
import * as Yup from 'yup'
import {useFormik} from "formik";
import {Input} from "../../Input/Input";
import {Button} from "../../Button/Button";
import {apiLanguageCreate, apiLanguageUpdate} from "../../../api/language";
import './LanguageForm.css'
import {Spinner} from "../../Spinner/Spinner";
import {browserHistory} from "../../../browserHistory";

interface Props {
  data: Language.Data | null
}

const b = block('language-form')

const schema: Yup.SchemaOf<Language.Create.Params> = Yup.object().shape(({
  name: Yup.string().required()
}))

export const LanguageForm: React.FC<Props> = ({data}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const {handleChange, values, errors, submitForm} = useFormik<Language.Create.Params>({
    initialValues: {
      name: data?.name ?? ''
    },
    validationSchema: schema,
    onSubmit: async (field) => {
      try {
        setLoading(true)
        let id: number
        if (data) {
          id = data.id
          const params = {...data, ...field}
          await apiLanguageUpdate(params)
        } else {
          const res = await apiLanguageCreate(field)
          id = res.id
        }
        browserHistory.push(`/ref/languages/${id}`)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }

    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  console.log(data)

  return (
    <form className={b()}>
      <Input
        name={'name'}
        onChange={handleChange}
        label={'Язык:'}
        error={errors.name}
        value={values.name}
        className={b('input')}
        defaultValue={values.name}
        placeholder={'Введите язык:'}
      />
      <Button
        className={b('btn')}
        onClick={handlerSubmit}
      >
        {loading && <Spinner/>}
        {!!data ? 'Сохранить' : 'Создать'}
      </Button>
    </form>
  )
}
