import { Component, OnInit, Input } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Customer } from "../customer";
import { APIService } from "../api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  @Input() customer: Customer;
  modalStatus: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: APIService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.apiService
      .getCustomer(id)
      .subscribe(customer => (this.customer = customer));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.apiService
      .updateCustomer(this.customer, this.customer.id.toString())
      .subscribe(() => this.goBack());
  }

  delete(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.apiService
      .deleteCustomer(id.toString())
      .subscribe(() => this.goBack());
  }

  toggleModal(): void {
    this.modalStatus = !this.modalStatus;
    console.log(`Modal Status: ${this.modalStatus}`);
  }
}
