import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];
   rootURL = "http://localhost:44371/api"

  constructor(private http: HttpClient) { }

  getData() {
    // return this.http.get(this.rootURL + '/drink', formData);
    return this.http.get<Employee[]>(this.rootURL);
     
  }

  // refreshList() {
  //   this.http.get(this.rootURL + '/Employee')
  //     .toPromise().then(res => this.list = res as Employee[]);
  // }

  // putEmployee(formData: Employee) {
  //   return this.http.put(this.rootURL + '/Employee/' + formData.Id, formData);

  // }

  // deleteEmployee(id: number) {
  //   return this.http.delete(this.rootURL + '/Employee/' + id);
  // }
}
