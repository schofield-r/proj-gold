import { Component, Input } from "@angular/core";

@Component({
  selector: "app-proj-overview-tabset",
  templateUrl: "./proj-overview-tabset.component.html",
  styleUrls: ["./proj-overview-tabset.component.css"]
})
export class ProjOverviewTabsetComponent {
  constructor() {
    console.log(this.data, "proj-overview-tabset ^^^^^^");
  }
  currentJustify = "end";

  @Input() data: any;

  ngOnInit() {}
}
