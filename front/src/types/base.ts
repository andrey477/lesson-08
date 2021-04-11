import {ThunkAction} from "redux-thunk";
import {RootState} from "../store/types";
import {RouteComponentProps} from 'react-router'

export interface BaseComponents {
  className?: string
}

export interface BasePageProps<T extends object = {}> extends RouteComponentProps<T> {

}

export type Thunk<T = void> = (params: T) => ThunkAction<Promise<void> | void, RootState.State, {}, any> | void
