import { Action, ActionReducer } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { AuthState, AuthStateRecord } from './auth.state';

export const initialState: AuthState = new AuthStateRecord() as AuthState;

export const authReducer: ActionReducer<AuthState> =
  (state: AuthState = initialState, { type }: Action): AuthState => {
    switch (type) {

      case AuthActions.LOGIN_SUCCESS:
        //const user = payload;
        return state.merge({
          isAuthenticated: true,
          user: user
        }) as AuthState;

      case AuthActions.LOGOUT_SUCCESS:
        return state.merge({
          isAuthenticated: false,
          user: {}
        }) as AuthState;

      default:
        return state;
    }
  };
