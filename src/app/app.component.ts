import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeserviceService } from './employeeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First App !';

  emp: Employee[];
  searchCriteria = '';

  constructor(private service: EmployeeserviceService){}

  ngOnInit(){
    this.service.getAllEmployeeData().subscribe(resp => this.emp = resp);
  }


}
