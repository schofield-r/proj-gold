import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavDropdownComponent } from "../bootstrap/nav-dropdown/nav-dropdown.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() loginSwitch = new EventEmitter();
  @Input() mySwitch: boolean;

  clicked() {
    this.loginSwitch.emit();
  }

  constructor() {
    this.mySwitch = false;
  }

  ngOnInit() {}
}
