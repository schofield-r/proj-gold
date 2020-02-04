import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  userForm;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lastName: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      email: ["", [Validators.required, Validators.email]],
      username: [""],
      password: [""]
    });
  }

  // onSubmit() {
  //   if (this.userForm.valid) {
  //     alert("User form is valid!!");
  //   } else {
  //     alert("User form is not valid!!");
  //   }
  // }

  // onSubmit() {
  //   if (this.userForm.valid) {
  //     this.http
  //       .post("/api/userCreate", this.userForm.value)
  //       .subscribe(response => {
  //         console.log("repsonse ", response);
  //       });
  //   }
  // }
  onSubmit() {
    if (this.userForm.valid) {
      alert("good");
      this.http
        .post("/api/userCreate", this.userForm.value)
        .subscribe(response => {
          console.log("repsonsei ", response);
        });
    } else {
      alert("Please fill all required fields");
      console.log("NOT GOOD ");
      // console.log(this.userForm.value);
    }
  }
}
