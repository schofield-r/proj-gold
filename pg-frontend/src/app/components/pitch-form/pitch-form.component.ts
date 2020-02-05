import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-pitch-form',
  templateUrl: './pitch-form.component.html',
  styleUrls: ['./pitch-form.component.css']
})
export class PitchFormComponent implements OnInit {
  userForm;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      title: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      description: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      
    });
  }

}
