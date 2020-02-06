import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.css"]
})
export class ProjectCardComponent implements OnInit {
  @Input() data: object;
  image = `https://picsum.photos/240/456?random=${Math.random()}`;

  constructor() {}

  ngOnInit() {}
}
