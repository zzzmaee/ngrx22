import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from '../../shared/store/counter/counter.actions';
import { MatButton } from '@angular/material/button';
import { AppModel } from '../../shared/store/global/app.model';
import { initialState } from '../../shared/store/counter/counter.state';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.scss'
})
export class CounterButtonComponent {
  private store = inject(Store<AppModel>);


  onIncrement() {
    this.store.dispatch(CounterActions.increment());
  }

  onDecrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  onReset() {
    this.store.dispatch(CounterActions.reset({title:initialState.title}));
  }

  onChangeTitle() {
    this.store.dispatch(CounterActions.changeTitle({title: 'لا حول ولا قوة الا بالله العلي العظيم'}));
  }
}
