import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import * as CounterActions from './counter.actions';

export const _counterReducer = createReducer(
  initialState,

  on(CounterActions.increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    };
  }),

  on(CounterActions.decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    };
  }),

  on(CounterActions.reset, (state, action) => {
    return {
      ...state,
      counter: 0,
      title: action.title
    };
  }),

  on(CounterActions.customCounter, (state, action) => {
    return {
      ...state,
      counter: action.action == 'add' ? state.counter + action.value : state.counter - action.value
    };
  }),

  on(CounterActions.changeTitle, (state, action) => {
    return {
      ...state,
      title: action.title
    };
  }),
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
