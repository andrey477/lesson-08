import React from "react";
import block from "bem-cn";
import './Footer.css'

interface Props {

}

const b = block('footer')

export const Footer: React.FC = () => {
  return (
    <footer className={b()}>
      <span className={b('text')}>
        Created with <span className={b('text',{pink: true})}>Love</span>
      </span>
    </footer>
  )
}
