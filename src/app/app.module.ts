import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LayoutComponent } from './components/Layout/layout.component';

import { HeaderComponent } from './components/Header/header.component';
import { HamburgerMenuComponent } from './components/Hamburger-Menu/hamburgerMenu.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { AboutComponent } from './components/About/about.component';
import { ExperienceComponent } from './components/Experience/experience.component';
import { ProjectsComponent } from './components/Projects/projects.component';
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
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
