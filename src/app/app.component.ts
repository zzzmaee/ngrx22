import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterButtonComponent} from "./components/counter-button/counter-button.component";
import {CounterDisplayComponent} from "./components/counter-display/counter-display.component";
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterButtonComponent, CounterDisplayComponent, CustomCounterComponent, HeaderMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx22';
}
