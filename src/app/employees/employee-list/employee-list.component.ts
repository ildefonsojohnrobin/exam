import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
   // this.service.refreshList();
  }

  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(Id: number) {
    console.log(Id);
    if (confirm('Are you sure to delete this record?')) {

      // this.service.deleteEmployee(Id).subscribe(res => {
      //   this.service.refreshList();
      //   this.toastr.warning('Deleted successfully', 'EMP. Register');
      // });
    }
  }

}
