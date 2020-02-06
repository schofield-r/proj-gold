import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { ProjOverviewTabsetComponent } from "../../bootstrap/proj-overview-tabset/proj-overview-tabset.component";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-project-overview",
  templateUrl: "./project-overview.component.html",
  styleUrls: ["./project-overview.component.css"]
})
export class ProjectOverviewComponent implements OnInit {
  id: string;
  displayData: object;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.http
      .get<any>(
        `https://project-gold-api.herokuapp.com/api/projects/${this.id}`
      )
      .subscribe(
        data => {
          this.displayData = data.project;
        },
        error => console.error("There was an error!", error)
      );
  }

  ngOnChange() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.http
      .get<any>(
        `https://project-gold-api.herokuapp.com/api/projects/${this.id}`
      )
      .subscribe(
        data => {
          this.displayData = data.project;
        },
        error => console.error("There was an error!", error)
      );
  }
}
