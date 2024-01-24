import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'switch-lang',
  templateUrl: './switch-lang.component.html',
  styleUrls: ['./switch-lang.component.css', '../mediaqueries.css'],
})
export class SwitchLangComponent implements OnInit {
  options = [
    { value: 'en', display: 'English' },
    { value: 'es', display: 'Español' },
  ];

  constructor(public translate: TranslateService) {}

  ngOnInit() {
    const browserLang = this.translate.getBrowserLang();

    const defaultLang = 'en';
    this.translate.setDefaultLang(defaultLang);

    if(!this.translate.currentLang) {
      if(browserLang) {
        this.translate.use(browserLang);
      }
    }
  }

  onChangeLang(lang: string) {
    this.translate.use(lang);
  }
}
