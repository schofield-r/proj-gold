import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from "./components/pages/homepage/homepage.component";
import { ProjectOverviewComponent } from "./components/pages/project-overview/project-overview.component";
import { ProjectProgressComponent } from "./components/pages/project-progress/project-progress.component";
import { BrowseComponent } from "./components/pages/browse/browse.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { PitchFormComponent } from "./components/pitch-form/pitch-form.component";

const routes: Routes = [
  { path: "browse", component: BrowseComponent },
  { path: "register", component: RegisterComponent },
  { path: "pitch", component: PitchFormComponent },
  { path: "login", component: LoginComponent },
  { path: "project-overview", component: ProjectOverviewComponent },
  { path: "project-progress", component: ProjectProgressComponent },
  { path: "", component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
