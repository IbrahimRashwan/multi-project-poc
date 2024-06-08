import { Component } from '@angular/core';
import { MainCardComponent } from '@shared/shared/components/main-card/main-card.component';

@Component({
  selector: 'app-sp-brief',
  standalone: true,
  imports: [MainCardComponent],
  templateUrl: './sp-brief.component.html',
  styleUrl: './sp-brief.component.scss'
})
export default class SPBriefComponent {

}
