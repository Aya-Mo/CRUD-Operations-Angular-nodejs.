import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getAll() {
    return this.http.get<Student[]>("http://localhost:8080/students/list");
  }
  getStudent(id: number) {
    return this.http.get<Student[]>("http://localhost:8080/students/details/" + id);
  }
  addStudent(student: Student) {
    return this.http.post<Student>("http://localhost:8080/students/add/", student);
  }
  editStudent(id: number, student: Student) {
    return this.http.post<Student[]>("http://localhost:8080/students/edit/" + id, student);
  }
  deleteStudent(id: number) {
    return this.http.get("http://localhost:8080/students/delete/" + id)
  }
  constructor(private http: HttpClient) { }
}