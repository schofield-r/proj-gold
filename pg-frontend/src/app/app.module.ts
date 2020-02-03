import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { NavDropdownComponent } from './components/bootstrap/nav-dropdown/nav-dropdown.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavDropdownComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
