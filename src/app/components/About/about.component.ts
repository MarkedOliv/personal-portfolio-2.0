import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css', '../mediaqueries.css']
})

export class AboutComponent  {

  moveInside(link: string) {
    location.href = link
  }
}
