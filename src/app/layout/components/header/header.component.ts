import { NgIf, NgStyle } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, NgIf, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: InputSignal<MenuItem[]> = input.required();

}
