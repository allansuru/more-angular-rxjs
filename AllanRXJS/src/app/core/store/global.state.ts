import { error } from '@angular/compiler/src/util';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { GlobalState } from '../interfaces/global-state';

import { GlobalActions } from './global.actions';

@State<GlobalState>({
  name: 'GlobalState',
  defaults: {
    errorMessage: null
  },
})
@Injectable()
export class GlobalStore {


  @Action(GlobalActions.SetError)
  setError({ setState, patchState }: StateContext<GlobalState>, { error }: any) {
    patchState({ errorMessage: error })
  }

  @Selector()
  static errorSelect(state: GlobalState) {
    return state.errorMessage;
  }
}
