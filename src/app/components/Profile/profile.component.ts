import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  linkedInProfile = 'https://www.linkedin.com/in/oliver-marquez-54837621a/';
  githubProfile = 'https://github.com/MarkedOliv';

  openCv() {
    window.open('../../../assets/cvs/Curriculum vitae-EN.docx')
  }

  moveInside(link: string) {
    location.href = link
  }

  openExternal(link: string) {
    window.open(link, '_blank')
  }
}
