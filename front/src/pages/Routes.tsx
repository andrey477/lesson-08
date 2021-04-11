import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { Page } from '../components/Page/Page'
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout'
import { AboutPage } from './AboutPage/AboutPage'
import { AuthPage } from './AuthPage/AuthPage'
import { CatalogPage } from './CatalogPage/CatalogPage'
import { Error404 } from './Error404/Error404'
import {RegistrationPage} from "./RegistrationPage/RegistrationPage";
import {Ref} from "./Ref/Ref";
import {LanguagePageCreate} from "./LanguagePageCreate/LanguagePageCreate";
import {LanguagePageUpdate} from "./LanguagePageUpdate/LanguagePageUpdate";

interface Props {
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={'/'} to={'/catalog'} />
      <Page path={'/auth'} layout={AuthLayout} component={AuthPage} />
      <Page path={'/registration'} layout={AuthLayout} component={RegistrationPage} />
      <Page exact secured path={'/catalog'} component={CatalogPage} />
      <Page secured path={'/about'} component={AboutPage} />
      <Page exact secured path={'/ref'} component={Ref} />
      <Page secured path={'/ref/authors'} component={() => 'Авторы'} />
      <Page secured path={'/ref/genre'} component={() => 'Жанры'} />
      <Page exact secured path={'/ref/languages'} component={() => 'Языки'} />
      <Page exact secured path={'/ref/languages/create' } component={LanguagePageCreate}/>
      <Page exact secured path={'/ref/languages/:id/update'} component={LanguagePageUpdate}/>
      <Page secured path={'/ref/publisher'} component={() => 'Издательства'} />
      <Page path={'*'} layout={AuthLayout} component={Error404} />
    </Switch>
  )
}
