import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../_models/student';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student: Student | any;
  constructor(private studentService: StudentService, public ar: ActivatedRoute, private router: Router) { }
  edit() {
    this.studentService.editStudent(this.student._id, this.student).subscribe(
      a => this.router.navigateByUrl('/students')
    )
  }

  ngOnInit(): void {
    let id = 0;
    let name = '';
    let email = '';
    this.ar.params.subscribe(
      a => {
        id = a['id'];
        name = a['Name'];
        email = a['Email'];
      }
    )
    this.studentService.getStudent(id).subscribe(
      d => this.student = d
    )
  }

}
