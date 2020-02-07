import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProjectCardComponent } from "../../cards/project-card/project-card.component";

@Component({
  selector: "app-card-carousel",
  templateUrl: "./card-carousel.component.html",
  styleUrls: ["./card-carousel.component.css"]
})
export class CardCarouselComponent implements OnInit {
  @Input() selected: string;
  displayData: Array<object> = [];

  constructor(private http: HttpClient) {
    this.selected = "Projects";
  }

  ngOnInit() {
    this.http
      .get<any>(`https://project-gold-api.herokuapp.com/api/projects`)
      .subscribe(
        data => {
          this.displayData = [];
          data.projects.map(project => {
            if (project.status !== "Pitch") {
              this.displayData.unshift(project);
            }
          });
          this.displayData.shift();
        },
        error => console.error("There was an error!", error)
      );
  }

  // selectorClicked(whichButton) {
  //   this.selected = whichButton;

  //   if (whichButton === "Projects") {
  //     this.http
  //       .get<any>(`https://project-gold-api.herokuapp.com/api/projects`)
  //       .subscribe(
  //         data => {
  //           this.displayData = [];
  //           data.projects.map(project => {
  //             if (project.status !== "Pitch") {
  //               this.displayData.push(project);
  //             }
  //           });
  //         },
  //         error => console.error("There was an error!", error)
  //       );
  //   }
  //   if (whichButton === "Pitches") {
  //     this.http
  //       .get<any>(`https://project-gold-api.herokuapp.com/api/projects`)
  //       .subscribe(
  //         data => {
  //           this.displayData = [];
  //           data.projects.map(project => {
  //             if (project.status === "Pitch") {
  //               this.displayData.push(project);
  //             }
  //           });
  //         },
  //         error => console.error("There was an error!", error)
  //       );
  //   }
  // }
}
