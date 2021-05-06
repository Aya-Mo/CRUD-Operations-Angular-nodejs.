import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  department: Department | any;
  constructor(private DepartmentService: DepartmentService, public ar: ActivatedRoute, private router: Router) { }
  edit() {
    this.DepartmentService.editDepartment(this.department._id, this.department).subscribe(
      a => this.router.navigateByUrl('/departments')
    )
  }

  ngOnInit(): void {
    let id = 0;
    let Name = '';
    this.ar.params.subscribe(
      a => {
        id = a['id'];
        Name = a['Name'];
      }
    )
    this.DepartmentService.getDepartment(id).subscribe(
      d => this.department = d
    )
  }

}
