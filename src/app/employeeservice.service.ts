import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class EmployeeserviceService {

  url = "http://localhost:3000/employeedata";

  constructor(private http: HttpClient) { }

  getAllEmployeeData():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }
}
