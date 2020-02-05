import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProjectCardComponent } from "../../cards/project-card/project-card.component";

@Component({
  selector: "app-browse",
  templateUrl: "./browse.component.html",
  styleUrls: ["./browse.component.css"]
})
export class BrowseComponent implements OnInit {
  selected: string;
  displayData: Array<object> = [];

  constructor(private http: HttpClient) {
    this.selected = "something";
  }

  ngOnInit() {
    // this.http
    //   .get<any>("https://project-gold-api.herokuapp.com/api/projects")
    //   .subscribe(
    //     data => console.log(data.projects),
    //     error => console.error("There was an error!", error)
    //   );
  }

  selectorClicked(whichButton) {
    this.selected = whichButton;
    console.log(whichButton);

    if (whichButton === "projects")
      this.http
        .get<any>(`https://project-gold-api.herokuapp.com/api/projects`)
        .subscribe(
          data =>
            data.projects.map(project => {
              if (project.status !== "Pitch") {
                console.log(
                  "Title: ",
                  project.project_title,
                  " Status: ",
                  project.status
                );
              }
            }),
          error => console.error("There was an error!", error)
        );

    if (whichButton === "pitches")
      this.http
        .get<any>(`https://project-gold-api.herokuapp.com/api/projects`)
        .subscribe(
          data =>
            data.projects.map(project => {
              if (project.status === "Pitch") {
                // console.log(
                //   "Title: ",
                //   project.project_title,
                //   " Status: ",
                //   project.status
                this.displayData.push(project);
                console.log(this.displayData);
              }
            }),
          error => console.error("There was an error!", error)
        );
  }
}
