import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './Components/skills/skills.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NotcomponentComponent } from './Components/notcomponent/notcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent,
    NotcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
