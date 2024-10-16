import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { NotcomponentComponent } from './Components/notcomponent/notcomponent.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  {
    path:'about',
    component:AboutComponent
  },
  // {
  // path:'**',
  // component:NotcomponentComponent
  // },
  {
    path:'home',
    component:MainPageComponent
  },
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
