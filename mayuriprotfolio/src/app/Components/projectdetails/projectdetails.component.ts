import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrl: './projectdetails.component.css',
  template: `
  <div class="container">
    <div class="card">
      <div class="card-header">
        Project Details
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ projectTitle }}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="text-center">GitHub Link</a>
      </div>
    </div>
  </div>
`
})
export class ProjectdetailsComponent {

  projectTitle: string = '';
  projectDescription: string = '';
  projectLink: string = '';
  projectContribution: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.projectTitle = params['title'] || 'No Title Provided';
      this.projectDescription = params['description'] || 'No Description Provided';
      this.projectLink = params['link'] || 'No Description Provided';
      this.projectContribution = params['contribution'] || 'No Description Provided';
    });
  }

}
