import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  ndepartment: Department = new Department(0, '');
  constructor(private departmentService: DepartmentService, private router: Router) { }
  save() {
    this.departmentService.addDepartment(this.ndepartment).subscribe(
      a => this.router.navigateByUrl('/departments')
    )
  }

  ngOnInit(): void {
  }

}
