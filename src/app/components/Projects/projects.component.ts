import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['./projects.component.css', '../mediaqueries.css'],
})
export class ProjectsComponent {

  openExternal(link: string) {
    window.open(link, '_blank')
  }

  moveInside(link: string) {
    location.href = link;
  }
}
