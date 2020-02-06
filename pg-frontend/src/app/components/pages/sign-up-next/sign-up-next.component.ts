import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-up-next",
  templateUrl: "./sign-up-next.component.html",
  styleUrls: ["./sign-up-next.component.css"]
})
export class SignUpNextComponent implements OnInit {
  softwareSkillList = [
    "JavaScript",
    "Python",
    "SQL",
    "PHP",
    "Java",
    "Ruby",
    "C/C++",
    "Swift"
  ];

  otherSkillList = [
    "Image manipulation",
    "Graphic design",
    "Video editing",
    "Audio",
    "UX",
    "Project management",
    "Animation",
    "Accessibility specialist"
  ];

  groups = [
    "Vision impairment",
    "Deaf or hard of hearing",
    "Mental health conditions",
    "Cognitive disability",
    "Acquired brain injury",
    "Autism spectrum disorder",
    "Physical disability"
  ];

  constructor() {}

  ngOnInit() {}
}
