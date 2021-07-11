import { getActionTypeFromInstance } from '@ngxs/store';
import { ProductActions } from 'src/app/modules/products-ngxs/shared/state/products-ngxs.actions';

export function logoutPlugin(state: {}, action: any, next: (arg0: any, arg1: any) => any) {
  // Use the get action type helper to determine the type
  debugger
  let nameAction = action;
  if (getActionTypeFromInstance(action)) {

    // if we are a logout type, lets erase all the state
    //state = {};
  }

  // return the next function with the empty state
  return next(state, action);
}
