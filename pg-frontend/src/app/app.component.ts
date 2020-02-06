import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pg-frontend";

  mySwitch = false;

  switch() {
    this.mySwitch = !this.mySwitch;
  }
}