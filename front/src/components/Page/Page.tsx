import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { MainLayout } from '../../layouts/MainLayout/MainLayout'
import {connect, MapStateToProps} from "react-redux";
import {RootState} from "../../store/types";
import {checkAccessToken} from "../../utils";

interface StateProps {
  isAuth: boolean
}

interface OwnProps {
  exact?: boolean;
  secured?: boolean;
  path: string;
  layout?: any;
  component: any;
}

type Props = OwnProps & StateProps

export const PagePresenter: React.FC<Props> = ({
  secured = false,
  exact = false,
  path,
  layout: Layout = MainLayout,
  component: Component,
  isAuth
}) => {
  if (secured && !isAuth) {
    return <Redirect to={'/auth'} />
  }

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
          <Layout>
            <Component {...props}/>
          </Layout>
      )}
    />

  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  isAuth: checkAccessToken(app.accessToken)
})

export const Page = connect(mapStateToProps)(PagePresenter)
