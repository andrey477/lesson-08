import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './pages/Routes'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from "react-redux";
import {persistor, store} from "./store";

interface Props {
}

export const App: React.FC<Props> = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
