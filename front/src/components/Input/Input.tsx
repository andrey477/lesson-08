import {BaseComponents} from "../../types/base";
import {InputType} from "./InputType";
import {ChangeEventHandler, useEffect, useState} from "react";
import block from "bem-cn";
import {emptyFunction} from "../../utils";
import './Input.css'

interface Props extends BaseComponents{
  label?: string;
  defaultValue?: string;
  value?: string;
  name: string;
  htmlType?: InputType;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  placeholder?: string;
  disable?: boolean;
}

const b = block('input')

export const Input: React.FC<Props> = ({
  className= '',
  label = '',
  value = '',
  defaultValue = '',
  htmlType = InputType.Text,
  name,
  onChange= emptyFunction,
  error = '',
  placeholder = '',
  disable = false
}) => {
  const [currentValue, setCurrentValue ] = useState<string>(defaultValue)

  const handlerChange: ChangeEventHandler<HTMLInputElement> = event => {
    event.preventDefault()
    setCurrentValue(event.target.value)
    onChange(event)
  }

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  return (
    <div className={b({}).mix(className)}>
      <div className={b('container')}>
        {!!label && <label className={b('label')}>{label}</label>}
        <input
          className={b('input')}
          value={currentValue}
          onChange={handlerChange}
          type={htmlType}
          name={name}
          placeholder={placeholder}
          disabled={disable}
        />
      </div>
      {!!error && <p className={b('error')}>{error}</p>}
    </div>
  )
}
