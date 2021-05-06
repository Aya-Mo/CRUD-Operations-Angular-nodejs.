import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../_models/course';
import { CourseService } from '../_services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: Course | any;
  constructor(private courseService: CourseService, public ar: ActivatedRoute, private router: Router) { }
  edit() {
    this.courseService.editCourse(this.course._id, this.course).subscribe(
      a => this.router.navigateByUrl('/courses')
    )
  }

  ngOnInit(): void {
    let id = 0;
    let name = '';
    this.ar.params.subscribe(
      a => {
        id = a['id'];
        name = a['Name'];
      }
    )
    this.courseService.getCourse(id).subscribe(
      d => this.course = d
    )
  }


}
