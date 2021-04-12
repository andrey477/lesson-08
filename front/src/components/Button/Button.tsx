import {BaseComponents} from "../../types/base";
import {MouseEventHandler} from "react";
import block from "bem-cn";
import './Button.css'
import {emptyFunction} from "../../utils";

interface Props extends BaseComponents {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  htmlType?: 'submit' | 'reset' | 'button';
}

const b = block('button')

export const Button: React.FC<Props> = ({
  className = '',
  onClick = emptyFunction,
  disabled = false,
  htmlType = 'button',
  children
}) => {
  return (
    <button
      className={b({}).mix(className)}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
    >
      {children}
    </button>
  )
}
