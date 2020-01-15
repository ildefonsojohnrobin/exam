import { Component , OnInit } from '@angular/core';
import { Employee } from "../app/shared/employee.model"
import { EmployeeService } from "../app/shared/employee.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list$: Employee[];
 
  constructor(private dataService: EmployeeService) { }

  ngOnInit() {
    console.log('getfata');
    return this.dataService.getData()
       .subscribe(data => console.log('data' , data) )
  }
}
