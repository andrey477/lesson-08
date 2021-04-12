import React, {CSSProperties, useMemo} from "react";
import block from "bem-cn";
import './Spinner.css'

interface Props {
  size?: number
  width?: number
}

const b = block('spinner')

export const Spinner: React.FC<Props> = ({
  size= 28,
  width= 3
}) => {
  const style = useMemo<CSSProperties>(() => ({
    width: size + 'px',
    height: size + 'px',
    borderWidth: width + 'px'
  }), [width, size])

  return (
    <span
      className={b()}
      style={style}
    />
  )
}
