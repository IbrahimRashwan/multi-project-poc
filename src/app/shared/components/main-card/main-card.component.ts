import { NgStyle } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [CardModule, NgStyle],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
  title: InputSignal<string> = input.required();
  content: InputSignal<string> = input.required();
}
