import {AppState} from "./app/types";
import {BookState} from "./book/types";

export declare namespace RootState {
  interface State {
    readonly app: AppState.State
    readonly book: BookState.State
  }
}
