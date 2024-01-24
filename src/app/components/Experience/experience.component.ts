import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['./experience.component.css', '../mediaqueries.css'],
})
export class ExperienceComponent {
  moveInside(link: string) {
    location.href = link;
  }
}
