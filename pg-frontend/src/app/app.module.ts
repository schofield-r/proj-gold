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
import { LoginComponent } from "./components/login/login.component";
import { ProjOverviewTabsetComponent } from "./components/bootstrap/proj-overview-tabset/proj-overview-tabset.component";
import { ProjectCardComponent } from "./components/cards/project-card/project-card.component";
import { ProjectUpdateCardComponent } from "./components/cards/project-update-card/project-update-card.component";
import { BrowseComponent } from "./components/pages/browse/browse.component";
import { PitchFormComponent } from "./components/pitch-form/pitch-form.component";
import { WebSpeechComponent } from "./components/web-speech/web-speech.component";
import { WebSpeechModule } from "./components/web-speech/web-speech.module";
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignUpComponent } from "./components/pages/sign-up/sign-up.component";
import { ProjectCommentCardComponent } from "./components/cards/project-comment-card/project-comment-card.component";
import { SignUpNextComponent } from "./components/pages/sign-up-next/sign-up-next.component";
import { LoggedInHomepageComponent } from "./components/pages/logged-in-homepage/logged-in-homepage.component";
import { PitchOverviewComponent } from "./components/pages/pitch-overview/pitch-overview.component";
import { PitchToProjectComponent } from "./components/pages/pitch-to-project/pitch-to-project.component";

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
    ProjOverviewTabsetComponent,
    BrowseComponent,
    ProjectCardComponent,
    ProjectUpdateCardComponent,
    PitchFormComponent,
    // WebSpeechModule,
    // WebSpeechComponent
    SignUpComponent,
    ProjectCommentCardComponent,
    SignUpNextComponent,
    LoggedInHomepageComponent,
    PitchOverviewComponent,
    PitchToProjectComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    WebSpeechModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
