import { Component, Input, SimpleChanges } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-proj-overview-tabset",
  templateUrl: "./proj-overview-tabset.component.html",
  styleUrls: ["./proj-overview-tabset.component.css"]
})
export class ProjOverviewTabsetComponent {
  constructor(private http: HttpClient) {}

  currentJustify = "end";

  @Input() data: any;

  comments: Array<any> = [];

  ngOnInit() {
    this.http
      .get<any>(
        `https://project-gold-api.herokuapp.com/api/projects/${this.data.project_id}/comments`
      )
      .subscribe(
        data => {
          this.comments = [...data];
        },
        error => console.error("There was an error!", error)
      );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.http
      .get<any>(
        `https://project-gold-api.herokuapp.com/api/projects/${this.data.project_id}/comments`
      )
      .subscribe(
        data => {
          this.comments = [...data.comments];
        },
        error => console.error("There was an error!", error)
      );
  }
}
