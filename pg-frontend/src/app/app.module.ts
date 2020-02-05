import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavDropdownComponent } from "./components/bootstrap/nav-dropdown/nav-dropdown.component";
import { HomepageComponent } from "./components/pages/homepage/homepage.component";
import { HomepageCarouselComponent } from "./components/bootstrap/homepage-carousel/homepage-carousel.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AccDropupComponent } from "./components/bootstrap/acc-dropup/acc-dropup.component";
import { LoginButtonComponent } from "./components/bootstrap/login-button/login-button.component";
import { ProjectOverviewComponent } from "./components/pages/project-overview/project-overview.component";
import { ProjectProgressComponent } from "./components/pages/project-progress/project-progress.component";
import { RegisterComponent } from "./components/register/register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { ProjOverviewTabsetComponent } from "./components/bootstrap/proj-overview-tabset/proj-overview-tabset.component";
import { ProjectCardComponent } from "./components/cards/project-card/project-card.component";
import { ProjectUpdateCardComponent } from './components/cards/project-update-card/project-update-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavDropdownComponent,
    HomepageComponent,
    HomepageCarouselComponent,
    ProjectOverviewComponent,
    ProjectProgressComponent,
    FooterComponent,
    AccDropupComponent,
    LoginButtonComponent,
    RegisterComponent,
    LoginComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
    ProjOverviewTabsetComponent,
    ProjectCardComponent,
    ProjectUpdateCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
