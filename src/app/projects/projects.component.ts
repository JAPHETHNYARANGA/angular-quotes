import { Component, OnInit } from "@angular/core";
import { Project } from "../project";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    new Project(
      "First Project",
      "Bookstore App for Client",
      "UI/UX",
      "10/07/2020"
    ),
    new Project(
      "Second Project",
      "E-commerce App for Client",
      "Frontend",
      "05/06/2020"
    ),
    new Project(
      "Third Project",
      "Boutique App for Client",
      "Backend",
      "10/07/2019"
    ),
  ];

  showDetails(index) {
    this.projects[index].showProjectDetails = !this.projects[index]
      .showProjectDetails;
  }

  deleteThisProject(deleteProject, index) {
    if(deleteProject){
      this.projects.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit() {}
}
