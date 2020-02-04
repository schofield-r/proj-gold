import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  userForm;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      username: [""],
      password: [""]
    });
  }

  // onSubmit() {
  //   if (this.userForm.valid) {
  //     alert("good");
  //     this.http
  //       .post("/api/userCreate", this.userForm.value)
  //       .subscribe(response => {
  //         console.log("repsonsei ", response);
  //       });
  //   } else {
  //     alert("not good");
  //   }
  // }
}
