import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./customers/customers.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "customers",
    component: CustomersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "profile/:id",
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
