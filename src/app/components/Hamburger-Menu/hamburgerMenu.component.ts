import { Component } from '@angular/core';

@Component({
  selector: 'hamburger-menu',
  templateUrl: 'hamburgerMenu.component.html',
  styleUrls: ['./hamburgerMenu.component.css'],
})
export class HamburgerMenuComponent {
  isOpen = false;

  toggleMenu () {
    this.isOpen = !this.isOpen;
  }
}
