import { Component, InputSignal, input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, JsonPipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  items: InputSignal<MenuItem[]> = input.required();
}
