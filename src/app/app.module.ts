import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

import { LayoutComponent } from './components/Layout/layout.component';

import { HeaderComponent } from './components/Header/header.component';
import { HamburgerMenuComponent } from './components/Hamburger-Menu/hamburgerMenu.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { AboutComponent } from './components/About/about.component';
import { ExperienceComponent } from './components/Experience/experience.component';
import { ProjectsComponent } from './components/Projects/projects.component';
import { ContactComponent } from './components/Contact/contact.component';
import { FooterComponent } from './components/Footer/footer.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HamburgerMenuComponent,
    LayoutComponent,
    ProfileComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
