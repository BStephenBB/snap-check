import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";

import { Customer } from "./customer";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  constructor(private http: HttpClient) {}

  /** GET customers from the server */
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:3000/customers");
  }

  /** GET customer based on id from the server */
  getCustomer(id: number): Observable<Customer> {
    const url = `http://localhost:3000/customers/${id}`;
    return this.http.get<Customer>(url);
  }

  /** PUT: update the customer on the server */
  updateCustomer(customer: Customer, id: string): Observable<any> {
    return this.http.put(
      `http://localhost:3000/customers/${id}`,
      customer,
      httpOptions
    );
  }

  /** DELETE: delete the customer from the server */
  deleteCustomer(id: string): Observable<Customer> {
    const url = `http://localhost:3000/customers/${id}`;

    return this.http.delete<Customer>(url, httpOptions);
  }

  formatName(term) {
    let newStr = "";
    for (let i = 0; i < term.length; i++) {
      if (i === 0) {
        newStr += term[i].toUpperCase();
      } else {
        newStr += term[i].toLowerCase();
      }
    }
    return newStr;
  }

  searchCustomers(term: string): Observable<Customer[]> {
    if (!term.trim()) {
      // if not search term, return empty customer array.
      return of([]);
    }
    const results = this.http.get<Customer[]>(
      `http://localhost:3000/customers?firstName_like=${this.formatName(term)}`
    );
    return results;
  }

  /** login: logs the user in */
  login(username: string, password: string) {
    if (username.length > 0 && password.length > 0) {
      localStorage.setItem("auth", "true");
    }
  }

  logout(): void {
    localStorage.removeItem("auth");
  }
}
