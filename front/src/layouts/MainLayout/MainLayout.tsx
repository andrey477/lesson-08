import block from 'bem-cn'
import React, {useCallback} from 'react'
import { Header } from '../../components/Header/Header'
import { MainMenu } from '../../components/MainMenu/MainMenu'
import './MainLayout.css'
import {connect, MapDispatchToProps} from "react-redux";
import {AppState} from "../../store/app/types";
import {appActions} from "../../store/app/action";
import {Button} from "../../components/Button/Button";
import {Footer} from "../../components/Footer/Footer";

interface OwnProps {
}

interface DispatchProps extends AppState.ActionThunk{

}

type Props = OwnProps & DispatchProps



const b = block('main-layout')

const MainLayoutPresenter: React.FC<Props> = ({appLogout, children}) => {

  const btnLogout = useCallback(() => (
    <Button
      className={b('button')}
      onClick={() => appLogout()}
    >
      Выход
    </Button>
  ), [])

  return (
    <div className={b()}>
      <Header
        btnLogout={btnLogout}
      />
      <MainMenu />
      <main className={b('main')}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {...appActions}

export const MainLayout = connect(null, mapDispatchToProps)(MainLayoutPresenter)
