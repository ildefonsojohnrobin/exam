import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SimpleMenu } from 'simple-sidenav';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  chart: Chart;
  menu: SimpleMenu[] = [{
    "id": "1", "name": "Coffee", "icon": "", "menu": [
      {
        "id": "1", "name": "Models", "menu": [
          { "id": "1", "name": "Order" },
          { "id": "2", "name": "History" },
          { "id": "3", "name": "Reports" }
        ]
      },
    ]
  }];

  order = false;
  history = false;
  reports = false;

  units = 45;
  cities = {};
  beansingdidients = {
    Coffee_Beans: this.units,
    Sugar: 32,
    Milk: 30
  };
  ingdidients = {
    Coffee_Beans: this.units,
    Sugar: this.units,
    Milk: this.units
  };
  countries = [{
    id: 1, name: 'Double americano', cities: [this.beansingdidients]
  },
  {
    id: 2, name: 'Sweet Latte', cities: [this.ingdidients]
  },
  {
    id: 3, name: 'Flat White', cities: [this.ingdidients]
  },
  ];

  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    // this.resetForm();
    console.log('this.vou', this.countries)
    this.cities = this.countries.filter(x => x.id == 1)[0].cities;
    // this.init();

  }
  
  getId(test) {
    console.log('test', test)
  }

  onChange(deviceValue) {
    this.cities = this.countries.filter(x => x.id == deviceValue)[0].cities;
    console.log('this.cities', this.cities)
  }
  onClick(test) {
    console.log('test', test.name)
    const order = test.name === "Order" ? this.order = true : this.order = false;
    const history = test.name === "History" ? this.history = true : this.history = false;
    const reports = test.name === "Reports" ? this.reports = true : this.reports = false;
   
 
  }

  

  

  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.resetForm();
  //   this.service.formData = {
  //     Id: null,
  //     FullName: '',
  //     Position: '',
  //     EMPCode: '',
  //     Mobile: ''
  //   }
  // }


  // onSubmit(form: NgForm) {
  //   if (form.value.Id == null)
  //     this.insertRecord(form);
  //   else
  //     this.updateRecord(form);
  // }

  // insertRecord(form: NgForm) {
  //   this.service.postEmployee(form.value).subscribe(res => {
  //     this.toastr.success('Inserted successfully', 'EMP. Register');
  //     this.resetForm(form);
  //     this.service.refreshList();
  //   });
  // }

  // updateRecord(form: NgForm) {
  //   this.service.putEmployee(form.value).subscribe(res => {
  //     this.toastr.info('Updated successfully', 'EMP. Register');
  //     this.resetForm(form);
  //     this.service.refreshList();
  //   });

  // }

}
