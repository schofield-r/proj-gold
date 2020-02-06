import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-pitch-overview",
  templateUrl: "./pitch-overview.component.html",
  styleUrls: ["./pitch-overview.component.css"]
})
export class PitchOverviewComponent implements OnInit {
  displayData: object;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>(`https://project-gold-api.herokuapp.com/api/projects/3`)
      .subscribe(
        data => {
          console.log(data);
          this.displayData = data.project;
        },
        error => console.error("There was an error!", error)
      );
  }

  ngOnChange() {
    this.http
      .get<any>(`https://project-gold-api.herokuapp.com/api/projects/3`)
      .subscribe(
        data => {
          this.displayData = data.project;
        },
        error => console.error("There was an error!", error)
      );
  }
}
