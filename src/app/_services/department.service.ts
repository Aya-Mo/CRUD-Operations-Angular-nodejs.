import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  getAll() {
    return this.http.get<Department[]>("http://localhost:8080/departments/list");
  }
  getDepartment(id: number) {
    return this.http.get<Department[]>("http://localhost:8080/departments/details/" + id);
  }
  addDepartment(department: Department) {
    return this.http.post<Department>("http://localhost:8080/departments/add/", department);
  }
  editDepartment(id: number, department: Department) {
    return this.http.post<Department[]>("http://localhost:8080/departments/edit/" + id, department);
  }
  deleteDepartment(id: number) {
    return this.http.get("http://localhost:8080/departments/delete/" + id)
  }
  constructor(private http: HttpClient) { }
}
