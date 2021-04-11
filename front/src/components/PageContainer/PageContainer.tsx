import React from "react";
import block from "bem-cn";
import './PageContainer.css'

interface Props {

}

const b = block('page-container')

export const PageContainer: React.FC<Props> = ({children}) => {
  return (
    <div className={b()}>
      {children}
    </div>
  )
}
