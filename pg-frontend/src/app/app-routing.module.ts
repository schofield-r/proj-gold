import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from "./components/pages/homepage/homepage.component";
import { ProjectOverviewComponent } from "./components/pages/project-overview/project-overview.component";
import { ProjectProgressComponent } from "./components/pages/project-progress/project-progress.component";
import { BrowseComponent } from "./components/pages/browse/browse.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/pages/sign-up/sign-up.component";
import { PitchFormComponent } from "./components/pitch-form/pitch-form.component";
import { WebSpeechComponent } from "./components/web-speech/web-speech.component";
import { SignUpNextComponent } from "./components/pages/sign-up-next/sign-up-next.component";

const routes: Routes = [
  { path: "browse", component: BrowseComponent },
  { path: "register", component: RegisterComponent },
  { path: "pitch", component: PitchFormComponent },
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "project/:id", component: ProjectOverviewComponent },
  { path: "project-progress", component: ProjectProgressComponent },
  { path: "", component: HomepageComponent },
  { path: "web-speech", component: WebSpeechComponent },
  { path: "sign-up-next", component: SignUpNextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
