import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: Department[] = [];
  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getAll().subscribe(
      d => {
        this.departments = d;
      }
    )
  }

}
