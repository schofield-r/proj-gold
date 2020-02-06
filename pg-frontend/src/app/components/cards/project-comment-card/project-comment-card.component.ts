import { Component, OnInit, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-project-comment-card",
  templateUrl: "./project-comment-card.component.html",
  styleUrls: ["./project-comment-card.component.css"]
})
export class ProjectCommentCardComponent implements OnInit {
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
