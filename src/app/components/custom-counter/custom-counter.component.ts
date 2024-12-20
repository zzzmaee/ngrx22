import { Component, inject, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import * as CounterActions from '../../shared/store/counter/counter.actions';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { CounterModel } from '../../shared/store/counter/counter.model';
import { Subscription } from 'rxjs';
import { getCounter, getTitle } from '../../shared/store/counter/counter.selector';
import { AppModel } from '../../shared/store/global/app.model';

@Component({
  selector: 'app-custom-counter',
  standalone: true,
  imports: [
    MatCard,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatCardContent,
    FormsModule,
    MatOption,
    MatSelect
  ],
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.scss'
})
export class CustomCounterComponent implements OnInit {
  private store = inject(Store<AppModel>);
  counterInput!: number;
  actionType = 'add';
  title = '';
  counterSubscribe!: Subscription;

  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getTitle).subscribe(data => {
      this.title = data;
      console.log('custom counter');
    });
  }

  customCounter() {
    this.store.dispatch(CounterActions.customCounter({value: +this.counterInput, action: this.actionType}));
  }
}
