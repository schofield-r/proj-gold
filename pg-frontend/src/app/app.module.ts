import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavDropdownComponent } from "./components/bootstrap/nav-dropdown/nav-dropdown.component";
import { HomepageComponent } from "./components/pages/homepage/homepage.component";
import { HomepageCarouselComponent } from "./components/bootstrap/homepage-carousel/homepage-carousel.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavDropdownComponent,
    HomepageComponent,
    HomepageCarouselComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
