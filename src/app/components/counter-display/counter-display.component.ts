import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { getCounter } from '../../shared/store/counter/counter.selector';
import { AppModel } from '../../shared/store/global/app.model';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss'
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  private store = inject(Store<AppModel>);
  counterDisplay!: number;
  title!: string;
  counterSubscribe!: Subscription;

  ngOnInit(): void {
    this.counterSubscribe = this.store.select(getCounter).subscribe(data => {
      this.counterDisplay = data;
      console.log('display counter');
    });
  }

  ngOnDestroy(): void {
    if (this.counterSubscribe) {
      this.counterSubscribe.unsubscribe();
    }
  }
}
