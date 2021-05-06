import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getAll() {
    return this.http.get<Course[]>("http://localhost:8080/courses/list");
  }
  getCourse(id: number) {
    return this.http.get<Course[]>("http://localhost:8080/courses/details/" + id);
  }
  addCourse(course: Course) {
    return this.http.post<Course>("http://localhost:8080/courses/add/", course);
  }
  editCourse(id: number, course: Course) {
    return this.http.post<Course[]>("http://localhost:8080/courses/edit/" + id, course);
  }
  deleteCourse(id: number) {
    return this.http.get("http://localhost:8080/courses/delete/" + id)
  }
  constructor(private http: HttpClient) { }
}
