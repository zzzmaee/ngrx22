import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset', props<{ title: string }>());
export const customCounter = createAction('Custom Counter', props<{ value: number, action: string }>());
export const changeTitle = createAction('Change Title', props<{ title: string }>());
