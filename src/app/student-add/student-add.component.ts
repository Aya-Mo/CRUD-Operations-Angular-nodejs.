import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../_models/student';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  nstudent: Student = new Student(0, '', '');
  constructor(private studentService: StudentService, private router: Router) { }
  save() {
    this.studentService.addStudent(this.nstudent).subscribe(
      a => this.router.navigateByUrl('/students')
    )
  }
  ngOnInit(): void {
  }

}
