import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-card-condensed",
  templateUrl: "./project-card-condensed.component.html",
  styleUrls: ["./project-card-condensed.component.css"]
})
export class ProjectCardCondensedComponent implements OnInit {
  @Input() data: any;
  date: string = "";
  image = `https://picsum.photos/180/456?random=${Math.random()}`;

  constructor() {}

  ngOnInit() {
    this.date = new Date(this.data.date_posted).toUTCString();
  }
}
