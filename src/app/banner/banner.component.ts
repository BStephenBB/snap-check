import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { APIService } from "../api.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})
export class BannerComponent implements OnInit {
  constructor(private router: Router, private apiService: APIService) {}
  logout() {
    this.apiService.logout();
    this.router.navigate(["/login"]);
  }

  ngOnInit() {}
}
