import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {


  
  constructor(private router: Router) { }

  // goToDetailsPage(title: string) {
  //   this.router.navigate(['/details'], { queryParams: { title } });
  // }
  goToDetailsPage(title: string, description: string, link: string, contribution: string) {
    console.log('Navigating to details with title:', title, description, link, contribution);
    this.router.navigate(['/details'], { queryParams: { title , description, link, contribution} });
  }
  

}
