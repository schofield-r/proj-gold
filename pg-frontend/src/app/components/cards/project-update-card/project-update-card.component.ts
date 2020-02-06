import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-update-card",
  templateUrl: "./project-update-card.component.html",
  styleUrls: ["./project-update-card.component.css"]
})
export class ProjectUpdateCardComponent implements OnInit {
  @Input() comment: any;
  date: string = "";
  image = `https://i.pravatar.cc/80?${Math.floor(Math.random() * 70)}`;
  constructor() {}
  //

  ngOnInit() {
    this.date = new Date(this.comment.date_created).toUTCString();
  }

  ngOnChange() {
    this.date = this.comment.date_created;
  }
}
