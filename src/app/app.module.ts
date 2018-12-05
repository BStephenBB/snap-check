import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CustomersComponent } from "./customers/customers.component";

import { AddressPipe } from "./addressPipe";
import { CustomerSearchComponent } from "./customer-search/customer-search.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AddressPipe,
    CustomerSearchComponent,
    ProfileComponent,
    LoginComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
