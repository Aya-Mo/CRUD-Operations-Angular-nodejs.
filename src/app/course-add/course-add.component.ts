import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../_models/course';
import { CourseService } from '../_services/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  ncourse: Course = new Course(0, '');
  constructor(private studentService: CourseService, private router: Router) { }
  save() {
    this.studentService.addCourse(this.ncourse).subscribe(
      a => this.router.navigateByUrl('/courses')
    )
  }
  ngOnInit(): void {
  }

}
