import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../_models/course';
import { CourseService } from '../_services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course | any;
  constructor(private courseService: CourseService, public ar: ActivatedRoute, private router: Router) { }
  deleteById() {
    this.courseService.deleteCourse(this.course._id).subscribe(
      a => this.router.navigateByUrl('/courses')
    )
  }
  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id'];
      }
    )
    this.courseService.getCourse(id).subscribe(
      d => this.course = d
    )
  }

}
