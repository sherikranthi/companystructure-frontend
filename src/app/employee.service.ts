import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) { }

  getEmployeeDetails(firstName: string, lastName: string): Observable<any[]> {
    const url = `${this.baseUrl}/details?firstName=${firstName}&lastName=${lastName}`;
    return this.http.get<any[]>(url);
  }

  getAgileStandUpReminders(): Observable<any[]> {
    const url = `${this.baseUrl}/agile-standup-reminders`;
    return this.http.get<any[]>(url);
  }

  addEmployeeDetails(employee: any): Observable<any> {
    const url = `${this.baseUrl}/add`;
    return this.http.post<any>(url, employee);
  }


 
  }


