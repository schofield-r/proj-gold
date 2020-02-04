import { Component, OnInit } from "@angular/core";
import projectCardImage from "../../../../assets/img/Pitch-1-image.jpg";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.css"]
})
export class ProjectCardComponent implements OnInit {
  image = projectCardImage;
  constructor() {}
  ngOnInit() {}
}
