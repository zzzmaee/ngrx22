import { Component } from '@angular/core';
import {CounterButtonComponent} from "../counter-button/counter-button.component";
import {CounterDisplayComponent} from "../counter-display/counter-display.component";
import {CustomCounterComponent} from "../custom-counter/custom-counter.component";

@Component({
  selector: 'app-counter',
  standalone: true,
    imports: [
        CounterButtonComponent,
        CounterDisplayComponent,
        CustomCounterComponent
    ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

}
