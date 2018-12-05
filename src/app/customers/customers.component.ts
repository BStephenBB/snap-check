import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer";
import { APIService } from "../api.service";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent implements OnInit {
  constructor(private apiService: APIService) {}

  customers: Customer[];
  getCustomers(): void {
    this.apiService
      .getCustomers()
      .subscribe(customers => (this.customers = customers));
  }
  ngOnInit() {
    this.getCustomers();
  }
}
