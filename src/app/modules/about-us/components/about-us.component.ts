import { Component, InputSignal, input } from '@angular/core';
import { MainCardComponent } from '@shared/shared/components/main-card/main-card.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MainCardComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export default class AboutUsComponent {
  project: InputSignal<string> = input.required();

}
