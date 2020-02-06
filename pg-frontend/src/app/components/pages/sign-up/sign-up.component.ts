import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormControlName,
  FormGroupName
} from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent {
  signup: FormGroup;
  constructor() {
    this.signup = new FormGroup({
      textInput: new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
        email: new FormControl()
      }),
      submitGroup: new FormGroup({
        privacy: new FormControl(),
        submit: new FormControl()
      })
    });
  }
}
