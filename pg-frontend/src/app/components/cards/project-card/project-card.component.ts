import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.css"]
})
export class ProjectCardComponent implements OnInit {
  image = "assets/img/Pitch-1-image.jpg";

  @Input() data: object;

  constructor() {}

  ngOnInit() {}
}
