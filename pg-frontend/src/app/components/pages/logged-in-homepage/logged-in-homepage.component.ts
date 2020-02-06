import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-logged-in-homepage",
  templateUrl: "./logged-in-homepage.component.html",
  styleUrls: ["./logged-in-homepage.component.css"]
})
export class LoggedInHomepageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}
}
