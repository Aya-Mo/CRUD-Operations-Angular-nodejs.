import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  department: Department | any;
  constructor(private departmentService: DepartmentService, public ar: ActivatedRoute, private router: Router) { }
  deleteById() {
    this.departmentService.deleteDepartment(this.department._id).subscribe(
      a => this.router.navigateByUrl('/departments')
    )
  }
  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id'];
      }
    )
    this.departmentService.getDepartment(id).subscribe(
      d => this.department = d
    )
  }

}
