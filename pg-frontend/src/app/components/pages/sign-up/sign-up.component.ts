import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormControlName } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  signup: FormGroup;
  constructor() {
    this.signup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      submit: new FormControl()
    });
  }

  ngOnInit() {}
}
