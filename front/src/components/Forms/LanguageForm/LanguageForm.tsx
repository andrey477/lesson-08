import React, {MouseEventHandler, useState} from "react";
import block from "bem-cn";
import {Language} from "../../../types/language";
import * as Yup from 'yup'
import {useFormik} from "formik";
import {Input} from "../../Input/Input";
import {Button} from "../../Button/Button";
import {apiLanguageCreate, apiLanguageUpdate} from "../../../api/language";

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
        if (data) {
          const params = {...data, ...field}
          await apiLanguageUpdate(params)
        } else {
          await apiLanguageCreate(field)
        }
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

  console.log(data)

  if (loading) {
    return <p>Loading</p>
  }

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
        // placeholder={'Введите язык:'}
      />
      <Button
        text={!!data ? 'Сохранить' : 'Создать'}
        className={b('btn')}
        onClick={handlerSubmit}
      />
    </form>
  )
}
